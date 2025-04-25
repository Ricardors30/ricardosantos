document.addEventListener("DOMContentLoaded", () => {
  const videoWrapper = document.querySelector(".video-wrapper iframe");
  if (videoWrapper) {
    videoWrapper.setAttribute("loading", "lazy");
  }

  // Comportamento de rolagem suave
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
