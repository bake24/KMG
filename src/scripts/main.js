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
const contactForm = document.querySelector("[data-contact-form]");
const contactStatus = document.querySelector("[data-contact-status]");
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
    "meta.title": "KMG LLC | Premium OTR Fleet Since 2022",
    "meta.description": "Kayili M Group LLC is a Philadelphia-based OTR trucking company with strong safety, service shop support, Freightliner trucks, and driver-first programs.",
    "meta.ogTitle": "KMG LLC | Premium OTR Fleet Since 2022",
    "meta.ogDescription": "Driver-first OTR trucking company for careers, partnerships, safety, and nationwide freight trust.",
    "a11y.skip": "Skip to content",
    "a11y.openNav": "Open navigation",
    "nav.about": "About",
    "nav.offers": "Offers",
    "nav.careers": "Careers",
    "nav.safety": "Safety",
    "nav.partners": "Partners",
    "nav.shop": "Shop",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "theme.light": "Light",
    "theme.dark": "Dark",
    "cta.apply": "Apply to Drive",
    "cta.partner": "Become a Partner",
    "cta.contact": "Contact Us",
    "cta.driverOffers": "Driver Offers",
    "hero.eye": "Philadelphia-based OTR fleet since 2022",
    "hero.title": "KMG LLC",
    "hero.subtitle": "A driver-first trucking company with strong safety, in-house service support, Freightliner trucks, and dedicated lanes across the United States.",
    "hero.chipLeft": "Freightliner fleet",
    "hero.chipRight": "24/7 dispatch",
    "trust.one": "Company operating since 2022",
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
    "safety.cardOneCopy": "Safety is not a side process at KMG. It is part of how we dispatch, maintain equipment, and protect drivers.",
    "safety.cardTwoTitle": "Own service shop",
    "safety.cardTwoCopy": "Our service support helps keep trucks prepared, inspected, and ready for consistent road performance.",
    "safety.cardThreeTitle": "New Freightliner trucks",
    "safety.cardThreeCopy": "Drivers work with clean, modern Freightliner equipment built for long-haul reliability.",
    "fleet.eye": "Fleet",
    "fleet.title": "Freightliner trucks for serious OTR work.",
    "fleet.copy": "KMG focuses on Freightliner equipment, driver comfort, maintenance discipline, and dependable fleet standards that support long routes.",
    "fleet.statOne": "New trucks",
    "fleet.statOneCopy": "Modern equipment",
    "fleet.statTwoCopy": "Dedicated lanes",
    "fleet.statThreeCopy": "Own shop support",
    "apply.eye": "Apply",
    "apply.title": "Start a serious conversation with KMG recruiting.",
    "apply.copy": "This form is ready as a frontend template today and can be connected to backend, CRM, email, or Telegram notifications later.",
    "apply.pointOne": "Dedicated USPS and Amazon lanes",
    "apply.pointTwo": "Weekly pay and strong gross potential",
    "apply.pointThree": "Top dispatchers in the market",
    "apply.pointFour": "Safety and service shop support",
    "apply.formTitle": "Driver application template",
    "reviews.eye": "Reviews",
    "reviews.title": "Five-star feedback from drivers and partners.",
    "reviews.one": "Dispatch is one of the strongest parts of KMG. They answer fast and keep the work moving.",
    "reviews.two": "The safety team is serious and professional. That gives drivers more confidence on the road.",
    "reviews.three": "KMG keeps communication clean. As a partner, that makes a real difference.",
    "reviews.four": "New trucks, strong lanes, and weekly pay make the program feel organized.",
    "history.eye": "History",
    "history.title": "Built from road experience, not a boardroom.",
    "history.copy": "KMG started in 2022 with one clear focus: build a trucking operation that drivers actually want to stay in long-term.",
    "history.stepOneTitle": "Foundation - 2022",
    "history.stepOneCopy": "Professional standards from day one.",
    "history.stepTwoTitle": "Growth",
    "history.stepTwoCopy": "Expanding recruitment, lane coverage, and partner relationships.",
    "history.stepThreeTitle": "Future",
    "history.stepThreeCopy": "Stronger systems for drivers, partners, shop, and safety.",
    "partners.eye": "Partners",
    "partners.title": "Our partner network helps KMG move with confidence.",
    "partners.copy": "We work with carriers, shippers, brokers, maintenance partners, insurance providers, and technology vendors who share our standards.",
    "partners.one": "Carriers & shippers",
    "partners.two": "Freight brokers",
    "partners.three": "Maintenance & repair",
    "partners.four": "Insurance vendors",
    "shop.eye": "Shop",
    "shop.title": "KMG gear and branded items.",
    "shop.copy": "A merch section prepared for future cart and backend integration.",
    "shop.itemOne": "Driver-ready branded item",
    "shop.itemTwo": "Clean merchandise",
    "shop.itemThree": "Cart integration ready",
    "shop.itemFour": "Brand-building item",
    "blog.eye": "Blog",
    "blog.title": "Road notes, safety updates, and company stories.",
    "blog.copy": "A prepared editorial section for future recruiting, safety, partner, and operations content.",
    "blog.categoryOne": "Operations",
    "blog.categoryTwo": "Drivers",
    "blog.categoryThree": "Safety",
    "blog.categoryFour": "Careers",
    "blog.postOne": "How KMG approaches dedicated freight and long-haul consistency",
    "blog.postTwo": "What drivers should look for in a serious OTR company",
    "blog.postThree": "Why a strong safety department protects the whole operation",
    "blog.postFour": "How weekly pay, dispatch, and equipment shape a better driving job",
    "blog.date": "Add publish date",
    "contact.eye": "Contact",
    "contact.title": "Visit or contact KMG in Philadelphia.",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.address": "Address",
    "contact.hours": "Hours",
    "contact.hoursValue": "Mon - Fri, 8:00 AM - 6:00 PM",
    "contact.dispatch": "Dispatch",
    "contact.dispatchValue": "24/7 for active drivers",
    "contact.formTitle": "Send a message",
    "forms.name": "Name",
    "forms.namePlaceholder": "Your name",
    "forms.firstName": "First name",
    "forms.lastName": "Last name",
    "forms.email": "Email",
    "forms.phone": "Phone",
    "forms.experience": "Experience",
    "forms.experiencePlaceholder": "2 years OTR",
    "forms.subject": "Subject",
    "forms.subjectDriver": "Driver inquiry",
    "forms.subjectPartner": "Partner inquiry",
    "forms.subjectGeneral": "General question",
    "forms.message": "Message",
    "forms.messagePlaceholder": "How can we help?",
    "forms.submitApplication": "Submit application",
    "forms.sendMessage": "Send message",
    "forms.applicationSuccess": "{name}, your application template is ready for backend connection.",
    "forms.contactSuccess": "{name}, your message template was captured locally.",
    "faq.eye": "FAQ",
    "faq.title": "Common questions before applying.",
    "faq.qOne": "What lanes does KMG offer?",
    "faq.aOne": "KMG offers dedicated USPS, Amazon, and dedicated lanes across the West Side, Midwest, East Side, and South Side.",
    "faq.qTwo": "What can drivers gross weekly?",
    "faq.aTwo": "Gross can be positioned around $12,000-$15,000 per week depending on lane, performance, and final program fit.",
    "faq.qThree": "What trucks does KMG run?",
    "faq.aThree": "KMG works with Freightliner trucks and focuses on clean, modern equipment for serious OTR operations.",
    "faq.qFour": "Why is safety important at KMG?",
    "faq.aFour": "KMG is strong in safety and service support, helping drivers stay compliant, protected, and ready for the road.",
    "seo.eye": "About KMG Trucking",
    "seo.copy": "Kayili M Group LLC is a premium OTR trucking company operating since 2022 from Philadelphia. The site is positioned for CDL Class A recruiting, partner relationships, safety trust, and fleet brand growth.",
    "footer.desc": "Kayili M Group LLC is a driver-first logistics operation built on safety, service, dispatch, and long-term careers since 2022.",
    "footer.company": "Company",
    "footer.drivers": "Drivers",
    "footer.business": "Business",
    "footer.rights": "© 2026 Kayili M Group LLC. All rights reserved.",
    "footer.tags": "CDL-A · OTR · Freightliner · Safety · Service Shop",
    "telegram.label": "Telegram",
    "telegram.message": "Hello, I am writing from the KMG website. I would like to know -"
  },
  ru: {
    "meta.title": "KMG LLC | Премиальная OTR компания с 2022",
    "meta.description": "Kayili M Group LLC - траковая компания в Филадельфии с сильным safety, своим service shop, Freightliner траками и программами для драйверов.",
    "meta.ogTitle": "KMG LLC | Премиальная OTR компания с 2022",
    "meta.ogDescription": "OTR компания для драйверов, партнеров, safety и надежной логистики.",
    "a11y.skip": "Перейти к содержанию",
    "a11y.openNav": "Открыть меню",
    "nav.about": "О нас",
    "nav.offers": "Водителям",
    "nav.careers": "Карьера",
    "nav.safety": "Safety",
    "nav.partners": "Партнеры",
    "nav.shop": "Shop",
    "nav.blog": "Блог",
    "nav.contact": "Контакты",
    "theme.light": "Светлая",
    "theme.dark": "Темная",
    "cta.apply": "Подать заявку",
    "cta.partner": "Стать партнером",
    "cta.contact": "Связаться",
    "cta.driverOffers": "Предложения",
    "hero.eye": "OTR компания в Филадельфии с 2022 года",
    "hero.title": "KMG LLC",
    "hero.subtitle": "Компания для драйверов с сильным safety, своим service shop, Freightliner траками и dedicated lanes по США.",
    "hero.chipLeft": "Freightliner fleet",
    "hero.chipRight": "Диспетчеры 24/7",
    "trust.one": "Компания работает с 2022",
    "trust.two": "Сильные диспетчеры и поддержка",
    "trust.three": "Мощный safety отдел",
    "trust.four": "Свой service shop",
    "about.eye": "О KMG",
    "about.title": "Компания для драйверов, партнеров и сильной логистики.",
    "about.copyOne": "KMG - траковая компания в Филадельфии, построенная на понятной коммуникации, надежных lanes, профессиональном dispatch, сильном safety и долгосрочных отношениях с драйверами.",
    "about.quote": "Сильная операция начинается с safety, техники и уважения к драйверу.",
    "about.copyTwo": "Наша команда опирается на реальный дорожный опыт, Freightliner траки, dedicated freight opportunities и service support, который помогает драйверам оставаться в движении.",
    "offers.eye": "Предложения драйверам",
    "offers.title": "Реальные lanes, сильный weekly gross и поддержка, которая отвечает.",
    "offers.copy": "KMG предлагает dedicated USPS, Amazon и dedicated lanes по West Side, Midwest, East Side и South Side.",
    "offers.grossLabel": "Gross в неделю",
    "offers.grossCopy": "Сильные lanes с weekly pay и понятными ожиданиями.",
    "offers.percentLabel": "Процент",
    "offers.percentCopy": "31% of gross and up для квалифицированных драйверов.",
    "offers.cpmLabel": "CPM",
    "offers.cpmCopy": "Возможности от 70 CPM.",
    "offers.bonusLabel": "Inspection bonuses",
    "offers.bonusCopy": "Бонусы за inspections и safety performance.",
    "offers.laneWest": "West Side",
    "offers.laneMidwest": "Midwest",
    "offers.laneEast": "East Side",
    "offers.laneSouth": "South Side",
    "offers.weekly": "Weekly pay",
    "offers.dispatch": "Top dispatchers",
    "safety.eye": "Safety и сервис",
    "safety.title": "Наша сила - мощный Safety и свой service shop.",
    "safety.cardOneTitle": "Сильный safety отдел",
    "safety.cardOneCopy": "Safety в KMG - это часть dispatch, maintenance и защиты драйверов.",
    "safety.cardTwoTitle": "Свой service shop",
    "safety.cardTwoCopy": "Service support помогает держать траки готовыми, проверенными и стабильными на дороге.",
    "safety.cardThreeTitle": "Новые Freightliner траки",
    "safety.cardThreeCopy": "Драйверы работают на чистой современной технике Freightliner для OTR.",
    "fleet.eye": "Fleet",
    "fleet.title": "Freightliner траки для серьезной OTR работы.",
    "fleet.copy": "KMG делает акцент на Freightliner equipment, комфорте драйвера, maintenance discipline и стандартах флота.",
    "fleet.statOne": "Новые траки",
    "fleet.statOneCopy": "Современная техника",
    "fleet.statTwoCopy": "Dedicated lanes",
    "fleet.statThreeCopy": "Поддержка своего shop",
    "apply.eye": "Заявка",
    "apply.title": "Начните разговор с recruiting KMG.",
    "apply.copy": "Форма пока работает как frontend template и позже может быть подключена к backend, CRM, email или Telegram уведомлениям.",
    "apply.pointOne": "Dedicated USPS и Amazon lanes",
    "apply.pointTwo": "Weekly pay и сильный gross potential",
    "apply.pointThree": "Top dispatchers in the market",
    "apply.pointFour": "Safety и service shop support",
    "apply.formTitle": "Шаблон заявки драйвера",
    "reviews.eye": "Отзывы",
    "reviews.title": "5-звездочные отзывы от драйверов и партнеров.",
    "reviews.one": "Dispatch - одна из сильных сторон KMG. Отвечают быстро и помогают держать работу в движении.",
    "reviews.two": "Safety команда серьезная и профессиональная. На дороге это дает больше уверенности.",
    "reviews.three": "KMG держит коммуникацию чистой. Для партнера это реально важно.",
    "reviews.four": "Новые траки, сильные lanes и weekly pay делают программу организованной.",
    "history.eye": "История",
    "history.title": "Построено на дорожном опыте, а не в boardroom.",
    "history.copy": "KMG начал работу в 2022 с одной целью: построить компанию, в которой драйверы хотят оставаться надолго.",
    "history.stepOneTitle": "Основание - 2022",
    "history.stepOneCopy": "Профессиональные стандарты с первого дня.",
    "history.stepTwoTitle": "Рост",
    "history.stepTwoCopy": "Развитие recruiting, lane coverage и партнерских отношений.",
    "history.stepThreeTitle": "Будущее",
    "history.stepThreeCopy": "Более сильные системы для драйверов, партнеров, shop и safety.",
    "partners.eye": "Партнеры",
    "partners.title": "Наша партнерская сеть помогает KMG двигаться уверенно.",
    "partners.copy": "Мы работаем с carriers, shippers, brokers, maintenance partners, insurance providers и technology vendors.",
    "partners.one": "Carriers & shippers",
    "partners.two": "Freight brokers",
    "partners.three": "Maintenance & repair",
    "partners.four": "Insurance vendors",
    "shop.eye": "Shop",
    "shop.title": "KMG gear и брендированные товары.",
    "shop.copy": "Shop секция подготовлена для будущей корзины и backend integration.",
    "shop.itemOne": "Брендированный товар для драйверов",
    "shop.itemTwo": "Чистый merch",
    "shop.itemThree": "Готово под cart integration",
    "shop.itemFour": "Brand-building item",
    "blog.eye": "Блог",
    "blog.title": "Заметки с дороги, safety updates и истории компании.",
    "blog.copy": "Editorial секция подготовлена для будущего recruiting, safety, partner и operations контента.",
    "blog.categoryOne": "Operations",
    "blog.categoryTwo": "Drivers",
    "blog.categoryThree": "Safety",
    "blog.categoryFour": "Careers",
    "blog.postOne": "Как KMG подходит к dedicated freight и long-haul consistency",
    "blog.postTwo": "На что драйверам смотреть при выборе серьезной OTR компании",
    "blog.postThree": "Почему сильный safety отдел защищает всю операцию",
    "blog.postFour": "Как weekly pay, dispatch и техника формируют лучшую работу",
    "blog.date": "Добавить дату",
    "contact.eye": "Контакты",
    "contact.title": "Свяжитесь с KMG в Филадельфии.",
    "contact.phone": "Телефон",
    "contact.email": "Email",
    "contact.address": "Адрес",
    "contact.hours": "Часы",
    "contact.hoursValue": "Пн - Пт, 8:00 AM - 6:00 PM",
    "contact.dispatch": "Dispatch",
    "contact.dispatchValue": "24/7 для активных драйверов",
    "contact.formTitle": "Отправить сообщение",
    "forms.name": "Имя",
    "forms.namePlaceholder": "Ваше имя",
    "forms.firstName": "Имя",
    "forms.lastName": "Фамилия",
    "forms.email": "Email",
    "forms.phone": "Телефон",
    "forms.experience": "Опыт",
    "forms.experiencePlaceholder": "2 года OTR",
    "forms.subject": "Тема",
    "forms.subjectDriver": "Вопрос драйвера",
    "forms.subjectPartner": "Вопрос партнера",
    "forms.subjectGeneral": "Общий вопрос",
    "forms.message": "Сообщение",
    "forms.messagePlaceholder": "Как мы можем помочь?",
    "forms.submitApplication": "Отправить заявку",
    "forms.sendMessage": "Отправить сообщение",
    "forms.applicationSuccess": "{name}, шаблон заявки готов для подключения backend.",
    "forms.contactSuccess": "{name}, сообщение сохранено локально как шаблон.",
    "faq.eye": "FAQ",
    "faq.title": "Частые вопросы перед заявкой.",
    "faq.qOne": "Какие lanes предлагает KMG?",
    "faq.aOne": "KMG предлагает dedicated USPS, Amazon и dedicated lanes по West Side, Midwest, East Side и South Side.",
    "faq.qTwo": "Какой weekly gross возможен?",
    "faq.aTwo": "Gross может быть около $12,000-$15,000 в неделю в зависимости от lane, performance и финальной программы.",
    "faq.qThree": "Какие траки у KMG?",
    "faq.aThree": "KMG работает с Freightliner траками и делает акцент на чистой современной технике для серьезной OTR работы.",
    "faq.qFour": "Почему safety важен в KMG?",
    "faq.aFour": "KMG силен в safety и service support, помогая драйверам оставаться compliant, защищенными и готовыми к дороге.",
    "seo.eye": "О KMG Trucking",
    "seo.copy": "Kayili M Group LLC - premium OTR trucking company, работающая с 2022 года из Филадельфии. Сайт настроен для CDL Class A recruiting, партнеров, safety trust и развития бренда.",
    "footer.desc": "Kayili M Group LLC - driver-first logistics operation, построенная на safety, service, dispatch и долгосрочных карьерах с 2022.",
    "footer.company": "Компания",
    "footer.drivers": "Драйверы",
    "footer.business": "Бизнес",
    "footer.rights": "© 2026 Kayili M Group LLC. Все права защищены.",
    "footer.tags": "CDL-A · OTR · Freightliner · Safety · Service Shop",
    "telegram.label": "Telegram",
    "telegram.message": "Здравствуйте, пишу с сайта KMG. Хотел бы узнать -"
  },
  uz: {
    "meta.title": "KMG LLC | 2022 yildan beri Premium OTR kompaniya",
    "meta.description": "Kayili M Group LLC - Filadelfiyada joylashgan OTR trucking kompaniyasi: kuchli safety, service shop, Freightliner trucklar va driver dasturlari.",
    "meta.ogTitle": "KMG LLC | 2022 yildan beri Premium OTR kompaniya",
    "meta.ogDescription": "Driverlar, hamkorlar, safety va ishonchli logistika uchun OTR kompaniya.",
    "a11y.skip": "Kontentga o'tish",
    "a11y.openNav": "Menyuni ochish",
    "nav.about": "Biz haqimizda",
    "nav.offers": "Takliflar",
    "nav.careers": "Careers",
    "nav.safety": "Safety",
    "nav.partners": "Hamkorlar",
    "nav.shop": "Shop",
    "nav.blog": "Blog",
    "nav.contact": "Aloqa",
    "theme.light": "Yorug'",
    "theme.dark": "Qorong'i",
    "cta.apply": "Ariza yuborish",
    "cta.partner": "Hamkor bo'lish",
    "cta.contact": "Bog'lanish",
    "cta.driverOffers": "Driver takliflari",
    "hero.eye": "2022 yildan beri Filadelfiyada OTR fleet",
    "hero.title": "KMG LLC",
    "hero.subtitle": "Driverlarga yo'naltirilgan kompaniya: kuchli safety, o'z service shop, Freightliner trucklar va AQSH bo'ylab dedicated lanes.",
    "hero.chipLeft": "Freightliner fleet",
    "hero.chipRight": "24/7 dispatch",
    "trust.one": "Kompaniya 2022 yildan beri",
    "trust.two": "Kuchli dispatch va yordam",
    "trust.three": "Kuchli safety bo'limi",
    "trust.four": "O'z service shop",
    "about.eye": "KMG haqida",
    "about.title": "Driverlar, hamkorlar va tartibli freight operation uchun qurilgan.",
    "about.copyOne": "KMG - Filadelfiyada joylashgan trucking kompaniyasi. Biz aniq aloqa, ishonchli lanes, professional dispatch, kuchli safety va uzoq muddatli driver munosabatlariga e'tibor beramiz.",
    "about.quote": "Kuchli operation safety, equipment va driverga hurmatdan boshlanadi.",
    "about.copyTwo": "Jamoamiz real road experience, Freightliner equipment, dedicated freight opportunities va service support asosida ishlaydi.",
    "offers.eye": "Driver takliflari",
    "offers.title": "Real lanes, kuchli weekly gross va javob beradigan support.",
    "offers.copy": "KMG dedicated USPS, Amazon va West Side, Midwest, East Side, South Side bo'ylab dedicated lanes taklif qiladi.",
    "offers.grossLabel": "Haftalik gross",
    "offers.grossCopy": "Weekly pay va aniq expectation bilan kuchli lanes.",
    "offers.percentLabel": "Foiz",
    "offers.percentCopy": "Malakali driverlar uchun 31% of gross and up.",
    "offers.cpmLabel": "CPM",
    "offers.cpmCopy": "70 CPM dan boshlanadigan imkoniyatlar.",
    "offers.bonusLabel": "Inspection bonuslar",
    "offers.bonusCopy": "Clean inspection va safety performance uchun bonuslar.",
    "offers.laneWest": "West Side",
    "offers.laneMidwest": "Midwest",
    "offers.laneEast": "East Side",
    "offers.laneSouth": "South Side",
    "offers.weekly": "Weekly pay",
    "offers.dispatch": "Top dispatchers",
    "safety.eye": "Safety va servis",
    "safety.title": "Bizning kuchimiz - kuchli safety va o'z service shop.",
    "safety.cardOneTitle": "Kuchli safety bo'limi",
    "safety.cardOneCopy": "KMGda safety dispatch, maintenance va driverlarni himoya qilish jarayonining bir qismi.",
    "safety.cardTwoTitle": "O'z service shop",
    "safety.cardTwoCopy": "Service support trucklarni tayyor, tekshirilgan va yo'lga tayyor holatda ushlab turadi.",
    "safety.cardThreeTitle": "Yangi Freightliner trucklar",
    "safety.cardThreeCopy": "Driverlar OTR uchun qurilgan toza va zamonaviy Freightliner equipment bilan ishlaydi.",
    "fleet.eye": "Fleet",
    "fleet.title": "Jiddiy OTR ish uchun Freightliner trucklar.",
    "fleet.copy": "KMG Freightliner equipment, driver comfort, maintenance discipline va dependable fleet standardsga e'tibor beradi.",
    "fleet.statOne": "Yangi trucklar",
    "fleet.statOneCopy": "Zamonaviy equipment",
    "fleet.statTwoCopy": "Dedicated lanes",
    "fleet.statThreeCopy": "O'z shop support",
    "apply.eye": "Ariza",
    "apply.title": "KMG recruiting bilan jiddiy suhbatni boshlang.",
    "apply.copy": "Forma hozir frontend template sifatida ishlaydi va keyin backend, CRM, email yoki Telegram notificationga ulanadi.",
    "apply.pointOne": "Dedicated USPS va Amazon lanes",
    "apply.pointTwo": "Weekly pay va kuchli gross potential",
    "apply.pointThree": "Bozordagi top dispatchers",
    "apply.pointFour": "Safety va service shop support",
    "apply.formTitle": "Driver application template",
    "reviews.eye": "Sharhlar",
    "reviews.title": "Driverlar va hamkorlardan 5 yulduzli fikrlar.",
    "reviews.one": "Dispatch KMGning eng kuchli tomonlaridan biri. Tez javob berishadi va ishni harakatda ushlab turishadi.",
    "reviews.two": "Safety team jiddiy va professional. Bu yo'lda driverga ko'proq ishonch beradi.",
    "reviews.three": "KMG communicationni toza olib boradi. Hamkor uchun bu juda muhim.",
    "reviews.four": "Yangi trucklar, kuchli lanes va weekly pay programmani tartibli qiladi.",
    "history.eye": "Tarix",
    "history.title": "Boardroomdan emas, road experiencedan qurilgan.",
    "history.copy": "KMG 2022 yilda driverlar uzoq muddat qolishni xohlaydigan kompaniya qurish maqsadi bilan boshlangan.",
    "history.stepOneTitle": "Asos - 2022",
    "history.stepOneCopy": "Birinchi kundan professional standards.",
    "history.stepTwoTitle": "O'sish",
    "history.stepTwoCopy": "Recruiting, lane coverage va hamkorliklarni kengaytirish.",
    "history.stepThreeTitle": "Kelajak",
    "history.stepThreeCopy": "Driverlar, hamkorlar, shop va safety uchun kuchliroq sistemalar.",
    "partners.eye": "Hamkorlar",
    "partners.title": "Hamkorlik tarmog'imiz KMGga ishonch bilan harakat qilishga yordam beradi.",
    "partners.copy": "Biz carriers, shippers, brokers, maintenance partners, insurance providers va technology vendors bilan ishlaymiz.",
    "partners.one": "Carriers & shippers",
    "partners.two": "Freight brokers",
    "partners.three": "Maintenance & repair",
    "partners.four": "Insurance vendors",
    "shop.eye": "Shop",
    "shop.title": "KMG gear va branded items.",
    "shop.copy": "Shop bo'limi kelajakdagi cart va backend integration uchun tayyorlangan.",
    "shop.itemOne": "Driverlar uchun branded item",
    "shop.itemTwo": "Clean merchandise",
    "shop.itemThree": "Cart integration ready",
    "shop.itemFour": "Brand-building item",
    "blog.eye": "Blog",
    "blog.title": "Yo'l eslatmalari, safety updates va kompaniya hikoyalari.",
    "blog.copy": "Kelajakdagi recruiting, safety, partner va operations kontenti uchun tayyorlangan editorial section.",
    "blog.categoryOne": "Operations",
    "blog.categoryTwo": "Drivers",
    "blog.categoryThree": "Safety",
    "blog.categoryFour": "Careers",
    "blog.postOne": "KMG dedicated freight va long-haul consistencyga qanday yondashadi",
    "blog.postTwo": "Driverlar jiddiy OTR kompaniyada nimalarga qarashi kerak",
    "blog.postThree": "Kuchli safety bo'limi butun operationni qanday himoya qiladi",
    "blog.postFour": "Weekly pay, dispatch va equipment yaxshi driving job yaratadi",
    "blog.date": "Publish date qo'shish",
    "contact.eye": "Aloqa",
    "contact.title": "Filadelfiyadagi KMG bilan bog'laning.",
    "contact.phone": "Telefon",
    "contact.email": "Email",
    "contact.address": "Manzil",
    "contact.hours": "Ish vaqti",
    "contact.hoursValue": "Dush - Jum, 8:00 AM - 6:00 PM",
    "contact.dispatch": "Dispatch",
    "contact.dispatchValue": "Active driverlar uchun 24/7",
    "contact.formTitle": "Xabar yuborish",
    "forms.name": "Ism",
    "forms.namePlaceholder": "Ismingiz",
    "forms.firstName": "Ism",
    "forms.lastName": "Familiya",
    "forms.email": "Email",
    "forms.phone": "Telefon",
    "forms.experience": "Tajriba",
    "forms.experiencePlaceholder": "2 yil OTR",
    "forms.subject": "Mavzu",
    "forms.subjectDriver": "Driver savoli",
    "forms.subjectPartner": "Hamkor savoli",
    "forms.subjectGeneral": "Umumiy savol",
    "forms.message": "Xabar",
    "forms.messagePlaceholder": "Qanday yordam bera olamiz?",
    "forms.submitApplication": "Ariza yuborish",
    "forms.sendMessage": "Xabar yuborish",
    "forms.applicationSuccess": "{name}, ariza template backend ulanishi uchun tayyor.",
    "forms.contactSuccess": "{name}, xabaringiz local template sifatida saqlandi.",
    "faq.eye": "FAQ",
    "faq.title": "Ariza yuborishdan oldin eng ko'p beriladigan savollar.",
    "faq.qOne": "KMG qanday lanes taklif qiladi?",
    "faq.aOne": "KMG dedicated USPS, Amazon va West Side, Midwest, East Side, South Side bo'ylab dedicated lanes taklif qiladi.",
    "faq.qTwo": "Driverlar weekly gross qancha qilishi mumkin?",
    "faq.aTwo": "Gross lane, performance va program fitga qarab haftasiga $12,000-$15,000 atrofida bo'lishi mumkin.",
    "faq.qThree": "KMG qanday trucklardan foydalanadi?",
    "faq.aThree": "KMG Freightliner trucklar bilan ishlaydi va jiddiy OTR operation uchun zamonaviy equipmentga e'tibor beradi.",
    "faq.qFour": "Nega safety KMGda muhim?",
    "faq.aFour": "KMG safety va service supportda kuchli, driverlarni compliant, himoyalangan va road-ready bo'lishiga yordam beradi.",
    "seo.eye": "KMG Trucking haqida",
    "seo.copy": "Kayili M Group LLC - 2022 yildan beri Filadelfiyada ishlayotgan premium OTR trucking kompaniyasi. Sayt CDL Class A recruiting, hamkorliklar, safety trust va fleet brand growth uchun tayyorlangan.",
    "footer.desc": "Kayili M Group LLC - safety, service, dispatch va uzoq muddatli career asosida qurilgan driver-first logistics operation.",
    "footer.company": "Kompaniya",
    "footer.drivers": "Driverlar",
    "footer.business": "Biznes",
    "footer.rights": "© 2026 Kayili M Group LLC. Barcha huquqlar himoyalangan.",
    "footer.tags": "CDL-A · OTR · Freightliner · Safety · Service Shop",
    "telegram.label": "Telegram",
    "telegram.message": "Assalomu alaykum, KMG saytidan yozyapman. Bilmoqchi edim -"
  }
};

