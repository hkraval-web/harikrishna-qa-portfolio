
document.addEventListener("DOMContentLoaded", () => {
  // Keep the copyright year up to date.
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Highlight the sidebar navigation item when clicked.
  const navigationLinks = document.querySelectorAll(".side-nav a");

  navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navigationLinks.forEach((item) => {
        item.classList.remove("active");
      });

      link.classList.add("active");
    });
  });
});
