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
    "meta.title": "KMG LLC | Trucking, Shop, Brokerage, Consulting",
    "meta.description": "KMG is a Philadelphia-based transportation group providing trucking, service shop, brokerage, and consulting services.",
    "meta.ogTitle": "KMG LLC | Trucking, Shop, Brokerage, Consulting",
    "meta.ogDescription": "A transportation company built around fleet operations, driver recruiting, repair support, brokerage, and safety consulting.",
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
    "meta.title": "KMG LLC | Trucking, Shop, Brokerage, Consulting",
    "meta.description": "KMG - transportation group в Philadelphia: trucking, service shop, brokerage и consulting services.",
    "meta.ogTitle": "KMG LLC | Trucking, Shop, Brokerage, Consulting",
    "meta.ogDescription": "Transportation company вокруг fleet operations, driver recruiting, repair support, brokerage и safety consulting.",
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
    "meta.title": "KMG LLC | Trucking, Shop, Brokerage, Consulting",
    "meta.description": "KMG - Philadelphia-based transportation group: trucking, service shop, brokerage va consulting services.",
    "meta.ogTitle": "KMG LLC | Trucking, Shop, Brokerage, Consulting",
    "meta.ogDescription": "Fleet operations, driver recruiting, repair support, brokerage va safety consulting atrofida qurilgan transportation company.",
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

Object.assign(translations.en, {
  "nav.services": "Services",
  "home.hero.eye": "KMG Group LLC / Philadelphia transportation company",
  "home.hero.title": "A transportation company built around fleet, service, brokerage, and safety.",
  "home.hero.copy": "KMG connects trucking operations, Freightliner fleet support, repair and inspection services, brokerage lanes, and consulting for carriers who want cleaner systems.",
  "home.hero.servicesCta": "Explore Services",
  "home.trust.fleet": "Fleet and carrier network",
  "home.trust.directions": "Core business directions",
  "home.trust.dispatch": "Dispatch and driver support",
  "home.trust.year": "Operating since 2020",
  "home.services.eye": "Services",
  "home.services.title": "Four directions, one KMG operating standard.",
  "home.services.copy": "Each direction has its own page with deeper information, numbers, service details, and next steps.",
  "home.more": "More Details",
  "home.trucking.title": "Trucking",
  "home.trucking.copy": "The core KMG operation: drivers, fleet network, dedicated lanes, dispatch, weekly gross potential, safety, and reviews.",
  "home.shop.title": "Shop",
  "home.shop.copy": "The service side of KMG: repair support, RS workflow, invoices, inspection readiness, documentation, and uptime control.",
  "home.brokerage.title": "Brokerage",
  "home.brokerage.copy": "The freight connection layer: street lanes, broker relationships, partner coverage, freight communication, and shipment visibility.",
  "home.consulting.title": "Consulting",
  "home.consulting.copy": "The systems side: safety consulting, dispatch process, fleet setup, carrier setup, audits, compliance, and operational cleanup.",
});

Object.assign(translations.ru, {
  "meta.title": "KMG LLC | Trucking, Shop, Brokerage, Consulting",
  "meta.description": "KMG - transportation group \u0432 Philadelphia: trucking, service shop, brokerage \u0438 consulting services.",
  "meta.ogTitle": "KMG LLC | Trucking, Shop, Brokerage, Consulting",
  "meta.ogDescription": "Transportation company \u0432\u043e\u043a\u0440\u0443\u0433 fleet operations, driver recruiting, repair support, brokerage \u0438 safety consulting.",
  "a11y.skip": "\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0443",
  "a11y.openNav": "\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043c\u0435\u043d\u044e",
  "nav.services": "\u0423\u0441\u043b\u0443\u0433\u0438",
  "nav.blog": "News",
  "nav.contact": "\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",
  "theme.light": "\u0421\u0432\u0435\u0442\u043b\u0430\u044f",
  "theme.dark": "\u0422\u0435\u043c\u043d\u0430\u044f",
  "cta.apply": "Apply to Drive",
  "home.hero.eye": "KMG Group LLC / transportation company \u0432 Philadelphia",
  "home.hero.title": "\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f, \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u0430\u044f \u0432\u043e\u043a\u0440\u0443\u0433 fleet, service, brokerage \u0438 safety.",
  "home.hero.copy": "KMG \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u0442 trucking operations, Freightliner fleet support, repair and inspection services, brokerage lanes \u0438 consulting \u0434\u043b\u044f carriers, \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u043d\u0443\u0436\u043d\u044b \u0447\u0438\u0441\u0442\u044b\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b.",
  "home.hero.servicesCta": "\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c services",
  "home.trust.fleet": "Fleet \u0438 carrier network",
  "home.trust.directions": "\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 business directions",
  "home.trust.dispatch": "Dispatch \u0438 driver support",
  "home.trust.year": "\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u043c \u0441 2020",
  "home.services.eye": "\u0423\u0441\u043b\u0443\u0433\u0438",
  "home.services.title": "\u0427\u0435\u0442\u044b\u0440\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f, \u043e\u0434\u0438\u043d KMG operating standard.",
  "home.services.copy": "\u0423 \u043a\u0430\u0436\u0434\u043e\u0433\u043e direction \u0435\u0441\u0442\u044c \u0441\u0432\u043e\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0441 \u0434\u0435\u0442\u0430\u043b\u044f\u043c\u0438, \u0446\u0438\u0444\u0440\u0430\u043c\u0438, services \u0438 next steps.",
  "home.more": "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435",
  "home.trucking.title": "Trucking",
  "home.trucking.copy": "\u041e\u0441\u043d\u043e\u0432\u0430 KMG: drivers, fleet network, dedicated lanes, dispatch, weekly gross potential, safety \u0438 reviews.",
  "home.shop.title": "Shop",
  "home.shop.copy": "Service side KMG: repair support, RS workflow, invoices, inspection readiness, documentation \u0438 uptime control.",
  "home.brokerage.title": "Brokerage",
  "home.brokerage.copy": "Freight connection layer: street lanes, broker relationships, partner coverage, freight communication \u0438 shipment visibility.",
  "home.consulting.title": "Consulting",
  "home.consulting.copy": "Systems side: safety consulting, dispatch process, fleet setup, carrier setup, audits, compliance \u0438 operational cleanup.",
  "apply.formTitle": "Driver application",
  "forms.firstName": "\u0418\u043c\u044f",
  "forms.lastName": "\u0424\u0430\u043c\u0438\u043b\u0438\u044f",
  "forms.email": "Email",
  "forms.phone": "\u0422\u0435\u043b\u0435\u0444\u043e\u043d",
  "forms.experience": "Experience",
  "forms.experiencePlaceholder": "2 years OTR",
  "forms.submitApplication": "\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443",
  "forms.sending": "\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c Website Lead...",
  "forms.applicationSuccess": "{name}, \u0441\u043f\u0430\u0441\u0438\u0431\u043e. Website Lead \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d KMG HR.",
  "forms.applicationError": "Website Lead \u043d\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u043b\u0441\u044f. \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 phone, Telegram \u0438\u043b\u0438 Vercel logs.",
  "reviews.eye": "Reviews",
  "reviews.title": "Five-star feedback \u043e\u0442 drivers \u0438 partners.",
  "reviews.one": "Dispatch \u0431\u044b\u0441\u0442\u0440\u043e \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0438 \u0434\u0435\u0440\u0436\u0438\u0442 \u043d\u0435\u0434\u0435\u043b\u044e organized. \u0414\u043b\u044f OTR \u044d\u0442\u043e \u0432\u0430\u0436\u043d\u043e.",
  "reviews.two": "Safety \u0438 service shop support \u0437\u0434\u0435\u0441\u044c \u0441\u0435\u0440\u044c\u0435\u0437\u043d\u044b\u0435.",
  "reviews.three": "Communication \u0441 KMG clean \u0438 professional.",
  "reviews.four": "New Freightliner trucks, strong lanes \u0438 weekly pay \u0434\u0435\u043b\u0430\u044e\u0442 program organized.",
  "contact.eye": "\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",
  "contact.title": "Visit or contact KMG in Philadelphia.",
  "contact.phone": "\u0422\u0435\u043b\u0435\u0444\u043e\u043d",
  "contact.email": "Email",
  "contact.address": "\u0410\u0434\u0440\u0435\u0441",
  "contact.hours": "\u0427\u0430\u0441\u044b",
  "contact.hoursValue": "Mon - Fri, 8:00 AM - 6:00 PM",
  "contact.dispatch": "Dispatch",
  "contact.dispatchValue": "24/7 for active drivers",
  "footer.desc": "Kayili M Group LLC - transportation group built on safety, service, dispatch and long-term careers.",
  "footer.company": "Company",
  "footer.business": "Business",
  "footer.rights": "\u00a9 2026 Kayili M Group LLC. All rights reserved.",
  "telegram.label": "Telegram",
  "telegram.message": "\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435, \u043f\u0438\u0448\u0443 \u0441 \u0441\u0430\u0439\u0442\u0430 KMG. \u0425\u043e\u0442\u0435\u043b \u0431\u044b \u0443\u0437\u043d\u0430\u0442\u044c -",
});

