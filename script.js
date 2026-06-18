// simple fade-in effect
const projects = document.querySelectorAll(".project");

window.addEventListener("scroll", () => {
  projects.forEach(project => {
    const top = project.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      project.style.opacity = 1;
      project.style.transform = "translateY(0)";
    }
  });
});