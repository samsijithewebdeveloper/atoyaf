const items = document.querySelectorAll(".floating-item");
const container = document.querySelector(".floating-gallery");

const padding = 5; // DISTANCE FROM WALLS

items.forEach((item) => {

  const itemWidth = item.offsetWidth;
  const itemHeight = item.offsetHeight;

  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;

  // RANDOM START POSITION
  let x =
    Math.random() *
    (containerWidth - itemWidth - padding * 2) +
    padding;

  let y =
    Math.random() *
    (containerHeight - itemHeight - padding * 2) +
    padding;

  // RANDOM SPEED
  let dx =
    (Math.random() * 2 + 1) *
    (Math.random() < 0.5 ? -1 : 1);

  let dy =
    (Math.random() * 2 + 1) *
    (Math.random() < 0.5 ? -1 : 1);

  let paused = false;

  item.style.left = `${x}px`;
  item.style.top = `${y}px`;

  // STOP MOVEMENT ON HOVER
  item.addEventListener("mouseenter", () => {
    paused = true;
  });

  // CONTINUE MOVEMENT
  item.addEventListener("mouseleave", () => {
    paused = false;
  });

  function animate() {

    if (!paused) {

      x += dx;
      y += dy;

      // LEFT & RIGHT LIMITS
      if (
        x <= padding ||
        x >= containerWidth - itemWidth - padding
      ) {
        dx *= -1;
      }

      // TOP & BOTTOM LIMITS
      if (
        y <= padding ||
        y >= containerHeight - itemHeight - padding
      ) {
        dy *= -1;
      }

      item.style.left = `${x}px`;
      item.style.top = `${y}px`;
    }

    requestAnimationFrame(animate);
  }

  animate();
});