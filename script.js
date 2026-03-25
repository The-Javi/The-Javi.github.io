document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("overlay");
  const overlayImg = document.getElementById("overlayImg");
  const overlayClose = document.getElementById("overlayClose");

  let isDragging = false;
  let startX, startY, imgX = 0, imgY = 0;

  // CLICK IMAGE TO OPEN
  document.querySelectorAll("img").forEach((img) => {
    img.style.cursor = "zoom-in";

    img.addEventListener("click", () => {
      overlay.classList.add("active");
      overlayImg.src = img.src;
      overlayImg.alt = img.alt;

      overlayImg.style.transform = "translate(0px, 0px) scale(1)";
      imgX = 0;
      imgY = 0;
    });
  });

  // CLOSE FUNCTIONS
  function closeOverlay() {
    overlay.classList.remove("active");
    overlayImg.src = "";
  }

  overlayClose.addEventListener("click", closeOverlay);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeOverlay();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeOverlay();
  });

  // DRAG FUNCTION
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
    overlayImg.style.transform = `translate(${imgX}px, ${imgY}px) scale(1.1)`;
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    overlayImg.style.cursor = "grab";
  });
});
