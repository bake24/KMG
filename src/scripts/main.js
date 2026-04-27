const root = document.documentElement;
const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const langButtons = document.querySelectorAll("[data-lang]");
const logoNodes = document.querySelectorAll("[data-logo]");
const favicon = document.querySelector("[data-favicon]");
const telegramLink = document.querySelector("[data-telegram-link]");
const applicationForm = document.querySelector("[data-application-form]");
const applicationStatus = document.querySelector("[data-application-status]");
const revealItems = document.querySelectorAll(".reveal");
const faqItems = document.querySelectorAll(".faq-item");
const parallaxImage = document.querySelector("[data-parallax] img");
const scrollProgress = document.querySelector("[data-scroll-progress]");
const hero = document.querySelector(".hero");
const tiltItems = document.querySelectorAll("[data-tilt]");
const newsOpenButtons = document.querySelectorAll("[data-news-open]");
const newsCloseButtons = document.querySelectorAll("[data-news-close]");
const newsModals = document.querySelectorAll(".news-modal");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const translations = {
  en: {
    "meta.title": "KMG LLC | Premium OTR Fleet Since 2020",
    "meta.description": "Kayili M Group LLC is a Philadelphia-based OTR trucking company with strong safety, service shop support, Freightliner trucks, and driver-first programs.",
    "meta.ogTitle": "KMG LLC | Premium OTR Fleet Since 2020",
    "meta.ogDescription": "Driver-first OTR trucking company for careers, partnerships, safety, and nationwide freight trust.",
    "a11y.skip": "Skip to content",
    "a11y.openNav": "Open navigation",
    "nav.offers": "Offers",
    "nav.careers": "Careers",
    "nav.safety": "Safety",
    "nav.partners": "Partners",
    "nav.shop": "Shop",
    "nav.blog": "News",
    "nav.contact": "Contact",
    "theme.light": "Light",
    "theme.dark": "Dark",
    "cta.apply": "Apply to Drive",
    "cta.partner": "Become a Partner",
    "cta.contact": "Contact Us",
    "cta.driverOffers": "Driver Offers",
    "hero.eye": "Philadelphia-based OTR fleet since 2020",
    "hero.title": "A premium fleet built on discipline, trust, and long careers.",
    "hero.subtitle": "A driver-first trucking company with strong safety, in-house service support, Freightliner trucks, and dedicated lanes across the United States.",
    "hero.chipLeft": "Freightliner fleet",
    "hero.chipRight": "24/7 dispatch",
    "trust.one": "Company operating since 2020",
    "trust.two": "Top dispatchers and support",
    "trust.three": "Strong safety department",
    "trust.four": "Own service shop support",
    "about.eye": "About KMG",
    "about.title": "Built for drivers, partners, and disciplined freight operations.",
    "about.copyOne": "KMG is a Philadelphia-based trucking company focused on clear communication, reliable lanes, professional dispatch, strong safety, and long-term driver relationships.",
    "about.quote": "Strong operations start with safety, equipment, and respect for the driver.",
    "about.copyTwo": "Our team is built around real road experience, Freightliner equipment, dedicated freight opportunities, and service support that helps drivers stay moving.",
    "offers.eye": "Driver Offers",
    "offers.title": "Real lanes, strong weekly gross, and support that answers.",
    "offers.copy": "KMG offers dedicated USPS, Amazon, and regional dedicated lanes across the West Side, Midwest, East Side, and South Side.",
    "offers.grossLabel": "Weekly gross",
    "offers.grossCopy": "High-performing lanes with weekly pay and clear expectations.",
    "offers.percentLabel": "Percent",
    "offers.percentCopy": "31% of gross and up for qualified drivers.",
    "offers.cpmLabel": "CPM",
    "offers.cpmCopy": "CPM opportunities starting from 70 CPM.",
    "offers.bonusLabel": "Inspection bonuses",
    "offers.bonusCopy": "Reward structure for clean inspections and safety performance.",
    "offers.laneWest": "West Side",
    "offers.laneMidwest": "Midwest",
    "offers.laneEast": "East Side",
    "offers.laneSouth": "South Side",
    "offers.weekly": "Weekly pay",
    "offers.dispatch": "Top dispatchers",
    "safety.eye": "Safety And Service",
    "safety.title": "Our strength is powerful safety and our own service shop.",
    "safety.cardOneTitle": "Strong safety department",
    "safety.cardOneCopy": "Safety is part of how we dispatch, maintain equipment, prepare inspections, and protect drivers before the truck reaches the scale house.",
    "safety.cardTwoTitle": "Own service shop",
    "safety.cardTwoCopy": "Service shop support helps keep Freightliner trucks prepared, inspected, and ready for consistent road performance.",
    "safety.cardThreeTitle": "Freightliner readiness",
    "safety.cardThreeCopy": "Drivers work with clean, modern Freightliner equipment built for serious OTR reliability.",
    "fleet.eye": "Fleet",
    "fleet.title": "Freightliner trucks for serious OTR work.",
    "fleet.copy": "KMG focuses on Freightliner equipment, driver comfort, maintenance discipline, and dependable fleet standards that support long routes.",
    "fleet.statOne": "New trucks",
    "fleet.statOneCopy": "Modern equipment",
    "fleet.statTwoCopy": "Dedicated lanes",
    "fleet.statThreeCopy": "Own shop support",
    "apply.eye": "Apply",
    "apply.title": "Start a serious conversation with KMG recruiting.",
    "apply.copy": "Submit your driver information and our HR team will receive it as a Website Lead in Telegram.",
    "apply.pointOne": "Dedicated USPS and Amazon lanes",
    "apply.pointTwo": "Weekly pay and strong gross potential",
    "apply.pointThree": "Top dispatchers in the market",
    "apply.pointFour": "Safety and service shop support",
    "apply.formTitle": "Driver application",
    "reviews.eye": "Reviews",
    "reviews.title": "Five-star feedback from drivers and partners.",
    "reviews.one": "Dispatch answers fast and keeps the week organized. That makes OTR work feel much more stable.",
    "reviews.two": "Safety and service shop support are serious here. You feel that before every long run.",
    "reviews.three": "Communication with KMG is clean and professional. It is easy to build trust with their team.",
    "reviews.four": "New Freightliner trucks, strong lanes, and weekly pay make the program feel organized.",
    "partners.eye": "Partners",
    "partners.title": "A disciplined partner network for serious freight.",
    "partners.copy": "KMG works with brokers, shippers, carriers, service vendors, insurance partners, and technology providers who value clean communication, safety, and dependable execution.",
    "partners.one": "Brokers & shippers",
    "partners.two": "Dedicated freight",
    "partners.three": "Maintenance partners",
    "partners.four": "Insurance & tech",
    "shop.eye": "Shop",
    "shop.title": "KMG branded gear, prepared for the next stage.",
    "shop.copy": "The Shop is currently a polished showcase for future KMG merchandise. Ordering and cart logic can be connected later.",
    "shop.itemOne": "Driver-ready branded essential",
    "shop.itemTwo": "Clean company roadwear concept",
    "shop.itemThree": "Utility item for future orders",
    "shop.itemFour": "Signature brand-building item",
    "contact.eye": "Contact",
    "contact.title": "Visit or contact KMG in Philadelphia.",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.address": "Address",
    "contact.hours": "Hours",
    "contact.hoursValue": "Mon - Fri, 8:00 AM - 6:00 PM",
    "contact.dispatch": "Dispatch",
    "contact.dispatchValue": "24/7 for active drivers",
    "forms.firstName": "First name",
    "forms.lastName": "Last name",
    "forms.email": "Email",
    "forms.phone": "Phone",
    "forms.experience": "Experience",
    "forms.experiencePlaceholder": "2 years OTR",
    "forms.submitApplication": "Submit application",
    "forms.sending": "Sending Website Lead...",
    "forms.applicationSuccess": "{name}, thank you. Your Website Lead was sent to KMG HR.",
    "forms.applicationError": "We could not send the Website Lead. Please contact us by phone or Telegram.",
    "seo.eye": "About KMG Trucking",
    "seo.copy": "Kayili M Group LLC is a premium OTR trucking company operating since 2020 from Philadelphia. The site is positioned for CDL Class A recruiting, partner relationships, safety trust, and fleet brand growth.",
    "footer.desc": "Kayili M Group LLC is a driver-first logistics operation built on safety, service, dispatch, and long-term careers since 2020.",
    "footer.company": "Company",
    "footer.drivers": "Drivers",
    "footer.business": "Business",
    "footer.rights": "© 2026 Kayili M Group LLC. All rights reserved.",
    "footer.tags": "CDL-A · OTR · Freightliner · Safety · Service Shop",
    "telegram.label": "Telegram",
    "telegram.message": "Hello, I am writing from the KMG website. I would like to know -",
  },
  ru: {
    "meta.title": "KMG LLC | Premium OTR fleet с 2020",
    "meta.description": "Kayili M Group LLC - trucking company в Philadelphia с сильным safety, service shop support, Freightliner trucks и программами для drivers.",
    "meta.ogTitle": "KMG LLC | Premium OTR fleet с 2020",
    "meta.ogDescription": "Driver-first OTR trucking company для careers, partners, safety и надежной freight работы.",
    "a11y.skip": "Перейти к контенту",
    "a11y.openNav": "Открыть меню",
    "nav.offers": "Offers",
    "nav.careers": "Careers",
    "nav.safety": "Safety",
    "nav.partners": "Partners",
    "nav.shop": "Shop",
    "nav.blog": "News",
    "nav.contact": "Contacts",
    "theme.light": "Light",
    "theme.dark": "Dark",
    "cta.apply": "Apply to Drive",
    "cta.partner": "Become a Partner",
    "cta.contact": "Contact Us",
    "cta.driverOffers": "Driver Offers",
    "hero.eye": "Philadelphia-based OTR fleet с 2020",
    "hero.title": "A premium fleet built on discipline, trust, and long careers.",
    "hero.subtitle": "Driver-first trucking company с сильным safety, собственным service shop, Freightliner trucks и dedicated lanes по США.",
    "hero.chipLeft": "Freightliner fleet",
    "hero.chipRight": "24/7 dispatch",
    "trust.one": "Компания работает с 2020",
    "trust.two": "Top dispatchers and support",
    "trust.three": "Strong safety department",
    "trust.four": "Own service shop support",
    "about.eye": "About KMG",
    "about.title": "Компания для drivers, partners и disciplined freight operations.",
    "about.copyOne": "KMG - Philadelphia-based trucking company с акцентом на clear communication, reliable lanes, professional dispatch, strong safety и долгосрочные отношения с drivers.",
    "about.quote": "Strong operations начинаются с safety, equipment и уважения к driver.",
    "about.copyTwo": "Команда KMG построена вокруг real road experience, Freightliner equipment, dedicated freight opportunities и service support, который помогает drivers оставаться в движении.",
    "offers.eye": "Driver Offers",
    "offers.title": "Real lanes, strong weekly gross и support, который отвечает.",
    "offers.copy": "KMG offers dedicated USPS, Amazon и regional dedicated lanes across West Side, Midwest, East Side и South Side.",
    "offers.grossLabel": "Weekly gross",
    "offers.grossCopy": "High-performing lanes с weekly pay и понятными expectations.",
    "offers.percentLabel": "Percent",
    "offers.percentCopy": "31% of gross and up для qualified drivers.",
    "offers.cpmLabel": "CPM",
    "offers.cpmCopy": "CPM opportunities starting from 70 CPM.",
    "offers.bonusLabel": "Inspection bonuses",
    "offers.bonusCopy": "Бонусы за clean inspections и safety performance.",
    "offers.laneWest": "West Side",
    "offers.laneMidwest": "Midwest",
    "offers.laneEast": "East Side",
    "offers.laneSouth": "South Side",
    "offers.weekly": "Weekly pay",
    "offers.dispatch": "Top dispatchers",
    "safety.eye": "Safety And Service",
    "safety.title": "Наша сила - powerful safety и собственный service shop.",
    "safety.cardOneTitle": "Strong safety department",
    "safety.cardOneCopy": "Safety - часть dispatch, maintenance, inspection readiness и защиты drivers еще до scale house.",
    "safety.cardTwoTitle": "Own service shop",
    "safety.cardTwoCopy": "Service shop support помогает держать Freightliner trucks готовыми, проверенными и стабильными на дороге.",
    "safety.cardThreeTitle": "Freightliner readiness",
    "safety.cardThreeCopy": "Drivers работают на clean, modern Freightliner equipment для серьезного OTR.",
    "fleet.eye": "Fleet",
    "fleet.title": "Freightliner trucks для серьезной OTR работы.",
    "fleet.copy": "KMG focuses on Freightliner equipment, driver comfort, maintenance discipline и dependable fleet standards для long routes.",
    "fleet.statOne": "New trucks",
    "fleet.statOneCopy": "Modern equipment",
    "fleet.statTwoCopy": "Dedicated lanes",
    "fleet.statThreeCopy": "Own shop support",
    "apply.eye": "Apply",
    "apply.title": "Начните разговор с KMG recruiting.",
    "apply.copy": "Заполните driver information, и HR team получит заявку в Telegram как Website Lead.",
    "apply.pointOne": "Dedicated USPS and Amazon lanes",
    "apply.pointTwo": "Weekly pay и strong gross potential",
    "apply.pointThree": "Top dispatchers in the market",
    "apply.pointFour": "Safety and service shop support",
    "apply.formTitle": "Driver application",
    "reviews.eye": "Reviews",
    "reviews.title": "Five-star feedback from drivers and partners.",
    "reviews.one": "Dispatch быстро отвечает и держит неделю организованной. Для OTR это реально важно.",
    "reviews.two": "Safety и service shop support здесь серьезные. Это чувствуется перед каждым long run.",
    "reviews.three": "Communication с KMG чистая и professional. С такой командой легко строить trust.",
    "reviews.four": "New Freightliner trucks, strong lanes и weekly pay делают программу organized.",
    "partners.eye": "Partners",
    "partners.title": "Disciplined partner network для serious freight.",
    "partners.copy": "KMG works with brokers, shippers, carriers, service vendors, insurance partners и technology providers, которым важны communication, safety и dependable execution.",
    "partners.one": "Brokers & shippers",
    "partners.two": "Dedicated freight",
    "partners.three": "Maintenance partners",
    "partners.four": "Insurance & tech",
    "shop.eye": "Shop",
    "shop.title": "KMG branded gear, подготовленный для следующего этапа.",
    "shop.copy": "Shop сейчас работает как polished showcase для будущего KMG merchandise. Ordering и cart logic можно подключить позже.",
    "shop.itemOne": "Driver-ready branded essential",
    "shop.itemTwo": "Clean company roadwear concept",
    "shop.itemThree": "Utility item для будущих orders",
    "shop.itemFour": "Signature brand-building item",
    "contact.eye": "Contact",
    "contact.title": "Visit or contact KMG in Philadelphia.",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.address": "Address",
    "contact.hours": "Hours",
    "contact.hoursValue": "Mon - Fri, 8:00 AM - 6:00 PM",
    "contact.dispatch": "Dispatch",
    "contact.dispatchValue": "24/7 for active drivers",
    "forms.firstName": "First name",
    "forms.lastName": "Last name",
    "forms.email": "Email",
    "forms.phone": "Phone",
    "forms.experience": "Experience",
    "forms.experiencePlaceholder": "2 years OTR",
    "forms.submitApplication": "Submit application",
    "forms.sending": "Sending Website Lead...",
    "forms.applicationSuccess": "{name}, спасибо. Website Lead отправлен HR team KMG.",
    "forms.applicationError": "Website Lead не отправился. Свяжитесь с нами по phone или Telegram.",
    "seo.eye": "About KMG Trucking",
    "seo.copy": "Kayili M Group LLC - premium OTR trucking company, operating since 2020 from Philadelphia. Сайт сделан для CDL Class A recruiting, partner relationships, safety trust и fleet brand growth.",
    "footer.desc": "Kayili M Group LLC - driver-first logistics operation built on safety, service, dispatch and long-term careers since 2020.",
    "footer.company": "Company",
    "footer.drivers": "Drivers",
    "footer.business": "Business",
    "footer.rights": "© 2026 Kayili M Group LLC. All rights reserved.",
    "footer.tags": "CDL-A · OTR · Freightliner · Safety · Service Shop",
    "telegram.label": "Telegram",
    "telegram.message": "Здравствуйте, пишу с сайта KMG. Хотел бы узнать -",
  },
  uz: {
    "meta.title": "KMG LLC | Premium OTR fleet 2020 yildan beri",
    "meta.description": "Kayili M Group LLC - Philadelphia-based trucking company: kuchli safety, service shop support, Freightliner trucks va driver programs.",
    "meta.ogTitle": "KMG LLC | Premium OTR fleet 2020 yildan beri",
    "meta.ogDescription": "Driver-first OTR trucking company careers, partners, safety va reliable freight uchun.",
    "a11y.skip": "Kontentga o'tish",
    "a11y.openNav": "Menyuni ochish",
    "nav.offers": "Offers",
    "nav.careers": "Careers",
    "nav.safety": "Safety",
    "nav.partners": "Partners",
    "nav.shop": "Shop",
    "nav.blog": "News",
    "nav.contact": "Contacts",
    "theme.light": "Light",
    "theme.dark": "Dark",
    "cta.apply": "Apply to Drive",
    "cta.partner": "Become a Partner",
    "cta.contact": "Contact Us",
    "cta.driverOffers": "Driver Offers",
    "hero.eye": "Philadelphia-based OTR fleet 2020 yildan beri",
    "hero.title": "A premium fleet built on discipline, trust, and long careers.",
    "hero.subtitle": "Driver-first trucking company: kuchli safety, o'z service shop, Freightliner trucks va AQSH bo'ylab dedicated lanes.",
    "hero.chipLeft": "Freightliner fleet",
    "hero.chipRight": "24/7 dispatch",
    "trust.one": "Company operating since 2020",
    "trust.two": "Top dispatchers and support",
    "trust.three": "Strong safety department",
    "trust.four": "Own service shop support",
    "about.eye": "About KMG",
    "about.title": "Drivers, partners va disciplined freight operations uchun qurilgan.",
    "about.copyOne": "KMG - Philadelphia-based trucking company. Biz clear communication, reliable lanes, professional dispatch, strong safety va long-term driver relationshipsga e'tibor beramiz.",
    "about.quote": "Strong operations safety, equipment va driverga hurmatdan boshlanadi.",
    "about.copyTwo": "KMG team real road experience, Freightliner equipment, dedicated freight opportunities va service support asosida ishlaydi.",
    "offers.eye": "Driver Offers",
    "offers.title": "Real lanes, strong weekly gross va javob beradigan support.",
    "offers.copy": "KMG dedicated USPS, Amazon va West Side, Midwest, East Side, South Side bo'ylab regional dedicated lanes taklif qiladi.",
    "offers.grossLabel": "Weekly gross",
    "offers.grossCopy": "Weekly pay va clear expectations bilan high-performing lanes.",
    "offers.percentLabel": "Percent",
    "offers.percentCopy": "Qualified drivers uchun 31% of gross and up.",
    "offers.cpmLabel": "CPM",
    "offers.cpmCopy": "70 CPM dan boshlanadigan CPM opportunities.",
    "offers.bonusLabel": "Inspection bonuses",
    "offers.bonusCopy": "Clean inspections va safety performance uchun bonuslar.",
    "offers.laneWest": "West Side",
    "offers.laneMidwest": "Midwest",
    "offers.laneEast": "East Side",
    "offers.laneSouth": "South Side",
    "offers.weekly": "Weekly pay",
    "offers.dispatch": "Top dispatchers",
    "safety.eye": "Safety And Service",
    "safety.title": "Bizning kuchimiz - powerful safety va o'z service shop.",
    "safety.cardOneTitle": "Strong safety department",
    "safety.cardOneCopy": "Safety dispatch, maintenance, inspection readiness va driverlarni himoya qilish jarayonining bir qismi.",
    "safety.cardTwoTitle": "Own service shop",
    "safety.cardTwoCopy": "Service shop support Freightliner trucksni tayyor, tekshirilgan va road-ready holatda ushlab turadi.",
    "safety.cardThreeTitle": "Freightliner readiness",
    "safety.cardThreeCopy": "Drivers serious OTR uchun clean, modern Freightliner equipment bilan ishlaydi.",
    "fleet.eye": "Fleet",
    "fleet.title": "Serious OTR work uchun Freightliner trucks.",
    "fleet.copy": "KMG Freightliner equipment, driver comfort, maintenance discipline va dependable fleet standardsga e'tibor beradi.",
    "fleet.statOne": "New trucks",
    "fleet.statOneCopy": "Modern equipment",
    "fleet.statTwoCopy": "Dedicated lanes",
    "fleet.statThreeCopy": "Own shop support",
    "apply.eye": "Apply",
    "apply.title": "KMG recruiting bilan suhbatni boshlang.",
    "apply.copy": "Driver information yuboring, HR team uni Telegramda Website Lead sifatida oladi.",
    "apply.pointOne": "Dedicated USPS and Amazon lanes",
    "apply.pointTwo": "Weekly pay va strong gross potential",
    "apply.pointThree": "Top dispatchers in the market",
    "apply.pointFour": "Safety and service shop support",
    "apply.formTitle": "Driver application",
    "reviews.eye": "Reviews",
    "reviews.title": "Drivers va partnersdan five-star feedback.",
    "reviews.one": "Dispatch tez javob beradi va haftani tartibli ushlab turadi. OTR ishda bu juda muhim.",
    "reviews.two": "Safety va service shop support bu yerda jiddiy. Har bir long rundan oldin seziladi.",
    "reviews.three": "KMG bilan communication clean va professional. Bunday team bilan trust qurish oson.",
    "reviews.four": "New Freightliner trucks, strong lanes va weekly pay programmani organized qiladi.",
    "partners.eye": "Partners",
    "partners.title": "Serious freight uchun disciplined partner network.",
    "partners.copy": "KMG brokers, shippers, carriers, service vendors, insurance partners va technology providers bilan ishlaydi.",
    "partners.one": "Brokers & shippers",
    "partners.two": "Dedicated freight",
    "partners.three": "Maintenance partners",
    "partners.four": "Insurance & tech",
    "shop.eye": "Shop",
    "shop.title": "KMG branded gear keyingi bosqichga tayyor.",
    "shop.copy": "Shop hozir future KMG merchandise uchun polished showcase. Ordering va cart logic keyin ulanadi.",
    "shop.itemOne": "Driver-ready branded essential",
    "shop.itemTwo": "Clean company roadwear concept",
    "shop.itemThree": "Future orders uchun utility item",
    "shop.itemFour": "Signature brand-building item",
    "contact.eye": "Contact",
    "contact.title": "Philadelphia'dagi KMG bilan bog'laning.",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.address": "Address",
    "contact.hours": "Hours",
    "contact.hoursValue": "Mon - Fri, 8:00 AM - 6:00 PM",
    "contact.dispatch": "Dispatch",
    "contact.dispatchValue": "24/7 for active drivers",
    "forms.firstName": "First name",
    "forms.lastName": "Last name",
    "forms.email": "Email",
    "forms.phone": "Phone",
    "forms.experience": "Experience",
    "forms.experiencePlaceholder": "2 years OTR",
    "forms.submitApplication": "Submit application",
    "forms.sending": "Sending Website Lead...",
    "forms.applicationSuccess": "{name}, rahmat. Website Lead KMG HR teamga yuborildi.",
    "forms.applicationError": "Website Lead yuborilmadi. Phone yoki Telegram orqali bog'laning.",
    "seo.eye": "About KMG Trucking",
    "seo.copy": "Kayili M Group LLC - Philadelphia'da 2020 yildan beri ishlayotgan premium OTR trucking company. Site CDL Class A recruiting, partner relationships, safety trust va fleet brand growth uchun tayyorlangan.",
    "footer.desc": "Kayili M Group LLC - safety, service, dispatch va long-term careers asosida qurilgan driver-first logistics operation.",
    "footer.company": "Company",
    "footer.drivers": "Drivers",
    "footer.business": "Business",
    "footer.rights": "© 2026 Kayili M Group LLC. All rights reserved.",
    "footer.tags": "CDL-A · OTR · Freightliner · Safety · Service Shop",
    "telegram.label": "Telegram",
    "telegram.message": "Assalomu alaykum, KMG saytidan yozyapman. Bilmoqchi edim -",
  },
};

