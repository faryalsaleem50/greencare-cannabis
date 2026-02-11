
   const signupForm = document.getElementById("signupForm");
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Account created successfully!");
      window.location.href = "login.html";
    });
      const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Login successful!");
      window.location.href = "index.html";
    });