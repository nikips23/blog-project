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


let blogs = localStorage.getItem("blogs");
let blogList = document.querySelector("#blog-list");
blogs = JSON.parse(blogs);

let list = blogs.map((value) => {
  return `
  <article class="card">
        <section class="left-side">
            <h2>${value.title}</h2>
            <p>${value.description}</p>
            <p class="feed-name">- ${value.author}</p>
        </section>
        <section class="right-side">
            <img src="${value.url}" alt="" class="feed-img">
        </section>
      </article>

    `;
});
blogList.innerHTML = list.join("");
console.log(blogs);

let logoutBtn = document.querySelector("#logout");
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

let WriteBtn = document.querySelector(".write-btn");
WriteBtn.addEventListener("click",()=>{
    window.location.replace("/index.html");
})
console.log(WriteBtn)
