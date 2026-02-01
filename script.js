document.addEventListener("DOMContentLoaded", () => {
    const toast = document.getElementById("toast");


  



let loginBtn = document.getElementById("loginBtn");
let signupBtn = document.getElementById("signupBtn");
let title = document.getElementById("title");
let nameField = document.getElementById("nameField");
let email = document.getElementById("email");
let password = document.getElementById("password");
let msg = document.getElementById("msg");

// DEFAULT STATE
function setLogin() {
  title.innerText = "Login";
  nameField.style.display = "none";
  loginBtn.classList.remove("disable");
  signupBtn.classList.add("disable");
  msg.innerText = "";
}

// SIGNUP STATE
function setSignup() {
  title.innerText = "Sign Up";
  nameField.style.display = "block";
  signupBtn.classList.remove("disable");
  loginBtn.classList.add("disable");
  msg.innerText = "";
}

// Toggle views
signupBtn.onclick = setSignup;
loginBtn.onclick = setLogin;
setLogin();

// VALIDATION
loginBtn.addEventListener("click", () => {
  if (title.innerText === "Login") {
    if (!email.value || !password.value) {
        showToast("Please enter email and password.");

      msg.style.color = "red";
      document.querySelector(".form-box").classList.add("shake");

      setTimeout(() => {
        document.querySelector(".form-box").classList.remove("shake");
      }, 300);
    } else {
        showToast("Login successful (demo).", true);

      msg.style.color = "green";
    }
  }
});

signupBtn.addEventListener("click", () => {
  if (title.innerText === "Sign Up") {
    if (!nameField.value || !email.value || !password.value) {
      showToast("All fields are required for signup.");
      msg.style.color = "red";
      document.querySelector(".form-box").classList.add("shake");

      setTimeout(() => {
        document.querySelector(".form-box").classList.remove("shake");
      }, 300);
    } else if (password.value.length < 6) {
      showToast("Password must be at least 6 characters.");
      msg.style.color = "red";
      document.querySelector(".form-box").classList.add("shake");

      setTimeout(() => {
        document.querySelector(".form-box").classList.remove("shake");
      }, 300);
    } else {
      showToast("Signup successful (demo).", true);
      msg.style.color = "green";
    }
  }
});

let togglePass = document.getElementById("togglePass");

togglePass.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    togglePass.textContent = "🙈";
  } else {
    password.type = "password";
    togglePass.textContent = "👁️";
  }
});

let rememberMe = document.getElementById("rememberMe");

// load saved email
window.onload = () => {
  const savedEmail = localStorage.getItem("rememberedEmail");
  if (savedEmail) {
    email.value = savedEmail;
    rememberMe.checked = true;
  }
};

// save email on login
loginBtn.addEventListener("click", () => {
  if (rememberMe.checked && email.value) {
    localStorage.setItem("rememberedEmail", email.value);
  } else {
    localStorage.removeItem("rememberedEmail");
  }
});



function showToast(message, success = false) {
  toast.innerText = message;
  toast.style.background = success ? "#22c55e" : "#ef4444";
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}


});