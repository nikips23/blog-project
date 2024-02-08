let login = localStorage.getItem("login");
let userDetails = null;
if (login === null) {
  window.location.replace("/registration.html");
} else {
  userDetails = localStorage.getItem("users");
  userDetails = JSON.parse(userDetails);
  userDetails = userDetails[login];
  document.querySelector("#welcome-text").innerHTML = `Welcome, <b>${
    userDetails.fullName.split(" ")[0]
  }</b>`;
}

console.log(userDetails);
let logoutBtn = document.querySelector("#logout");
let title = document.querySelector("#title");
let description = document.querySelector("#description");
let url = document.querySelector("#url");
let saveBlogBtn = document.querySelector("#save-blog");
let imgPreview=document.querySelector(".img > img");

url.addEventListener("blur",()=>{
  console.log(url.value);
  imgPreview.src=url.value;
});

saveBlogBtn.addEventListener("click", () => {
  let newBlog = {
    id:Date.now(),
    title: title.value,
    description: description.value,
    url: url.value,
    user_id: login,
    author: userDetails.fullName,
  };
  let blogs = localStorage.getItem("blogs"); // null;
  blogs = blogs === null ? [] : JSON.parse(blogs);

  blogs.unshift(newBlog);
  localStorage.setItem("blogs", JSON.stringify(blogs));
  Swal.fire({
    icon: "success",
    title: "Blog Saved Successfully",
    showConfirmButton: false,
    timer: 1500
  });
  title.value=description.value=url.value=""
});

logoutBtn.addEventListener("click", () => {
  
  Swal.fire({
    title: "Are you sure?",
    text: "Are you sure to logout",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, logout it!"
  }).then((result) => {
    if (result.isConfirmed) {
        localStorage.removeItem("login");
        window.location.replace("/registration.html");
    }
  });
});