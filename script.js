// Cursor Movement
const cursor = document.getElementById("cursor");
const cursorDot = document.getElementById("cursorDot");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  cursorDot.style.left = e.clientX + "px";
  cursorDot.style.top = e.clientY + "px";
});

// AOS Initialization
AOS.init({ duration: 1000, once: true });

// Animated Counters
const counters = document.querySelectorAll(".stat-number");
counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = Math.ceil(target / 100);
    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 300);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});

// Hide Loading Screen After Page Load
window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loadingScreen");
  loadingScreen.classList.add("hidden"); // This triggers CSS fade-out
});