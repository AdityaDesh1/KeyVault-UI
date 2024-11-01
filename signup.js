function handleSignup() {
  console.log("in handlesignup");
  
  const email = document.getElementById("email").value;
  const fullname = document.getElementById("fullname").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Check if password and confirmPassword match
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // Send signup data to the backend
  fetch("http://localhost:3000/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, fullname, username, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert("Signup completed successfully!");
        // Redirect to the login page
        window.location.href = "login.html";
      } else {
        alert(data.message || "Signup failed, please try again.");
      }
    })
    .catch((error) => {
      console.error("Error during signup:", error);
      alert("An error occurred. Please try again later.");
    });
}
