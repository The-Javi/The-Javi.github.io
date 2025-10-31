document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("overlay");
  const overlayImg = document.getElementById("overlayImg");
  const overlayClose = document.getElementById("overlayClose");

  let isDragging = false;
  let startX, startY, imgX = 0, imgY = 0;

  // Zoom and drag functionality
  document.querySelectorAll("img.hero").forEach((img) => {
    img.style.cursor = "zoom-in";

    img.addEventListener("click", () => {
      overlay.classList.add("active");
      overlayImg.src = img.src;
      overlayImg.alt = img.alt;

      // reset transform
      overlayImg.style.transform = "translate(0px, 0px) scale(1)";
      imgX = 0; imgY = 0;
    });
  });

  // Close overlay
  overlayClose.addEventListener("click", closeOverlay);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeOverlay();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeOverlay();
  });

  function closeOverlay() {
    overlay.classList.remove("active");
    overlayImg.src = "";
  }

  // Dragging functionality
  overlayImg.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX - imgX;
    startY = e.clientY - imgY;
    overlayImg.style.cursor = "grabbing";
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    imgX = e.clientX - startX;
    imgY = e.clientY - startY;
    overlayImg.style.transform = `translate(${imgX}px, ${imgY}px) scale(1.2)`;
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    overlayImg.style.cursor = "grab";
  });

  // Explosion view: scale all project cards slightly on hover
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.03)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
    });
  });
});
