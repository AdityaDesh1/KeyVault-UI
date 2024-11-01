function handleLogin() {
  const usernameOrEmail = document.getElementById("usernameOrEmail").value;
  const password = document.getElementById("password").value;
  console.log("Sending to backend:", usernameOrEmail, password); // Debugging line

  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ usernameOrEmail, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert("Login successfully completed!");
        window.location.href = "service.html";
      } else {
        alert(data.message || "Login failed. Please check your credentials.");
      }
    })
    .catch((error) => {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again later.");
    });
}
