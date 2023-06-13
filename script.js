
// Checking if user already loged in


const currentuser = JSON.parse(localStorage.getItem("lastuser"));
if (currentuser) {
  window.location.href = "./mainpage/index.html";
}

let userlist = JSON.parse(localStorage.getItem("userlist"));
if (!userlist) {
  userlist = [];
  localStorage.setItem("userlist", JSON.stringify(userlist));
}

function register() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username.length === 0 || password.length === 0) {
    alert("Please enter both email and password");
    return;
  } else if (!username.includes("@")) {
    alert("Please enter valid email");
    return;

  } else {

    let newuser = userlist.find((item) => item.username == username)

    if (newuser) {
      alert("This email already registered");
      return;

    }

    newuser = {
      "username": username,
      "password": password
    }

    userlist.push(newuser)

    localStorage.setItem("userlist", JSON.stringify(userlist));
    localStorage.setItem("lastuser", JSON.stringify(newuser));
    document.getElementById("registrationBlock").style.display = "none";
    document.getElementById("loginBlock").style.display = "block";

  }
}



// Function to perform login
function login() {
  var loginUsername = document.getElementById("loginUsername").value;
  var loginPassword = document.getElementById("loginPassword").value;

  let user = userlist.find((item) => item.username == loginUsername)

  if (!user) {
    alert("Invalid email");
    return;

  }

  if (user.password === loginPassword) {

    window.location.href = "./mainpage/index.html";
    localStorage.setItem("lastuser", JSON.stringify(user));
  } else {
    alert("Invalid password");
  }
}