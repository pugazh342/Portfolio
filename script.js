const projects = [
    {
      title: "TunTun Shop",
      description: "An Ecommerce webstie like Amazon , Flipkart for 90's Kids.",
      link: "https://pandam-shops.web.app/"
    },
    {
      title: "Medi_Bot",
      description: "A Medical Chatbot for General peoples for ensure their disease with their symptoms.",
      link: "https://github.com/pugazh342/medi-bot"
    },
    {
      title: "Aura AI",
      description: "A Desktop voice Assistance , The mini Jarvis.",
      link: "https://github.com/pugazh342/Aura-AI"
    },
    {
        title: "Online Quiz",
        description: "A Quiz web application for students to test their knowledge.",
        link: "https://github.com/pugazh342/online-test-platform"
      },
    // Add more projects here...
  ];
  
  function displayProjects() {
    const container = document.getElementById("projects-list");
    projects.forEach(project => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View on GitHub</a>
      `;
      container.appendChild(card);
    });
    card.setAttribute("data-aos", "fade-up");
  }
  const form = document.getElementById("contact-form");
const formMsg = document.getElementById("form-msg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    formMsg.textContent = "All fields are required.";
    formMsg.style.color = "red";
    return;
  }

  if (!validateEmail(email)) {
    formMsg.textContent = "Please enter a valid email address.";
    formMsg.style.color = "red";
    return;
  }

  formMsg.textContent = "Message sent successfully! We'll get back to you soon.";
  formMsg.style.color = "green";
  form.reset();
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}

  
  window.onload = displayProjects;
  // Add this below displayProjects()

const themeToggle = document.getElementById("theme-toggle");
let darkMode = false;

themeToggle.addEventListener("click", () => {
  darkMode = !darkMode;
  document.documentElement.style.setProperty("--bg", darkMode ? "#121212" : "#f8f8f8");
  document.documentElement.style.setProperty("--text", darkMode ? "#e0e0e0" : "#333");
  document.documentElement.style.setProperty("--card-bg", darkMode ? "#1f1f1f" : "white");
  document.documentElement.style.setProperty("--nav-bg", darkMode ? "#1a1a1a" : "#444");
  document.documentElement.style.setProperty("--header-bg", darkMode ? "#000" : "#222");
  document.documentElement.style.setProperty("--link-color", darkMode ? "#4ea1ff" : "#0077cc");

  themeToggle.textContent = darkMode ? "☀️ Light Mode" : "🌙 Dark Mode";
});

tsParticles.load("tsparticles", {
    background: {
      color: "#0f0f0f"
    },
    particles: {
      number: {
        value: 80
      },
      color: {
        value: "#00ff9f"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.3
      },
      size: {
        value: 3
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#00ff9f",
        opacity: 0.2,
        width: 1
      },
      move: {
        enable: true,
        speed: 1
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        }
      }
    }
  });
  