Object.assign(translations.uz, {
  "nav.services": "Services",
  "home.hero.eye": "KMG Group LLC / Philadelphia transportation company",
  "home.hero.title": "Fleet, service, brokerage va safety asosida qurilgan transportation company.",
  "home.hero.copy": "KMG trucking operations, Freightliner fleet support, repair and inspection services, brokerage lanes va consultingni bitta tizimga bog'laydi.",
  "home.hero.servicesCta": "Servicesni ko'rish",
  "home.trust.fleet": "Fleet va carrier network",
  "home.trust.directions": "Asosiy business directions",
  "home.trust.dispatch": "Dispatch va driver support",
  "home.trust.year": "2020 yildan beri",
  "home.services.eye": "Services",
  "home.services.title": "To'rt yo'nalish, bitta KMG operating standard.",
  "home.services.copy": "Har bir direction alohida sahifada batafsil ma'lumot, raqamlar, service details va next steps bilan ochiladi.",
  "home.more": "Batafsil",
  "home.trucking.title": "Trucking",
  "home.trucking.copy": "KMGning asosiy operationi: drivers, fleet network, dedicated lanes, dispatch, weekly gross potential, safety va reviews.",
  "home.shop.title": "Shop",
  "home.shop.copy": "KMG service side: repair support, RS workflow, invoices, inspection readiness, documentation va uptime control.",
  "home.brokerage.title": "Brokerage",
  "home.brokerage.copy": "Freight connection layer: street lanes, broker relationships, partner coverage, freight communication va shipment visibility.",
  "home.consulting.title": "Consulting",
  "home.consulting.copy": "Systems side: safety consulting, dispatch process, fleet setup, carrier setup, audits, compliance va operational cleanup.",
});

