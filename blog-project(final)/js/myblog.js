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

let WriteBtn = document.querySelector(".write-btn");
WriteBtn.addEventListener("click",()=>{
    window.location.replace("/index.html");
})
console.log(WriteBtn)


let logoutBtn = document.querySelector("#logout");
logoutBtn.addEventListener("click", () => {
  logoutBtn.addEventListener("click",()=>{
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
    })
});

function printData(){
    let blogs = localStorage.getItem('blogs');
    let blogList = document.querySelector("#blog-list");
    
    blogs = JSON.parse(blogs);
    
    let list = blogs.map((value) => {
        return `
        <article class="card">
        <section class="left-side">
            <h2>${value.title}</h2>
            <p>${value.description}</p>
            <p class="author"><button class="remove-blog" data-id=${value.id}>Delete</button> </p>
        </section>
        <section class="right-side">
            <img src="${value.url}" alt="" class="feed-img">
        </section>
      </article>
        `;
    });
    blogList.innerHTML = list.join("");
    removeblog();
}
printData();

function removeblog(){
    let removeBlogList = document.querySelectorAll(".remove-blog");
    removeBlogList.forEach((removebutton) =>{
        removebutton.addEventListener("click",()=>{
            let id = removebutton.dataset.id
            console.log(id);
            let blogs = JSON.parse(localStorage.getItem("blogs"));
            blogs = blogs.filter((value) =>{
                return value.id != id;
            });
            localStorage.setItem("blogs",JSON.stringify(blogs));
            printData();
        })
        
    });
};



