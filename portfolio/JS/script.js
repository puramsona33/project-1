// script.js
window.onload = () => {
  alert("JavaScript is working!");
};
function animateBackground() {
  const bg = document.querySelector('.background-animation');
  if (!bg) return;
  let hue = 0;
  setInterval(() => {
    hue = (hue + 1) % 360;
    bg.style.background = `linear-gradient(120deg, hsl(${hue}, 80%, 90%), hsl(${(hue+60)%360}, 80%, 90%))`;
  }, 60);
}

// Smooth scroll to section (optional enhancement)
function enableSmoothScroll() {
  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.hash && document.querySelector(this.hash)) {
        e.preventDefault();
        document.querySelector(this.hash).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Initialize functions when DOM is ready
window.onload = () => {
  animateBackground();
  enableSmoothScroll();
};
