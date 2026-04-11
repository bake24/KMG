const root = document.documentElement;
const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const applicationForm = document.querySelector("[data-application-form]");
const applicationStatus = document.querySelector("[data-application-status]");
const contactForm = document.querySelector("[data-contact-form]");
const contactStatus = document.querySelector("[data-contact-status]");
const revealItems = document.querySelectorAll(".reveal");
const faqItems = document.querySelectorAll(".faq-item");
const parallaxImage = document.querySelector("[data-parallax] img");
const scrollProgress = document.querySelector("[data-scroll-progress]");
const hero = document.querySelector(".hero");
const tiltItems = document.querySelectorAll("[data-tilt]");

const textFixes = [
  [".hero-eye", "Kayili M Group LLC · Nationwide OTR Fleet Since 2022"],
  [".copy-block blockquote", "\"Most carriers treat drivers as an asset to be used. We treat them as the business itself.\""],
  [".review-grid .review-card:nth-child(1) p", "\"Dispatch actually answers. That alone puts KMG in a different category from fleets that leave drivers guessing.\""],
  [".review-grid .review-card:nth-child(1) .review-author span", "Company Driver · OTR"],
  [".review-grid .review-card:nth-child(2) p", "\"Clean communication, better standards, and a company that feels intentional about keeping good people long-term.\""],
  [".review-grid .review-card:nth-child(2) .review-author span", "Company Driver · CDL-A"],
  [".review-grid .review-card:nth-child(3) p", "\"As a freight partner, KMG is one of the teams you can trust to communicate before problems become problems.\""]
];

const setTheme = (theme) => {
  root.dataset.theme = theme;
  localStorage.setItem("kmg-theme", theme);

  if (themeToggle) {
    themeToggle.textContent = theme === "dark" ? "Dark" : "Light";
    themeToggle.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} theme`);
  }
};

const syncHeaderState = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);

  if (scrollProgress) {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const percent = height > 0 ? (window.scrollY / height) * 100 : 0;
    scrollProgress.style.width = `${percent}%`;
  }
};

const closeMobileMenu = () => {
  navMenu?.classList.remove("is-open");
  navToggle?.setAttribute("aria-expanded", "false");
};

setTheme(localStorage.getItem("kmg-theme") || "light");
syncHeaderState();

textFixes.forEach(([selector, value]) => {
  const node = document.querySelector(selector);
  if (node) {
    node.textContent = value;
  }
});

window.addEventListener("scroll", syncHeaderState, { passive: true });

themeToggle?.addEventListener("click", () => {
  setTheme(root.dataset.theme === "dark" ? "light" : "dark");
});

navToggle?.addEventListener("click", () => {
  const isOpen = navMenu?.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

navMenu?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    closeMobileMenu();
  }
});

faqItems.forEach((item) => {
  const button = item.querySelector(".faq-question");
  const icon = button?.querySelector("span");

  button?.addEventListener("click", () => {
    const isOpen = item.classList.toggle("is-open");
    if (icon) {
      icon.textContent = isOpen ? "−" : "+";
    }
  });
});

tiltItems.forEach((item) => {
  item.addEventListener("pointermove", (event) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const rect = item.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * 8;
    const rotateX = (0.5 - y) * 8;
    item.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });

  item.addEventListener("pointerleave", () => {
    item.style.transform = "";
  });
});

applicationForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(applicationForm);
  const firstName = data.get("firstName") || "Driver";

  applicationStatus.textContent = `${firstName}, your application template is ready for backend connection.`;
  applicationForm.reset();
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const name = data.get("name") || "Thank you";

  contactStatus.textContent = `${name}, your message template was captured locally.`;
  contactForm.reset();
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

hero?.addEventListener("pointermove", (event) => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const rect = hero.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;
  hero.style.setProperty("--glow-x", `${x}%`);
  hero.style.setProperty("--glow-y", `${y}%`);
});

window.addEventListener(
  "scroll",
  () => {
    if (!parallaxImage || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const offset = Math.min(window.scrollY * 0.05, 18);
    parallaxImage.style.transform = `translateY(${offset}px) scale(1.03)`;
  },
  { passive: true }
);
