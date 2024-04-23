// form.js
const form = document.getElementById("blog-form");
const username = document.getElementById("username");
const title = document.getElementById("title");
const content = document.getElementById("content");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!username.value || !title.value || !content.value) {
    alert("Por favor, complete todos los campos del formulario.");
    return;
  }

  const newPost = {
    username: username.value,
    title: title.value,
    content: content.value,
  };

  savePost(newPost);

  window.location.href = "blog.html";
});

function savePost(post) {
  const posts = getPosts();
  posts.push(post);
  localStorage.setItem("blogPosts", JSON.stringify(posts));
}

function getPosts() {
  const postsJSON = localStorage.getItem("blogPosts");
  return postsJSON ? JSON.parse(postsJSON) : [];
}
