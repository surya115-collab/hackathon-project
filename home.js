function showSignup() {
  document.getElementById("loginCard").classList.add("hidden");
  document.getElementById("signupCard").classList.remove("hidden");
}

function showLogin() {
  document.getElementById("signupCard").classList.add("hidden");
  document.getElementById("loginCard").classList.remove("hidden");
}

function login() {
  let username = document.getElementById("loginUsername").value;
  let password = document.getElementById("loginPassword").value;

  if (username && password) {
    alert(`Welcome back, ${username}!`);
  } else {
    alert("Please enter both username and password.");
  }
}

function signup() {
  let username = document.getElementById("signupUsername").value;
  let password = document.getElementById("signupPassword").value;
  let confirm = document.getElementById("signupConfirm").value;

  if (!username || !password || !confirm) {
    alert("Please fill all fields.");
    return;
  }

  if (password !== confirm) {
    alert("Passwords do not match!");
    return;
  }

  alert(`Account created for ${username}! You can now login.`);
  showLogin();
}