Object.assign(translations.en, {
  "nav.home": "Home",
  "cta.contactKmg": "Contact KMG",
  "service.back": "Back to services",
  "service.mockPackage": "Mock package",
  "footer.descShort": "Transportation group built around trucking, shop, brokerage, and consulting.",
  "footer.rights": "© 2026 Kayili M Group LLC. All rights reserved.",
  "home.compliance.eye": "Compliance Snapshot",
  "home.compliance.title": "Built with operating identity, compliance discipline, and room to scale.",
  "home.compliance.hq": "Headquarters",
  "home.compliance.capacity": "Mock capacity",
  "home.about.eye": "What KMG does",
  "home.about.title": "KMG is more than one trucking lane. It is an operating platform for drivers, freight, equipment, and compliance.",
  "home.about.copy": "The company represents trucking, shop services, brokerage relationships, and consulting for carriers. That structure helps drivers find work, partners move freight, and fleet owners improve safety, dispatch, setup, and audit discipline.",
  "home.about.quote": "We are strongest where operations meet accountability: safety, dispatch, shop, fleet, and lanes.",
  "home.metric.fleet": "Fleet network",
  "home.metric.gross": "Weekly gross potential",
  "home.metric.dispatch": "Dispatch support",
  "home.trucking.itemOne": "Dedicated USPS and Amazon lanes",
  "home.trucking.itemTwo": "West Side, Midwest, East Side, and South Side coverage",
  "home.trucking.itemThree": "Driver recruiting, reviews, and application flow",
  "home.shop.metricOne": "Truck support",
  "home.shop.metricTwo": "Service requests",
  "home.shop.metricThree": "Records and billing",
  "home.shop.itemOne": "Repair coordination between driver, shop, and dispatch",
  "home.shop.itemTwo": "Inspection preparation and service records",
  "home.shop.itemThree": "Invoice discipline for transparent maintenance history",
  "home.brokerage.metricOne": "Street and partner lanes",
  "home.brokerage.metricTwo": "Carrier relationships",
  "home.brokerage.metricThree": "Freight visibility",
  "home.brokerage.itemOne": "Street lane support and freight matching",
  "home.brokerage.itemTwo": "Broker, shipper, and carrier communication",
  "home.brokerage.itemThree": "Coverage planning for urgent and recurring freight",
  "home.consulting.metricOne": "Compliance systems",
  "home.consulting.metricTwo": "Carrier and fleet",
  "home.consulting.metricThree": "Process review",
  "home.consulting.itemOne": "Safety consulting and audit readiness",
  "home.consulting.itemTwo": "Dispatch workflow and communication structure",
  "home.consulting.itemThree": "Fleet setup, carrier setup, and process documentation",
  "apply.gross": "Weekly gross potential",
  "apply.percent": "Percent of gross and up",
  "apply.cpm": "CPM opportunities",
  "trucking.eye": "KMG Trucking",
  "trucking.title": "300+ fleet network, dedicated lanes, strong gross potential, and driver support.",
  "trucking.copy": "Trucking is the core of KMG: drivers, lanes, dispatch, equipment, safety, and long-term relationships.",
  "trucking.cardFleet": "Fleet and carrier network built around serious OTR operations.",
  "trucking.cardGrossLabel": "Weekly gross",
  "trucking.cardGross": "Weekly gross potential depending on lane, performance, and program fit.",
  "trucking.cardPercent": "31% of gross and up for qualified drivers.",
  "trucking.cardCpm": "CPM opportunities starting from 70 CPM.",
  "trucking.fleetMix": "Mock fleet mix",
  "trucking.coverage": "Mock coverage",
  "trucking.featureOneTitle": "Lanes and freight",
  "trucking.featureOneCopy": "Dedicated USPS, Amazon, and regional coverage across West Side, Midwest, East Side, and South Side lanes.",
  "trucking.featureTwoTitle": "Dispatch support",
  "trucking.featureTwoCopy": "Top dispatchers, fast communication, and clear expectations for active drivers.",
  "trucking.featureThreeTitle": "Safety and shop",
  "trucking.featureThreeCopy": "Safety department and service shop support help keep drivers compliant and moving.",
  "trucking.processOneTitle": "Apply",
  "trucking.processOneCopy": "Driver submits a Website Lead with contact details and OTR experience.",
  "trucking.processTwoTitle": "Qualify",
  "trucking.processTwoCopy": "Recruiting reviews fit, availability, lanes, and pay expectations.",
  "trucking.processThreeTitle": "Dispatch",
  "trucking.processThreeCopy": "Driver receives lane plan, communication expectations, and support contacts.",
  "trucking.processFourTitle": "Run",
  "trucking.processFourCopy": "Safety, dispatch, and shop support help keep the truck moving.",
  "trucking.ctaTitle": "Ready to talk about trucking with KMG?",
  "trucking.ctaCopy": "Send your driver application and HR will receive it as a Website Lead.",
  "shopPage.eye": "KMG Shop",
  "shopPage.title": "Repair, RS, invoices, inspections, and uptime support.",
  "shopPage.copy": "KMG Shop is built to support road readiness: repair coordination, inspection preparation, documentation, invoices, and service discipline for active trucks.",
  "shopPage.capabilities": "Service shop capabilities",
  "shopPage.systemTitle": "Keeping trucks ready is a business system, not only a repair task.",
  "shopPage.systemCopy": "The shop direction supports drivers, fleet owners, and dispatch through fast documentation, clean communication, and practical maintenance flow.",
  "shopPage.statRepair": "Road and shop coordination",
  "shopPage.statRs": "Service request handling",
  "shopPage.statInvoice": "Documentation support",
  "shopPage.featureOneTitle": "Repair coordination",
  "shopPage.featureOneCopy": "Support for truck issues, repair planning, service flow, and communication between driver, shop, and dispatch.",
  "shopPage.featureTwoTitle": "Inspection readiness",
  "shopPage.featureTwoCopy": "Preparation mindset around clean inspections, safety standards, and documentation before road problems become expensive.",
  "shopPage.featureThreeTitle": "Invoices and records",
  "shopPage.featureThreeCopy": "Invoice support, service records, repair history, and paperwork discipline for fleet transparency.",
  "shopPage.readyRepair": "Truck repair and support coordination",
  "shopPage.readyRs": "Service request workflow",
  "shopPage.readyInspection": "Pre-inspection readiness",
  "shopPage.readyInvoice": "Clear service documentation",
  "shopPage.packageOneTitle": "Road Ready Check",
  "shopPage.packageOneCopy": "Basic inspection readiness review, visible issue notes, and driver communication before dispatch.",
  "shopPage.packageTwoTitle": "Repair Flow",
  "shopPage.packageTwoCopy": "Repair request intake, shop coordination, service notes, invoice tracking, and status updates.",
  "shopPage.packageThreeTitle": "Fleet Records",
  "shopPage.packageThreeCopy": "Mock maintenance history, invoice archive, inspection notes, and service accountability dashboard.",
  "shopPage.ctaTitle": "Need shop support or service coordination?",
  "shopPage.ctaCopy": "Contact KMG and tell us what support you need.",
  "shopPage.footerDesc": "Shop support for repair, RS, invoices, inspections, and uptime.",
  "brokerage.eye": "KMG Brokerage",
  "brokerage.title": "Street lanes, freight relationships, and coverage support.",
  "brokerage.copy": "Brokerage at KMG is focused on communication, lane visibility, freight partnerships, and dependable execution.",
  "brokerage.featureOneTitle": "Street lanes",
  "brokerage.featureOneCopy": "Lane support for spot opportunities, partner freight, and route coverage.",
  "brokerage.featureTwoTitle": "Partner network",
  "brokerage.featureTwoCopy": "Communication with brokers, shippers, carriers, and operational partners.",
  "brokerage.featureThreeTitle": "Freight visibility",
  "brokerage.featureThreeCopy": "Clear expectations around pickup, delivery, updates, and service reliability.",
  "brokerage.mockLane": "Mock lane",
  "brokerage.packageOneTitle": "East Coast regional",
  "brokerage.packageOneCopy": "Street lane coverage for Northeast, Midwest handoffs, and recurring freight opportunities.",
  "brokerage.packageTwoTitle": "Midwest coverage",
  "brokerage.packageTwoCopy": "Carrier partner matching, appointment communication, and load status updates.",
  "brokerage.packageThreeTitle": "South / West lanes",
  "brokerage.packageThreeCopy": "Coverage planning for spot lanes, dedicated freight, and partner freight needs.",
  "brokerage.standardsEye": "Brokerage standards",
  "brokerage.standardsTitle": "The goal is simple: clean freight communication and dependable coverage.",
  "brokerage.standardsCopy": "KMG brokerage direction supports freight movement with lane clarity, partner accountability, and operational discipline.",
  "brokerage.stripOne": "Street lanes",
  "brokerage.stripTwo": "Broker relations",
  "brokerage.stripThree": "Shipper support",
  "brokerage.ctaTitle": "Want to discuss freight or lanes?",
  "brokerage.ctaCopy": "Contact KMG and tell us what type of brokerage relationship you need.",
  "brokerage.footerDesc": "Brokerage support for street lanes, freight relationships, and coverage.",
  "consulting.eye": "KMG Consulting",
  "consulting.title": "Safety consulting, dispatch systems, fleet setup, carrier setup, and audits.",
  "consulting.copy": "Consulting is for carriers and teams that need stronger operations without guessing through compliance, dispatch, fleet processes, and setup.",
  "consulting.featureOneTitle": "Safety consulting",
  "consulting.featureOneCopy": "Support around safety process, inspection readiness, documentation, and operational standards.",
  "consulting.featureTwoTitle": "Dispatch systems",
  "consulting.featureTwoCopy": "Dispatch workflow, communication structure, driver support, and lane decision discipline.",
  "consulting.featureThreeTitle": "Fleet setup",
  "consulting.featureThreeCopy": "Carrier setup, fleet standards, process structure, and operations foundation for growth.",
  "consulting.readySafety": "Compliance and safety process consulting",
  "consulting.readyDispatch": "Workflow and communication setup",
  "consulting.readyFleet": "Fleet systems and standards",
  "consulting.readyAudit": "Audit readiness and process review",
  "consulting.packageOneTitle": "Safety Readiness",
  "consulting.packageOneCopy": "Safety process review, inspection mindset, document checklist, and compliance workflow recommendations.",
  "consulting.packageTwoTitle": "Dispatch Setup",
  "consulting.packageTwoCopy": "Dispatch communication structure, driver support flow, lane notes, escalation rules, and status rhythm.",
  "consulting.packageThreeTitle": "Carrier Audit",
  "consulting.packageThreeCopy": "Mock audit of setup, fleet records, safety process, dispatch process, and operating gaps.",
  "consulting.ctaTitle": "Need consulting for your carrier operation?",
  "consulting.ctaCopy": "Contact KMG and describe the area you want to improve.",
  "consulting.footerDesc": "Consulting for safety, dispatch, fleet setup, carrier setup, and audits.",
  "news.eye": "KMG News",
  "news.title": "Freight market updates for drivers and partners.",
  "news.copy": "Short, practical industry updates connected to safety, rates, fuel, and operating discipline.",
  "news.close": "Close",
  "news.cardOneCat": "Freight Market",
  "news.cardOneTitle": "Truckload capacity is tightening faster than expected",
  "news.cardTwoTitle": "International Roadcheck puts ELD and cargo securement in focus",
  "news.cardThreeTitle": "Diesel and operating costs keep pressure on routing decisions",
  "news.cardFourTitle": "FMCSA ELD removals raise compliance risk for carriers",
  "news.cardFiveTitle": "Policy, fuel, and geopolitical risks are reshaping freight planning",
  "news.modalOneTitle": "Truckload markets are tightening faster than expected.",
  "news.modalOneCopy": "C.H. Robinson's April 2026 update says North American truckload markets are tightening faster than expected, with 2026 truckload costs projected higher year over year. For KMG, that reinforces the value of disciplined dispatch, lane planning, and service reliability.",
  "news.modalTwoTitle": "Roadcheck season puts ELD and cargo readiness in the spotlight.",
  "news.modalTwoCopy": "CVSA scheduled International Roadcheck for May 12-14, 2026, with attention on ELD tampering and cargo securement. This makes safety discipline, documentation, and shop readiness especially important for active carriers.",
  "news.modalThreeTitle": "Fuel and operating costs remain major planning pressure.",
  "news.modalThreeCopy": "Crane Worldwide's April 2026 market update points to rising cost pressure across U.S. ground markets, with fuel volatility and policy risk affecting planning. For carriers, that means route discipline and cost visibility matter every week.",
  "news.modalFourTitle": "FMCSA ELD removals can quickly become an out-of-service risk.",
  "news.modalFourCopy": "FMCSA removed HERO ELD from the registered list on April 2, 2026. Motor carriers using a revoked ELD must replace it with a compliant device before the deadline or risk being treated as operating without an ELD.",
  "news.modalFiveTitle": "Freight planning is being shaped by capacity, fuel, and regulatory pressure.",
  "news.modalFiveCopy": "Recent April market reports point to tighter capacity, elevated fuel exposure, and compliance pressure. KMG's operating model answers that environment with dispatch discipline, safety systems, and practical service support.",
});

