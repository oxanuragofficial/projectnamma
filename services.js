let cursor = document.getElementById("cursor");
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener("mousemove", (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    });

    function animateCursor() {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      cursor.style.left = cursorX + "px";
      cursor.style.top = cursorY + "px";
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Intersection Observer Engine for Reveal Effects
    document.addEventListener("DOMContentLoaded", function () {
      const blocks = document.querySelectorAll(".service-block, .services-wrapper");
      const revealItems = document.querySelectorAll(".happy-client-wrapper .reveal-item");
      const textLines = document.querySelectorAll(".animated-text-line");

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".reveal-item");
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("active");
              }, index * 110);
            });
          }
        });
      }, { threshold: 0.12 });

      blocks.forEach((block) => observer.observe(block));

      const clientObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      }, { threshold: 0.15 });

      revealItems.forEach((el) => clientObserver.observe(el));

      const quoteObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            textLines.forEach((line, index) => {
              setTimeout(() => {
                line.classList.add("active");
              }, index * 120);
            });
          }
        });
      }, { threshold: 0.2 });

      const quoteElement = document.querySelector(".testimonial-quote");
      if (quoteElement) {
        quoteObserver.observe(quoteElement);
      }
    });