let currentLang = localStorage.getItem("kmg-language") || "en";
const t = (key) => translations[currentLang]?.[key] || translations.en[key] || key;

const setTheme = (theme) => {
  root.dataset.theme = theme;
  localStorage.setItem("kmg-theme", theme);

  logoNodes.forEach((node) => {
    const logoSrc = theme === "dark" ? node.dataset.logoDark : node.dataset.logoLight;
    if (logoSrc) node.setAttribute("src", logoSrc);
  });

  if (favicon) favicon.setAttribute("href", "assets/new/pictures for web/23 logo circle.png");

  if (themeToggle) {
    themeToggle.textContent = theme === "dark" ? t("theme.dark") : t("theme.light");
    themeToggle.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} theme`);
  }
};

const setTelegramLink = () => {
  if (!telegramLink) return;

  telegramLink.href = `https://t.me/ParvinaSafetykmg?text=${encodeURIComponent(t("telegram.message"))}`;
  telegramLink.querySelector("span").textContent = t("telegram.label");
};

const applyTranslations = (lang) => {
  currentLang = translations[lang] ? lang : "en";
  root.lang = currentLang;
  localStorage.setItem("kmg-language", currentLang);
  document.title = t("meta.title");

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((node) => {
    node.dataset.i18nAttr.split(",").forEach((entry) => {
      const [attr, key] = entry.split(":");
      if (attr && key) node.setAttribute(attr.trim(), t(key.trim()));
    });
  });

  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === currentLang);
  });

  setTheme(root.dataset.theme || "light");
  setTelegramLink();
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

