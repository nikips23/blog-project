let createAccountBtn = document.querySelector(".login-btn2");
let popRegistration = document.querySelector(".block-area");
let cancelBtn = document.querySelector("#cancel");
let saveBtn = document.querySelector("#save");

let fullName = document.querySelector("#fullName");
let email = document.querySelector("#email");
let mobile = document.querySelector("#mobile");
let password = document.querySelector("#password");
let cpassword = document.querySelector("#cpassword");

let lUserName = document.querySelector("#lUsername");
let lPassword = document.querySelector("#lPassword");
let signIn = document.querySelector("#sign-in");

// is userLogin

let login = localStorage.getItem("login");
if (login !== null) {
  window.location.replace("/index.html");
}

createAccountBtn.addEventListener("click", () => {
  popRegistration.classList.remove("d-none");
});

cancelBtn.addEventListener("click", () => {
  popRegistration.classList.add("d-none");
});

saveBtn.addEventListener("click", () => {
  let newUser = {
    fullName: fullName.value,
    email: email.value,
    mobile: mobile.value,
    password: password.value,
  };

  // local storage --> save
  let userList = localStorage.getItem("users"); // null;

  userList = userList === null ? [] : JSON.parse(userList);

  let isUserExist = userList.find((value) => {
    return value.email === newUser.email;
  });

  if (isUserExist === undefined) {
    userList.push(newUser);
    localStorage.setItem("users", JSON.stringify(userList));
    Swal.fire({
      icon: "success",
      title: "Resistration Successful",
      showConfirmButton: false,
      timer: 1500
    });
    // alert("Registration successful, you can login now");
    popRegistration.classList.add("d-none");
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Email is Already Exists",
      footer: '<a href="#">Why do I have this issue?</a>'
    });
  }
});

signIn.addEventListener("click", () => {
  let username = lUserName.value;
  let password = lPassword.value;

  let userList = localStorage.getItem("users"); // null;

  userList = userList === null ? [] : JSON.parse(userList);

  let isUserExist = userList.findIndex((value) => {
    return value.email === username && value.password === password;
  });

  if (isUserExist === -1) {
    alert("User not found, please try again");
  } else {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500
    });
    localStorage.setItem("login", isUserExist);
    window.location.replace("/index.html");
  }
});