Object.assign(translations.ru, {
  "nav.home": "Главная",
  "nav.services": "Услуги",
  "nav.blog": "Новости",
  "nav.contact": "Контакты",
  "cta.apply": "Apply to Drive",
  "cta.contactKmg": "Связаться с KMG",
  "service.back": "Назад к услугам",
  "service.mockPackage": "Пример пакета",
  "footer.descShort": "Transportation group вокруг trucking, shop, brokerage и consulting.",
  "footer.company": "Компания",
  "footer.rights": "© 2026 Kayili M Group LLC. Все права защищены.",
  "home.compliance.eye": "Compliance Snapshot",
  "home.compliance.title": "Операционная идентичность, compliance дисциплина и база для роста.",
  "home.compliance.hq": "Headquarters",
  "home.compliance.capacity": "Пример capacity",
  "home.about.eye": "Что делает KMG",
  "home.about.title": "KMG - это не одна trucking lane. Это operating platform для drivers, freight, equipment и compliance.",
  "home.about.copy": "Компания объединяет trucking, shop services, brokerage relationships и consulting для carriers. Такая структура помогает drivers находить работу, partners двигать freight, а fleet owners усиливать safety, dispatch, setup и audit discipline.",
  "home.about.quote": "Мы сильнее всего там, где operations встречаются с accountability: safety, dispatch, shop, fleet и lanes.",
  "home.metric.fleet": "Fleet network",
  "home.metric.gross": "Weekly gross potential",
  "home.metric.dispatch": "Dispatch support",
  "home.trucking.itemOne": "Dedicated USPS и Amazon lanes",
  "home.trucking.itemTwo": "West Side, Midwest, East Side и South Side coverage",
  "home.trucking.itemThree": "Driver recruiting, reviews и application flow",
  "home.shop.metricOne": "Truck support",
  "home.shop.metricTwo": "Service requests",
  "home.shop.metricThree": "Records and billing",
  "home.shop.itemOne": "Repair coordination между driver, shop и dispatch",
  "home.shop.itemTwo": "Inspection preparation и service records",
  "home.shop.itemThree": "Invoice discipline для прозрачной maintenance history",
  "home.brokerage.metricOne": "Street и partner lanes",
  "home.brokerage.metricTwo": "Carrier relationships",
  "home.brokerage.metricThree": "Freight visibility",
  "home.brokerage.itemOne": "Street lane support и freight matching",
  "home.brokerage.itemTwo": "Communication с brokers, shippers и carriers",
  "home.brokerage.itemThree": "Coverage planning для urgent и recurring freight",
  "home.consulting.metricOne": "Compliance systems",
  "home.consulting.metricTwo": "Carrier и fleet",
  "home.consulting.metricThree": "Process review",
  "home.consulting.itemOne": "Safety consulting и audit readiness",
  "home.consulting.itemTwo": "Dispatch workflow и communication structure",
  "home.consulting.itemThree": "Fleet setup, carrier setup и process documentation",
  "apply.eye": "Apply to Drive",
  "apply.title": "Driver applications - приоритет для KMG.",
  "apply.copy": "Расскажите, кто вы, какой у вас OTR experience и как с вами связаться. HR получает заявку в Telegram как Website Lead.",
  "apply.gross": "Weekly gross potential",
  "apply.percent": "Percent of gross and up",
  "apply.cpm": "CPM opportunities",
  "trucking.eye": "KMG Trucking",
  "trucking.title": "300+ fleet network, dedicated lanes, сильный gross potential и driver support.",
  "trucking.copy": "Trucking - основа KMG: drivers, lanes, dispatch, equipment, safety и долгосрочные отношения.",
  "trucking.cardFleet": "Fleet и carrier network для серьезных OTR operations.",
  "trucking.cardGrossLabel": "Weekly gross",
  "trucking.cardGross": "Weekly gross potential зависит от lane, performance и program fit.",
  "trucking.cardPercent": "31% of gross and up для qualified drivers.",
  "trucking.cardCpm": "CPM opportunities от 70 CPM.",
  "trucking.fleetMix": "Пример fleet mix",
  "trucking.coverage": "Пример coverage",
  "trucking.featureOneTitle": "Lanes и freight",
  "trucking.featureOneCopy": "Dedicated USPS, Amazon и regional coverage across West Side, Midwest, East Side и South Side lanes.",
  "trucking.featureTwoTitle": "Dispatch support",
  "trucking.featureTwoCopy": "Top dispatchers, быстрая communication и понятные expectations для active drivers.",
  "trucking.featureThreeTitle": "Safety и shop",
  "trucking.featureThreeCopy": "Safety department и service shop support помогают drivers оставаться compliant и двигаться.",
  "trucking.processOneTitle": "Apply",
  "trucking.processOneCopy": "Driver отправляет Website Lead с contact details и OTR experience.",
  "trucking.processTwoTitle": "Qualify",
  "trucking.processTwoCopy": "Recruiting проверяет fit, availability, lanes и pay expectations.",
  "trucking.processThreeTitle": "Dispatch",
  "trucking.processThreeCopy": "Driver получает lane plan, communication expectations и support contacts.",
  "trucking.processFourTitle": "Run",
  "trucking.processFourCopy": "Safety, dispatch и shop support помогают truck оставаться в движении.",
  "trucking.ctaTitle": "Готовы обсудить trucking с KMG?",
  "trucking.ctaCopy": "Отправьте driver application, и HR получит ее как Website Lead.",
  "shopPage.eye": "KMG Shop",
  "shopPage.title": "Repair, RS, invoices, inspections и uptime support.",
  "shopPage.copy": "KMG Shop поддерживает road readiness: repair coordination, inspection preparation, documentation, invoices и service discipline для active trucks.",
  "shopPage.capabilities": "Service shop capabilities",
  "shopPage.systemTitle": "Готовность truck - это business system, а не только repair task.",
  "shopPage.systemCopy": "Shop direction помогает drivers, fleet owners и dispatch через fast documentation, clean communication и practical maintenance flow.",
  "shopPage.statRepair": "Road и shop coordination",
  "shopPage.statRs": "Service request handling",
  "shopPage.statInvoice": "Documentation support",
  "shopPage.featureOneTitle": "Repair coordination",
  "shopPage.featureOneCopy": "Support для truck issues, repair planning, service flow и communication между driver, shop и dispatch.",
  "shopPage.featureTwoTitle": "Inspection readiness",
  "shopPage.featureTwoCopy": "Подготовка к clean inspections, safety standards и documentation до того, как road problems станут дорогими.",
  "shopPage.featureThreeTitle": "Invoices и records",
  "shopPage.featureThreeCopy": "Invoice support, service records, repair history и paperwork discipline для fleet transparency.",
  "shopPage.readyRepair": "Truck repair и support coordination",
  "shopPage.readyRs": "Service request workflow",
  "shopPage.readyInspection": "Pre-inspection readiness",
  "shopPage.readyInvoice": "Clear service documentation",
  "shopPage.packageOneTitle": "Road Ready Check",
  "shopPage.packageOneCopy": "Basic inspection readiness review, visible issue notes и driver communication before dispatch.",
  "shopPage.packageTwoTitle": "Repair Flow",
  "shopPage.packageTwoCopy": "Repair request intake, shop coordination, service notes, invoice tracking и status updates.",
  "shopPage.packageThreeTitle": "Fleet Records",
  "shopPage.packageThreeCopy": "Пример maintenance history, invoice archive, inspection notes и service accountability dashboard.",
  "shopPage.ctaTitle": "Нужен shop support или service coordination?",
  "shopPage.ctaCopy": "Свяжитесь с KMG и расскажите, какая support нужна.",
  "shopPage.footerDesc": "Shop support для repair, RS, invoices, inspections и uptime.",
  "brokerage.eye": "KMG Brokerage",
  "brokerage.title": "Street lanes, freight relationships и coverage support.",
  "brokerage.copy": "Brokerage в KMG сфокусирован на communication, lane visibility, freight partnerships и dependable execution.",
  "brokerage.featureOneTitle": "Street lanes",
  "brokerage.featureOneCopy": "Lane support для spot opportunities, partner freight и route coverage.",
  "brokerage.featureTwoTitle": "Partner network",
  "brokerage.featureTwoCopy": "Communication с brokers, shippers, carriers и operational partners.",
  "brokerage.featureThreeTitle": "Freight visibility",
  "brokerage.featureThreeCopy": "Clear expectations по pickup, delivery, updates и service reliability.",
  "brokerage.mockLane": "Пример lane",
  "brokerage.packageOneTitle": "East Coast regional",
  "brokerage.packageOneCopy": "Street lane coverage для Northeast, Midwest handoffs и recurring freight opportunities.",
  "brokerage.packageTwoTitle": "Midwest coverage",
  "brokerage.packageTwoCopy": "Carrier partner matching, appointment communication и load status updates.",
  "brokerage.packageThreeTitle": "South / West lanes",
  "brokerage.packageThreeCopy": "Coverage planning для spot lanes, dedicated freight и partner freight needs.",
  "brokerage.standardsEye": "Brokerage standards",
  "brokerage.standardsTitle": "Цель простая: clean freight communication и dependable coverage.",
  "brokerage.standardsCopy": "KMG brokerage поддерживает freight movement через lane clarity, partner accountability и operational discipline.",
  "brokerage.stripOne": "Street lanes",
  "brokerage.stripTwo": "Broker relations",
  "brokerage.stripThree": "Shipper support",
  "brokerage.ctaTitle": "Хотите обсудить freight или lanes?",
  "brokerage.ctaCopy": "Свяжитесь с KMG и расскажите, какой brokerage relationship вам нужен.",
  "brokerage.footerDesc": "Brokerage support для street lanes, freight relationships и coverage.",
  "consulting.eye": "KMG Consulting",
  "consulting.title": "Safety consulting, dispatch systems, fleet setup, carrier setup и audits.",
  "consulting.copy": "Consulting для carriers и teams, которым нужны сильные operations без guessing через compliance, dispatch, fleet processes и setup.",
  "consulting.featureOneTitle": "Safety consulting",
  "consulting.featureOneCopy": "Support вокруг safety process, inspection readiness, documentation и operational standards.",
  "consulting.featureTwoTitle": "Dispatch systems",
  "consulting.featureTwoCopy": "Dispatch workflow, communication structure, driver support и lane decision discipline.",
  "consulting.featureThreeTitle": "Fleet setup",
  "consulting.featureThreeCopy": "Carrier setup, fleet standards, process structure и operations foundation for growth.",
  "consulting.readySafety": "Compliance и safety process consulting",
  "consulting.readyDispatch": "Workflow и communication setup",
  "consulting.readyFleet": "Fleet systems и standards",
  "consulting.readyAudit": "Audit readiness и process review",
  "consulting.packageOneTitle": "Safety Readiness",
  "consulting.packageOneCopy": "Safety process review, inspection mindset, document checklist и compliance workflow recommendations.",
  "consulting.packageTwoTitle": "Dispatch Setup",
  "consulting.packageTwoCopy": "Dispatch communication structure, driver support flow, lane notes, escalation rules и status rhythm.",
  "consulting.packageThreeTitle": "Carrier Audit",
  "consulting.packageThreeCopy": "Mock audit of setup, fleet records, safety process, dispatch process и operating gaps.",
  "consulting.ctaTitle": "Нужен consulting для carrier operation?",
  "consulting.ctaCopy": "Свяжитесь с KMG и опишите area, которую хотите улучшить.",
  "consulting.footerDesc": "Consulting для safety, dispatch, fleet setup, carrier setup и audits.",
  "news.eye": "KMG Новости",
  "news.title": "Freight market updates для drivers и partners.",
  "news.copy": "Короткие practical updates по safety, rates, fuel и operating discipline.",
  "news.close": "Закрыть",
  "news.cardOneCat": "Freight Market",
  "news.cardOneTitle": "Truckload capacity сжимается быстрее ожиданий",
  "news.cardTwoTitle": "International Roadcheck фокусируется на ELD и cargo securement",
  "news.cardThreeTitle": "Diesel и operating costs давят на routing decisions",
  "news.cardFourTitle": "FMCSA ELD removals повышают compliance risk для carriers",
  "news.cardFiveTitle": "Policy, fuel и geopolitical risks меняют freight planning",
  "news.modalOneTitle": "Truckload markets tighten faster than expected.",
  "news.modalOneCopy": "C.H. Robinson в April 2026 update отмечает tightening в North American truckload markets и более высокие projected truckload costs. Для KMG это усиливает ценность disciplined dispatch, lane planning и service reliability.",
  "news.modalTwoTitle": "Roadcheck season ставит ELD и cargo readiness в центр внимания.",
  "news.modalTwoCopy": "CVSA назначила International Roadcheck на May 12-14, 2026, с фокусом на ELD tampering и cargo securement. Поэтому safety discipline, documentation и shop readiness особенно важны.",
  "news.modalThreeTitle": "Fuel и operating costs остаются major planning pressure.",
  "news.modalThreeCopy": "Crane Worldwide April 2026 update указывает на rising cost pressure в U.S. ground markets, fuel volatility и policy risk. Для carriers важны route discipline и cost visibility.",
  "news.modalFourTitle": "FMCSA ELD removals быстро становятся out-of-service risk.",
  "news.modalFourCopy": "FMCSA removed HERO ELD from registered list on April 2, 2026. Carriers using revoked ELD должны заменить device на compliant до deadline.",
  "news.modalFiveTitle": "Freight planning меняется из-за capacity, fuel и regulatory pressure.",
  "news.modalFiveCopy": "April market reports показывают tighter capacity, elevated fuel exposure и compliance pressure. KMG отвечает через dispatch discipline, safety systems и practical service support.",
});

