document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("overlay");
  const overlayImg = document.getElementById("overlayImg");
  const overlayClose = document.getElementById("overlayClose");

  // Click any .hero image to zoom
  document.querySelectorAll("img.hero").forEach((img) => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => {
      overlay.classList.add("active");
      overlayImg.src = img.src;
      overlayImg.alt = img.alt;
    });
  });

  // Close overlay
  overlayClose.addEventListener("click", () => {
    overlay.classList.remove("active");
    overlayImg.src = "";
  });

  // Close by clicking outside the image
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.remove("active");
      overlayImg.src = "";
    }
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && overlay.classList.contains("active")) {
    overlay.classList.remove("active");
    overlayImg.src = "";
  }
});
