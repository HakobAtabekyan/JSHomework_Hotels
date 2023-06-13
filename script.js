// Check if the user is already registered
// if (localStorage.getItem("username") && localStorage.getItem("password")) {
//     document.getElementById("registrationBlock").style.display = "none";
//   } else {
//     document.getElementById("loginBlock").style.display = "none";
//   }
  
  // Function to register the user
  function register() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // // Save the registration details in localStorage
    // localStorage.setItem("username", username);
    // localStorage.setItem("password", password);
    
    // Hide the registration block and show the login block
    // document.getElementById("registrationBlock").style.display = "none";
    // document.getElementById("loginBlock").style.display = "block";
    if (username.length === 0 || password.length === 0) {
        alert("Please enter both username and password");
        return;
      }else {
        localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    document.getElementById("registrationBlock").style.display = "none";
    document.getElementById("loginBlock").style.display = "block";

      }
  }
 

  
  // Function to perform login
  function login() {
    var loginUsername = document.getElementById("loginUsername").value;
    var loginPassword = document.getElementById("loginPassword").value;
    
    // Check if the login details match the registration details
    if (  loginUsername === localStorage.getItem("username") && loginPassword === localStorage.getItem("password")) {
        window.location.href = "second_page.html";
      // Perform further actions after successful login
    } else {
      alert("Invalid username or password");
    }
  }