Object.assign(translations.uz, {
  "nav.home": "Bosh sahifa",
  "nav.services": "Services",
  "nav.blog": "News",
  "nav.contact": "Kontaktlar",
  "cta.apply": "Apply to Drive",
  "cta.contactKmg": "KMG bilan bog'lanish",
  "service.back": "Servicesga qaytish",
  "service.mockPackage": "Mock package",
  "footer.descShort": "Trucking, shop, brokerage va consulting asosida qurilgan transportation group.",
  "footer.company": "Company",
  "footer.rights": "© 2026 Kayili M Group LLC. Barcha huquqlar himoyalangan.",
  "home.compliance.eye": "Compliance Snapshot",
  "home.compliance.title": "Operating identity, compliance discipline va scale uchun tayyor structure.",
  "home.compliance.hq": "Headquarters",
  "home.compliance.capacity": "Mock capacity",
  "home.about.eye": "KMG nima qiladi",
  "home.about.title": "KMG bitta trucking lane emas. Bu drivers, freight, equipment va compliance uchun operating platform.",
  "home.about.copy": "Company trucking, shop services, brokerage relationships va consultingni carriers uchun birlashtiradi. Bu driversga ish topish, partnersga freight move qilish, fleet ownersga safety, dispatch, setup va audit disciplineni kuchaytirishga yordam beradi.",
  "home.about.quote": "Biz operations accountability bilan uchrashgan joyda kuchlimiz: safety, dispatch, shop, fleet va lanes.",
  "home.metric.fleet": "Fleet network",
  "home.metric.gross": "Weekly gross potential",
  "home.metric.dispatch": "Dispatch support",
  "home.trucking.itemOne": "Dedicated USPS va Amazon lanes",
  "home.trucking.itemTwo": "West Side, Midwest, East Side va South Side coverage",
  "home.trucking.itemThree": "Driver recruiting, reviews va application flow",
  "home.shop.metricOne": "Truck support",
  "home.shop.metricTwo": "Service requests",
  "home.shop.metricThree": "Records and billing",
  "home.shop.itemOne": "Driver, shop va dispatch o'rtasida repair coordination",
  "home.shop.itemTwo": "Inspection preparation va service records",
  "home.shop.itemThree": "Transparent maintenance history uchun invoice discipline",
  "home.brokerage.metricOne": "Street va partner lanes",
  "home.brokerage.metricTwo": "Carrier relationships",
  "home.brokerage.metricThree": "Freight visibility",
  "home.brokerage.itemOne": "Street lane support va freight matching",
  "home.brokerage.itemTwo": "Brokers, shippers va carriers bilan communication",
  "home.brokerage.itemThree": "Urgent va recurring freight uchun coverage planning",
  "home.consulting.metricOne": "Compliance systems",
  "home.consulting.metricTwo": "Carrier va fleet",
  "home.consulting.metricThree": "Process review",
  "home.consulting.itemOne": "Safety consulting va audit readiness",
  "home.consulting.itemTwo": "Dispatch workflow va communication structure",
  "home.consulting.itemThree": "Fleet setup, carrier setup va process documentation",
  "apply.eye": "Apply to Drive",
  "apply.title": "Driver applications KMG uchun priority.",
  "apply.copy": "Kimligingiz, OTR experience va kontaktlaringizni yuboring. HR so'rovni Telegramda Website Lead sifatida oladi.",
  "apply.gross": "Weekly gross potential",
  "apply.percent": "Percent of gross and up",
  "apply.cpm": "CPM opportunities",
  "trucking.eye": "KMG Trucking",
  "trucking.title": "300+ fleet network, dedicated lanes, strong gross potential va driver support.",
  "trucking.copy": "Trucking KMGning core qismi: drivers, lanes, dispatch, equipment, safety va long-term relationships.",
  "trucking.cardFleet": "Serious OTR operations uchun fleet va carrier network.",
  "trucking.cardGrossLabel": "Weekly gross",
  "trucking.cardGross": "Weekly gross potential lane, performance va program fitga bog'liq.",
  "trucking.cardPercent": "Qualified drivers uchun 31% of gross and up.",
  "trucking.cardCpm": "70 CPMdan boshlanadigan CPM opportunities.",
  "trucking.fleetMix": "Mock fleet mix",
  "trucking.coverage": "Mock coverage",
  "trucking.featureOneTitle": "Lanes va freight",
  "trucking.featureOneCopy": "Dedicated USPS, Amazon va West Side, Midwest, East Side, South Side lanes bo'ylab regional coverage.",
  "trucking.featureTwoTitle": "Dispatch support",
  "trucking.featureTwoCopy": "Top dispatchers, fast communication va active drivers uchun clear expectations.",
  "trucking.featureThreeTitle": "Safety va shop",
  "trucking.featureThreeCopy": "Safety department va service shop support driversni compliant va moving holatda ushlab turadi.",
  "trucking.processOneTitle": "Apply",
  "trucking.processOneCopy": "Driver contact details va OTR experience bilan Website Lead yuboradi.",
  "trucking.processTwoTitle": "Qualify",
  "trucking.processTwoCopy": "Recruiting fit, availability, lanes va pay expectationsni ko'rib chiqadi.",
  "trucking.processThreeTitle": "Dispatch",
  "trucking.processThreeCopy": "Driver lane plan, communication expectations va support contacts oladi.",
  "trucking.processFourTitle": "Run",
  "trucking.processFourCopy": "Safety, dispatch va shop support truck moving bo'lishiga yordam beradi.",
  "trucking.ctaTitle": "KMG trucking haqida gaplashishga tayyormisiz?",
  "trucking.ctaCopy": "Driver application yuboring, HR uni Website Lead sifatida oladi.",
  "shopPage.eye": "KMG Shop",
  "shopPage.title": "Repair, RS, invoices, inspections va uptime support.",
  "shopPage.copy": "KMG Shop road readinessni qo'llab-quvvatlaydi: repair coordination, inspection preparation, documentation, invoices va active trucks uchun service discipline.",
  "shopPage.capabilities": "Service shop capabilities",
  "shopPage.systemTitle": "Truck ready bo'lishi business system, faqat repair task emas.",
  "shopPage.systemCopy": "Shop direction drivers, fleet owners va dispatchga fast documentation, clean communication va practical maintenance flow orqali yordam beradi.",
  "shopPage.statRepair": "Road va shop coordination",
  "shopPage.statRs": "Service request handling",
  "shopPage.statInvoice": "Documentation support",
  "shopPage.featureOneTitle": "Repair coordination",
  "shopPage.featureOneCopy": "Truck issues, repair planning, service flow va driver, shop, dispatch o'rtasidagi communication uchun support.",
  "shopPage.featureTwoTitle": "Inspection readiness",
  "shopPage.featureTwoCopy": "Road problems qimmatga tushmasidan oldin clean inspections, safety standards va documentationga tayyorgarlik.",
  "shopPage.featureThreeTitle": "Invoices va records",
  "shopPage.featureThreeCopy": "Fleet transparency uchun invoice support, service records, repair history va paperwork discipline.",
  "shopPage.readyRepair": "Truck repair va support coordination",
  "shopPage.readyRs": "Service request workflow",
  "shopPage.readyInspection": "Pre-inspection readiness",
  "shopPage.readyInvoice": "Clear service documentation",
  "shopPage.packageOneTitle": "Road Ready Check",
  "shopPage.packageOneCopy": "Basic inspection readiness review, visible issue notes va dispatchdan oldin driver communication.",
  "shopPage.packageTwoTitle": "Repair Flow",
  "shopPage.packageTwoCopy": "Repair request intake, shop coordination, service notes, invoice tracking va status updates.",
  "shopPage.packageThreeTitle": "Fleet Records",
  "shopPage.packageThreeCopy": "Mock maintenance history, invoice archive, inspection notes va service accountability dashboard.",
  "shopPage.ctaTitle": "Shop support yoki service coordination kerakmi?",
  "shopPage.ctaCopy": "KMG bilan bog'laning va qanday support kerakligini yozing.",
  "shopPage.footerDesc": "Repair, RS, invoices, inspections va uptime uchun shop support.",
  "brokerage.eye": "KMG Brokerage",
  "brokerage.title": "Street lanes, freight relationships va coverage support.",
  "brokerage.copy": "KMG brokerage communication, lane visibility, freight partnerships va dependable executionga fokus qiladi.",
  "brokerage.featureOneTitle": "Street lanes",
  "brokerage.featureOneCopy": "Spot opportunities, partner freight va route coverage uchun lane support.",
  "brokerage.featureTwoTitle": "Partner network",
  "brokerage.featureTwoCopy": "Brokers, shippers, carriers va operational partners bilan communication.",
  "brokerage.featureThreeTitle": "Freight visibility",
  "brokerage.featureThreeCopy": "Pickup, delivery, updates va service reliability bo'yicha clear expectations.",
  "brokerage.mockLane": "Mock lane",
  "brokerage.packageOneTitle": "East Coast regional",
  "brokerage.packageOneCopy": "Northeast, Midwest handoffs va recurring freight opportunities uchun street lane coverage.",
  "brokerage.packageTwoTitle": "Midwest coverage",
  "brokerage.packageTwoCopy": "Carrier partner matching, appointment communication va load status updates.",
  "brokerage.packageThreeTitle": "South / West lanes",
  "brokerage.packageThreeCopy": "Spot lanes, dedicated freight va partner freight needs uchun coverage planning.",
  "brokerage.standardsEye": "Brokerage standards",
  "brokerage.standardsTitle": "Maqsad oddiy: clean freight communication va dependable coverage.",
  "brokerage.standardsCopy": "KMG brokerage lane clarity, partner accountability va operational discipline orqali freight movementni qo'llab-quvvatlaydi.",
  "brokerage.stripOne": "Street lanes",
  "brokerage.stripTwo": "Broker relations",
  "brokerage.stripThree": "Shipper support",
  "brokerage.ctaTitle": "Freight yoki lanes haqida gaplashamizmi?",
  "brokerage.ctaCopy": "KMG bilan bog'laning va kerakli brokerage relationship turini ayting.",
  "brokerage.footerDesc": "Street lanes, freight relationships va coverage uchun brokerage support.",
  "consulting.eye": "KMG Consulting",
  "consulting.title": "Safety consulting, dispatch systems, fleet setup, carrier setup va audits.",
  "consulting.copy": "Consulting compliance, dispatch, fleet processes va setup bo'yicha kuchliroq operations kerak bo'lgan carriers va teams uchun.",
  "consulting.featureOneTitle": "Safety consulting",
  "consulting.featureOneCopy": "Safety process, inspection readiness, documentation va operational standards bo'yicha support.",
  "consulting.featureTwoTitle": "Dispatch systems",
  "consulting.featureTwoCopy": "Dispatch workflow, communication structure, driver support va lane decision discipline.",
  "consulting.featureThreeTitle": "Fleet setup",
  "consulting.featureThreeCopy": "Carrier setup, fleet standards, process structure va growth uchun operations foundation.",
  "consulting.readySafety": "Compliance va safety process consulting",
  "consulting.readyDispatch": "Workflow va communication setup",
  "consulting.readyFleet": "Fleet systems va standards",
  "consulting.readyAudit": "Audit readiness va process review",
  "consulting.packageOneTitle": "Safety Readiness",
  "consulting.packageOneCopy": "Safety process review, inspection mindset, document checklist va compliance workflow recommendations.",
  "consulting.packageTwoTitle": "Dispatch Setup",
  "consulting.packageTwoCopy": "Dispatch communication structure, driver support flow, lane notes, escalation rules va status rhythm.",
  "consulting.packageThreeTitle": "Carrier Audit",
  "consulting.packageThreeCopy": "Setup, fleet records, safety process, dispatch process va operating gaps bo'yicha mock audit.",
  "consulting.ctaTitle": "Carrier operation uchun consulting kerakmi?",
  "consulting.ctaCopy": "KMG bilan bog'laning va yaxshilamoqchi bo'lgan areani yozing.",
  "consulting.footerDesc": "Safety, dispatch, fleet setup, carrier setup va audits uchun consulting.",
  "news.eye": "KMG News",
  "news.title": "Drivers va partners uchun freight market updates.",
  "news.copy": "Safety, rates, fuel va operating discipline bo'yicha qisqa practical updates.",
  "news.close": "Yopish",
  "news.cardOneCat": "Freight Market",
  "news.cardOneTitle": "Truckload capacity kutilgandan tezroq tightening qilmoqda",
  "news.cardTwoTitle": "International Roadcheck ELD va cargo securementga fokus qiladi",
  "news.cardThreeTitle": "Diesel va operating costs routing decisionsga bosim qiladi",
  "news.cardFourTitle": "FMCSA ELD removals carriers uchun compliance riskni oshiradi",
  "news.cardFiveTitle": "Policy, fuel va geopolitical risks freight planningni o'zgartirmoqda",
  "news.modalOneTitle": "Truckload markets kutilgandan tezroq tightening qilmoqda.",
  "news.modalOneCopy": "C.H. Robinson April 2026 update North American truckload markets tightening qilayotganini va 2026 truckload costs yuqoriroq bo'lishini ko'rsatadi. KMG uchun bu disciplined dispatch, lane planning va service reliability qiymatini oshiradi.",
  "news.modalTwoTitle": "Roadcheck season ELD va cargo readinessni markazga olib chiqadi.",
  "news.modalTwoCopy": "CVSA International Roadcheckni May 12-14, 2026 kunlariga belgiladi, focus ELD tampering va cargo securementda. Safety discipline, documentation va shop readiness juda muhim.",
  "news.modalThreeTitle": "Fuel va operating costs major planning pressure bo'lib qolmoqda.",
  "news.modalThreeCopy": "Crane Worldwide April 2026 update U.S. ground marketsda rising cost pressure, fuel volatility va policy risk borligini ko'rsatadi. Carriers uchun route discipline va cost visibility muhim.",
  "news.modalFourTitle": "FMCSA ELD removals tezda out-of-service risk bo'lishi mumkin.",
  "news.modalFourCopy": "FMCSA HERO ELDni April 2, 2026 kuni registered listdan olib tashladi. Revoked ELD ishlatayotgan carriers compliant devicega deadlinegacha o'tishi kerak.",
  "news.modalFiveTitle": "Freight planning capacity, fuel va regulatory pressure sabab o'zgarayapti.",
  "news.modalFiveCopy": "April market reports tighter capacity, elevated fuel exposure va compliance pressureni ko'rsatadi. KMG bunga dispatch discipline, safety systems va practical service support bilan javob beradi.",
});

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
  const firstName = String(data.get("firstName") || "").trim();
  const phone = String(data.get("phone") || "").trim();

  if (!firstName || !phone) {
    applicationStatus.textContent = t("forms.applicationError");
    return;
  }

  const payload = {
    firstName,
    lastName: String(data.get("lastName") || "").trim(),
    email: String(data.get("email") || "").trim(),
    phone,
    experience: String(data.get("experience") || "").trim(),
    company: String(data.get("company") || "").trim(),
    language: currentLang,
    page: window.location.href,
  };

  applicationStatus.textContent = t("forms.sending");
  submitButton.disabled = true;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15_000);

    const response = await fetch("/api/telegram-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (!response.ok) {
      let details = {};
      try {
        details = await response.json();
      } catch {
        details = {};
      }

      const message = details.error || "Lead delivery failed";
      const code = details.code ? ` (${details.code})` : "";
      throw new Error(`${message}${code}`);
    }

    applicationStatus.textContent = t("forms.applicationSuccess").replace("{name}", firstName);
    applicationForm.reset();
  } catch (error) {
    console.error("KMG lead form error:", error);
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
