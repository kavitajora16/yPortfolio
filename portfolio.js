// ✅ Initialize particles.js
document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-js", {
    particles: {
      number: { value: 120 },
      size: { value: 4 },
      move: { speed: 1.5 },
      line_linked: { enable: true, opacity: 0.4 },
      color: { value: "#ffffff" },
      shape: { type: "circle" }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" }
      },
      modes: {
        grab: { distance: 14, line_linked: { opacity: 11 } }
      }
    }
  });

  // ✅ Projects Data
  const projects = [
    {
      title: "E-commerce Website",
      image: "e-commerce.jpg",
      description: "Full-featured e-commerce website with cart and checkout",
      tech: "HTML, CSS, JavaScript",
      github: "https://github.com/kavitajora16/E-commerce-site",
      demo: "https://multimart-ecommerce.onrender.com" // ✅ only this has demo
    },
    {
      title: "E-Learning Platform",
      image: "e-learning.jpg",
      description: "MERN-based platform for creating, selling, and accessing courses",
      tech: "MongoDB, Express, React, Node.js",
      github: "https://github.com/yourusername/elearning"
    },
    {
      title: "Outfit Planner",
      image: "outfit-planner.jpg",
      description: "Weather-based outfit planner recommending clothing using live weather data",
      tech: "React, OpenWeather API",
      github: "https://github.com/yourusername/outfit-planner"
    }
  ];

  const carouselContainer = document.getElementById("carouselProjects");

  // ✅ Generate Carousel Items
  projects.forEach((project, index) => {
    const activeClass = index === 0 ? "active" : "";
    const item = `
      <div class="carousel-item ${activeClass} text-center">
        <img src="${project.image}" class="img-fluid rounded shadow" alt="${project.title}" style="max-height:250px; object-fit:contain;">
        <h4 class="mt-3">${project.title}</h4>
        <p class="text-muted">${project.description}</p>
        <button class="btn btn-primary mt-2" onclick="openProject(${index})">
          <i class="fas fa-eye"></i> View Details
        </button>
      </div>
    `;
    carouselContainer.innerHTML += item;
  });

  // ✅ Global Modal Function
  window.openProject = function (index) {
    const project = projects[index];
    document.getElementById("projectTitle").textContent = project.title;
    document.getElementById("projectImage").src = project.image;
    document.getElementById("projectDescription").textContent = project.description;
    document.getElementById("projectTech").textContent = project.tech;

    // ✅ GitHub Button
    const githubBtn = document.getElementById("projectGithub");
    githubBtn.href = project.github;

    // ✅ Demo Button (only visible if demo exists)
    const demoBtn = document.getElementById("projectDemo");
    if (project.demo) {
      demoBtn.href = project.demo;
      demoBtn.style.display = "inline-block";
    } else {
      demoBtn.style.display = "none";
    }

    // ✅ Show Modal
    $("#projectModal").modal("show");
  };
});