applyTranslations(currentLang);
setTheme(localStorage.getItem("kmg-theme") || "light");
syncHeaderState();

window.addEventListener("scroll", syncHeaderState, { passive: true });

themeToggle?.addEventListener("click", () => {
  setTheme(root.dataset.theme === "dark" ? "light" : "dark");
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => applyTranslations(button.dataset.lang));
});

navToggle?.addEventListener("click", () => {
  const isOpen = navMenu?.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

navMenu?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) closeMobileMenu();
});

const closeNewsModals = () => {
  newsModals.forEach((modal) => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  });
};

newsOpenButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.getElementById(button.dataset.newsOpen);
    if (modal) {
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
    }
  });
});

newsCloseButtons.forEach((button) => button.addEventListener("click", closeNewsModals));

newsModals.forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeNewsModals();
  });
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeNewsModals();
});

faqItems.forEach((item) => {
  const button = item.querySelector(".faq-question");
  const icon = button?.querySelector("span:last-child");

  button?.addEventListener("click", () => {
    const isOpen = item.classList.toggle("is-open");
    if (icon) icon.textContent = isOpen ? "-" : "+";
  });
});

tiltItems.forEach((item) => {
  item.addEventListener("pointermove", (event) => {
    if (prefersReducedMotion.matches) return;

    const rect = item.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * 9;
    const rotateX = (0.5 - y) * 9;
    item.style.transform = `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  });

  item.addEventListener("pointerleave", () => {
    item.style.transform = "";
  });
});

applicationForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const submitButton = applicationForm.querySelector("[type='submit']");
  const data = new FormData(applicationForm);
  const firstName = String(data.get("firstName") || "Driver").trim();

  const payload = {
    firstName,
    lastName: String(data.get("lastName") || "").trim(),
    email: String(data.get("email") || "").trim(),
    phone: String(data.get("phone") || "").trim(),
    experience: String(data.get("experience") || "").trim(),
    company: String(data.get("company") || "").trim(),
    language: currentLang,
    page: window.location.href,
  };

  applicationStatus.textContent = t("forms.sending");
  submitButton.disabled = true;

  try {
    const response = await fetch("/api/telegram-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error("Lead delivery failed");

    applicationStatus.textContent = t("forms.applicationSuccess").replace("{name}", firstName);
    applicationForm.reset();
  } catch {
    applicationStatus.textContent = t("forms.applicationError");
  } finally {
    submitButton.disabled = false;
  }
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
  if (prefersReducedMotion.matches) return;

  const rect = hero.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;
  hero.style.setProperty("--glow-x", `${x}%`);
  hero.style.setProperty("--glow-y", `${y}%`);
});

window.addEventListener(
  "scroll",
  () => {
    if (!parallaxImage || prefersReducedMotion.matches) return;

    const offset = Math.min(window.scrollY * 0.05, 20);
    parallaxImage.style.transform = `translateY(${offset}px) scale(1.035)`;
  },
  { passive: true }
);
