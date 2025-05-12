// document.addEventListener("DOMContentLoaded", function () {
//     let text = "Hi, I'm Rohit Jena";
//      let speed = 100; // Typing speed in milliseconds
//     let delay = 1500; // Pause before restarting loop
//     let i = 0;

//     function typeEffect() {
//         if (i < text.length) {
//             document.querySelector(".typewriter h1").innerHTML = text.substring(0, i) + `<span class="cursor">|</span>`;
//             i++;
//             setTimeout(typeEffect, speed);
//         } else {
//             setTimeout(() => {
//                 i = 0; // Reset index
//                 document.querySelector(".typewriter h1").innerHTML = `<span class="cursor">|</span>`;
//                 typeEffect(); // Restart typing effect
//             }, delay);
//         }
//     }

//     typeEffect();
// });
// Always scroll to top on page reload
window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0);
});

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_mj8pa9a", "template_5vqj29e", this)
    .then(() => {
      alert("✅ Message sent successfully!");
      this.reset();
    }, (error) => {
      console.error("❌ Email send error:", error);
      alert("❌ Failed to send message. Please try again.");
    });
});

// Toggle mobile menu
document.getElementById("menu-btn").addEventListener("click", () => {
  document.getElementById("mobile-menu").classList.toggle("hidden");
});

// Smooth scroll for all nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetID = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetID);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    // Close mobile menu if open
    if (!document.getElementById("mobile-menu").classList.contains("hidden")) {
      document.getElementById("mobile-menu").classList.add("hidden");
    }
  });
});

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function onScrollHighlight() {
  let scrollPos = window.scrollY + 100; // offset to adjust for navbar height

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", onScrollHighlight);


