const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");
const clearLocalstorageBtn = document.querySelector('.clear_localstorage')

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  signupForm.style.display = "none";
  loginForm.style.display = "block";
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  if (username === storedUsername && password === storedPassword) {
    setTimeout(() => {
      alert("Login successful! Wait a bit");
      setTimeout(() => {
        location.href = 'http://127.0.0.1:5500/coctail/home.html'
      }, 2000);
    }, 0);
  } else {
    alert("Invalid username or password.");
  }
});

if (localStorage.getItem("username") && localStorage.getItem("password")) {
  loginForm.style.display = "none";
  signupForm.style.display = "block";
}

clearLocalstorageBtn.addEventListener('click', () => {
  localStorage.clear();
});