translations.en["hero.title"] = "A premium fleet built on discipline, trust, and long careers.";
translations.ru["hero.title"] = "A premium fleet built on discipline, trust, and long careers.";
translations.uz["hero.title"] = "A premium fleet built on discipline, trust, and long careers.";
translations.en["nav.blog"] = "News";
translations.ru["nav.blog"] = "Новости";
translations.uz["nav.blog"] = "Yangiliklar";

let currentLang = localStorage.getItem("kmg-language") || "en";

const t = (key) => translations[currentLang]?.[key] || translations.en[key] || key;

const setTheme = (theme) => {
  root.dataset.theme = theme;
  localStorage.setItem("kmg-theme", theme);

  logoNodes.forEach((node) => {
    const logoSrc = theme === "dark" ? node.dataset.logoDark : node.dataset.logoLight;
    if (logoSrc) {
      node.setAttribute("src", logoSrc);
    }
  });

  if (favicon) {
    favicon.setAttribute("href", "assets/new/pictures for web/23 logo circle.png");
  }

  if (themeToggle) {
    themeToggle.textContent = theme === "dark" ? t("theme.dark") : t("theme.light");
    themeToggle.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} theme`);
  }
};

const setTelegramLink = () => {
  if (!telegramLink) {
    return;
  }

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
      if (attr && key) {
        node.setAttribute(attr.trim(), t(key.trim()));
      }
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
  button.addEventListener("click", () => {
    applyTranslations(button.dataset.lang);
  });
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

newsCloseButtons.forEach((button) => {
  button.addEventListener("click", closeNewsModals);
});

newsModals.forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeNewsModals();
    }
  });
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeNewsModals();
  }
});

faqItems.forEach((item) => {
  const button = item.querySelector(".faq-question");
  const icon = button?.querySelector("span:last-child");

  button?.addEventListener("click", () => {
    const isOpen = item.classList.toggle("is-open");
    if (icon) {
      icon.textContent = isOpen ? "-" : "+";
    }
  });
});

tiltItems.forEach((item) => {
  item.addEventListener("pointermove", (event) => {
    if (prefersReducedMotion.matches) {
      return;
    }

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

applicationForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(applicationForm);
  const firstName = data.get("firstName") || "Driver";

  applicationStatus.textContent = t("forms.applicationSuccess").replace("{name}", firstName);
  applicationForm.reset();
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const name = data.get("name") || "Thank you";

  contactStatus.textContent = t("forms.contactSuccess").replace("{name}", name);
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
  if (prefersReducedMotion.matches) {
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
    if (!parallaxImage || prefersReducedMotion.matches) {
      return;
    }

    const offset = Math.min(window.scrollY * 0.05, 20);
    parallaxImage.style.transform = `translateY(${offset}px) scale(1.035)`;
  },
  { passive: true }
);
