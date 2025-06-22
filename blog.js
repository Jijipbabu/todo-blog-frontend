5. JS / BLOG.JS 


      let posts = JSON.parse(localStorage.getItem("posts")) || [];

function renderPosts() {
  const container = document.getElementById("postsContainer");
  container.innerHTML = "";
  [...posts].reverse().forEach((post, index) => {
    const div = document.createElement("div");
    div.className = "post";
    div.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.content}</p>
      <button onclick="editPost(${index})">Edit</button>
      <button onclick="deletePost(${index})">Delete</button>
    `;
    container.appendChild(div);
  });
}

function addPost() {
  const title = document.getElementById("blogTitle").value.trim();
  const content = document.getElementById("blogContent").value.trim();
  if (title && content) {
    posts.push({ title, content });
    localStorage.setItem("posts", JSON.stringify(posts));
    document.getElementById("blogTitle").value = "";
    document.getElementById("blogContent").value = "";
    renderPosts();
  }
}

function deletePost(index) {
  posts.splice(index, 1);
  localStorage.setItem("posts", JSON.stringify(posts));
  renderPosts();
}

function editPost(index) {
  const post = posts[index];
  document.getElementById("blogTitle").value = post.title;
  document.getElementById("blogContent").value = post.content;
  deletePost(index);
}

renderPosts();

