const targetDate = new Date("May 15, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const gap = targetDate - now;

  if (gap <= 0) {
    window.location.href = "password.html";
    return;
  }

  const days = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((gap % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = String(days).padStart(2, '0');
  document.getElementById("hours").innerText = String(hours).padStart(2, '0');
  document.getElementById("minutes").innerText = String(mins).padStart(2, '0');
  document.getElementById("seconds").innerText = String(secs).padStart(2, '0');
}, 1000);

function createSparkles() {
  const container = document.getElementById("sparkles");
  const symbols = ['✦', '✧', '★', '·'];

  for (let i = 0; i < 30; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    sparkle.style.left = Math.random() * 100 + "%";
    sparkle.style.top = Math.random() * 100 + "%";
    sparkle.style.fontSize = (8 + Math.random() * 14) + "px";
    sparkle.style.animationDelay = (Math.random() * 5) + "s";
    sparkle.style.animationDuration = (2 + Math.random() * 3) + "s";
    container.appendChild(sparkle);
  }
}

function createConfetti() {
  const container = document.getElementById("confetti");
  const colors = ['#ffb3d1', '#a8c8ff', '#c8a0e8', '#ffcc70', '#7ab3ff', '#f598c0'];

  for (let i = 0; i < 25; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = Math.random() * 100 + "%";
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = (Math.random() * 8) + "s";
    piece.style.animationDuration = (6 + Math.random() * 6) + "s";
    piece.style.width = (4 + Math.random() * 5) + "px";
    piece.style.height = (4 + Math.random() * 5) + "px";
    piece.style.borderRadius = Math.random() > 0.5 ? "50%" : "1px";
    container.appendChild(piece);
  }
}

createSparkles();
createConfetti();
