let feed = document.getElementById("feed");
let imagePreview = document.getElementById("imagePreview");
let selectedImage = null;

document.getElementById("postImage").addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      selectedImage = e.target.result;
      imagePreview.innerHTML = `<img src="${selectedImage}" alt="Preview">`;
    };
    reader.readAsDataURL(file);
  } else {
    selectedImage = null;
    imagePreview.innerHTML = "";
  }
});

function createPost() {
  let text = document.getElementById("postText").value;
  if (text.trim() === "" && !selectedImage) return;

  let post = document.createElement("div");
  post.className = "post";
  post.innerHTML = `
    <p>${text}</p>
    ${selectedImage ? `<img src="${selectedImage}" alt="Post Image" style="max-width:100%; border-radius:10px; margin-top:10px;">` : ""}
    <span class="like-button" onclick="likePost(this)">👍 Like (<span>0</span>)</span>
  `;

  feed.prepend(post);
  document.getElementById("postText").value = "";
  document.getElementById("postImage").value = "";
  imagePreview.innerHTML = "";
  selectedImage = null;
}

function likePost(button) {
  let countSpan = button.querySelector("span");
  let count = parseInt(countSpan.textContent);
  countSpan.textContent = count + 1;
}
