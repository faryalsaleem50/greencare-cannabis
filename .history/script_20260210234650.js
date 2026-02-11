 const mobileShopBtn = document.getElementById("mobileShopBtn");
  const mobileShopDropdown = document.getElementById("mobileShopDropdown");
  const mobileShopIcon = document.getElementById("mobileShopIcon");

  mobileShopBtn.addEventListener("click", () => {
    mobileShopDropdown.classList.toggle("hidden");
    // Icon rotate (optional)
    mobileShopIcon.classList.toggle("rotate-180");
  });

  // Mobile main menu toggle
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

    // Auto‑show 5th testimonial after a delay
  setTimeout(() => {
    const card5 = document.getElementById("testimonial5");
    if (card5) {
      card5.classList.remove("opacity-0");
      card5.classList.add("opacity-100");
    }
  }, 1500); // 1.5 seconds dela

   const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("The form was sent successfully.");
    contactForm.reset();
  });
   const signupForm = document.getElementById("signupForm");
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Account created successfully!");
      window.location.href = "login.html";
    });