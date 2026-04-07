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

const setTheme = (theme) => {
  root.dataset.theme = theme;
  localStorage.setItem("kmg-theme", theme);

  if (themeToggle) {
    const nextTheme = theme === "dark" ? "light" : "dark";
    themeToggle.textContent = theme === "dark" ? "Dark" : "Light";
    themeToggle.setAttribute("aria-label", `Switch to ${nextTheme} theme`);
  }
};

const syncHeaderState = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
};

const closeMobileMenu = () => {
  navMenu?.classList.remove("is-open");
  navToggle?.setAttribute("aria-expanded", "false");
};

setTheme(localStorage.getItem("kmg-theme") || "light");
syncHeaderState();

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

  contactStatus.textContent = `${name}, your contact template was captured locally. Backend delivery can be added next.`;
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
    { threshold: 0.15 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
