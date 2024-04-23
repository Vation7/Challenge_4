const postsContainer = document.querySelector(".posts-container");

function loadPosts() {
  const posts = getPosts();

  posts.forEach((post) => {
    createPostElement(post);
  });
}

function createPostElement(post) {
  const postItem = document.createElement("div");
  postItem.classList.add("post-item");

  const postTitle = document.createElement("h3");
  postTitle.textContent = post.title;
  postItem.appendChild(postTitle);

  const postContent = document.createElement("p");
  postContent.textContent = post.content;
  postItem.appendChild(postContent);

  const postAuthor = document.createElement("p");
  postAuthor.classList.add("post-author");
  postAuthor.textContent = `Publicado por: ${post.username}`;
  postItem.appendChild(postAuthor);

  postsContainer.appendChild(postItem);
}

function getPosts() {
  const postsJSON = localStorage.getItem("blogPosts");
  return postsJSON ? JSON.parse(postsJSON) : [];
}

// Ejecuta la función para cargar las entradas, cuando el DOM esté listo
window.addEventListener("DOMContentLoaded", loadPosts);
