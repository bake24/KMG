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
const scrollTruck = document.querySelector("[data-scroll-truck]");
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
    "meta.description": "KMG — транспортная группа в Филадельфии: trucking, service shop, brokerage и consulting.",
    "meta.ogTitle": "KMG LLC | Trucking, Shop, Brokerage, Consulting",
    "meta.ogDescription": "Транспортная компания — fleet operations, driver recruiting, repair support, brokerage и safety consulting.",
    "a11y.skip": "Перейти к контенту",
    "a11y.openNav": "Открыть меню",
    "nav.offers": "Предложения",
    "nav.careers": "Карьера",
    "nav.safety": "Safety",
    "nav.partners": "Partners",
    "nav.shop": "Shop",
    "nav.blog": "Новости",
    "nav.contact": "Контакты",
    "theme.light": "Светлая",
    "theme.dark": "Тёмная",
    "cta.apply": "Подать заявку",
    "cta.partner": "Стать партнёром",
    "cta.contact": "Связаться с нами",
    "cta.driverOffers": "Предложения для водителей",
    "hero.eye": "OTR fleet из Филадельфии с 2020 года",
    "hero.title": "Первоклассный fleet, построенный на дисциплине, доверии и долгих карьерах.",
    "hero.subtitle": "Trucking company на стороне водителя: строгий safety, собственный service shop, Freightliner trucks и dedicated lanes по всей Америке.",
    "hero.chipLeft": "Freightliner fleet",
    "hero.chipRight": "Dispatch 24/7",
    "trust.one": "Компания работает с 2020 года",
    "trust.two": "Лучшие dispatchers и поддержка",
    "trust.three": "Сильный safety department",
    "trust.four": "Собственный service shop",
    "about.eye": "О компании KMG",
    "about.title": "Создана для водителей, партнёров и чёткой организации грузоперевозок.",
    "about.copyOne": "KMG — trucking company из Филадельфии с акцентом на чёткую коммуникацию, надёжные lanes, профессиональный dispatch, строгий safety и долгосрочные отношения с водителями.",
    "about.quote": "Сильные operations начинаются с safety, правильного equipment и уважения к водителю.",
    "about.copyTwo": "Команда KMG строится на реальном опыте вождения, Freightliner equipment, выделенных freight opportunities и service support, который помогает водителям оставаться в движении.",
    "offers.eye": "Предложения для водителей",
    "offers.title": "Реальные lanes, высокий weekly gross и поддержка, которая всегда на связи.",
    "offers.copy": "KMG предлагает dedicated USPS, Amazon и региональные dedicated lanes по West Side, Midwest, East Side и South Side.",
    "offers.grossLabel": "Weekly gross",
    "offers.grossCopy": "Продуктивные lanes с еженедельной оплатой и чёткими условиями.",
    "offers.percentLabel": "Процент",
    "offers.percentCopy": "31% от gross и выше для квалифицированных водителей.",
    "offers.cpmLabel": "CPM",
    "offers.cpmCopy": "CPM opportunities от 70 CPM.",
    "offers.bonusLabel": "Inspection bonuses",
    "offers.bonusCopy": "Бонусы за чистые inspections и показатели safety.",
    "offers.laneWest": "West Side",
    "offers.laneMidwest": "Midwest",
    "offers.laneEast": "East Side",
    "offers.laneSouth": "South Side",
    "offers.weekly": "Еженедельная оплата",
    "offers.dispatch": "Лучшие dispatchers",
    "safety.eye": "Safety And Service",
    "safety.title": "Наша сила — строгий safety и собственный service shop.",
    "safety.cardOneTitle": "Сильный safety department",
    "safety.cardOneCopy": "Safety — часть dispatch, maintenance, подготовки к inspection и защиты водителей ещё до въезда на scale house.",
    "safety.cardTwoTitle": "Собственный service shop",
    "safety.cardTwoCopy": "Service shop support помогает держать Freightliner trucks готовыми, проверенными и стабильными на дороге.",
    "safety.cardThreeTitle": "Freightliner readiness",
    "safety.cardThreeCopy": "Водители работают на чистом, современном Freightliner equipment для серьёзной OTR работы.",
    "fleet.eye": "Fleet",
    "fleet.title": "Freightliner trucks для серьёзной OTR работы.",
    "fleet.copy": "KMG делает ставку на Freightliner equipment, комфорт водителя, дисциплину maintenance и надёжные fleet standards для дальних маршрутов.",
    "fleet.statOne": "Новые грузовики",
    "fleet.statOneCopy": "Современное оборудование",
    "fleet.statTwoCopy": "Dedicated lanes",
    "fleet.statThreeCopy": "Собственный service shop",
    "apply.eye": "Заявка",
    "apply.title": "Начните разговор с отделом recruiting KMG.",
    "apply.copy": "Заполните данные, и HR team получит заявку в Telegram как Website Lead.",
    "apply.pointOne": "Dedicated USPS и Amazon lanes",
    "apply.pointTwo": "Еженедельная оплата и высокий gross potential",
    "apply.pointThree": "Лучшие dispatchers на рынке",
    "apply.pointFour": "Safety и поддержка service shop",
    "apply.formTitle": "Заявка водителя",
    "reviews.eye": "Отзывы",
    "reviews.title": "Пятизвёздочные отзывы водителей и партнёров.",
    "reviews.one": "Dispatch быстро отвечает и держит неделю организованной. Для OTR это реально важно.",
    "reviews.two": "Safety и service shop support здесь на серьёзном уровне. Это чувствуется перед каждым дальним рейсом.",
    "reviews.three": "Коммуникация с KMG — чёткая и профессиональная. С такой командой легко выстроить доверие.",
    "reviews.four": "Новые Freightliner trucks, сильные lanes и еженедельная оплата делают программу организованной.",
    "partners.eye": "Partners",
    "partners.title": "Надёжная партнёрская сеть для серьёзных грузоперевозок.",
    "partners.copy": "KMG работает с brokers, shippers, carriers, сервисными партнёрами, страховщиками и технологическими провайдерами, которым важны чёткая коммуникация, safety и надёжное исполнение.",
    "partners.one": "Brokers & shippers",
    "partners.two": "Dedicated freight",
    "partners.three": "Maintenance partners",
    "partners.four": "Insurance & tech",
    "shop.eye": "Shop",
    "shop.title": "Брендированная продукция KMG — уже в разработке.",
    "shop.copy": "Shop пока представляет витрину будущей продукции KMG. Функции заказа и корзины будут подключены позже.",
    "shop.itemOne": "Базовый брендированный товар для водителя",
    "shop.itemTwo": "Концепт фирменной дорожной одежды",
    "shop.itemThree": "Практичный товар для будущих заказов",
    "shop.itemFour": "Фирменный товар для узнаваемости бренда",
    "contact.eye": "Контакты",
    "contact.title": "Посетите или свяжитесь с KMG в Филадельфии.",
    "contact.phone": "Телефон",
    "contact.email": "Email",
    "contact.address": "Адрес",
    "contact.hours": "Часы работы",
    "contact.hoursValue": "Пн - Пт, 8:00 - 18:00",
    "contact.dispatch": "Dispatch",
    "contact.dispatchValue": "Круглосуточно для активных водителей",
    "forms.firstName": "Имя",
    "forms.lastName": "Фамилия",
    "forms.email": "Email",
    "forms.phone": "Телефон",
    "forms.experience": "Опыт",
    "forms.experiencePlaceholder": "2 года OTR",
    "forms.submitApplication": "Отправить заявку",
    "forms.sending": "Отправляем заявку...",
    "forms.applicationSuccess": "{name}, спасибо. Ваша заявка отправлена HR team KMG.",
    "forms.applicationError": "Не удалось отправить заявку. Свяжитесь с нами по телефону или Telegram.",
    "seo.eye": "О KMG Trucking",
    "seo.copy": "Kayili M Group LLC — premium OTR trucking company, работающая с 2020 года из Филадельфии. Сайт ориентирован на CDL Class A recruiting, партнёрские отношения, доверие к safety и развитие fleet brand.",
    "footer.desc": "Kayili M Group LLC — транспортная группа, построенная на safety, service, dispatch и долгосрочных карьерах с 2020 года.",
    "footer.company": "Компания",
    "footer.drivers": "Водители",
    "footer.business": "Бизнес",
    "footer.rights": "© 2026 Kayili M Group LLC. Все права защищены.",
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
    "nav.offers": "Takliflar",
    "nav.careers": "Karyera",
    "nav.safety": "Safety",
    "nav.partners": "Partners",
    "nav.shop": "Shop",
    "nav.blog": "Yangiliklar",
    "nav.contact": "Kontaktlar",
    "theme.light": "Yorug'",
    "theme.dark": "Qorong'i",
    "cta.apply": "Murojaat qilish",
    "cta.partner": "Hamkor bo'lish",
    "cta.contact": "Bog'lanish",
    "cta.driverOffers": "Haydovchilar uchun takliflar",
    "hero.eye": "Filadelfiyadan OTR fleet — 2020 yildan beri",
    "hero.title": "Intizom, ishonch va uzoq muddatli karyeralar asosida qurilgan premium fleet.",
    "hero.subtitle": "Haydovchi birinchi keladigan trucking company: kuchli safety, o'z service shop, Freightliner trucks va AQSh bo'ylab dedicated lanes.",
    "hero.chipLeft": "Freightliner fleet",
    "hero.chipRight": "Dispatch 24/7",
    "trust.one": "Kompaniya 2020 yildan beri ishlaydi",
    "trust.two": "Eng yaxshi dispatchers va qo'llab-quvvatlash",
    "trust.three": "Kuchli safety department",
    "trust.four": "O'z service shopimiz",
    "about.eye": "KMG haqida",
    "about.title": "Haydovchilar, hamkorlar va puxta yo'lga qo'yilgan yuk tashish uchun yaratilgan.",
    "about.copyOne": "KMG — Filadelfiyadan trucking company. Biz aniq muloqot, ishonchli lanes, professional dispatch, qat'iy safety va haydovchilar bilan uzoq muddatli munosabatlarga e'tibor beramiz.",
    "about.quote": "Kuchli operations safety, to'g'ri equipment va haydovchiga hurmatdan boshlanadi.",
    "about.copyTwo": "KMG jamoasi haqiqiy yo'l tajribasi, Freightliner equipment, dedicated freight opportunities va haydovchilarni harakatda ushlab turadigan service support asosida ishlaydi.",
    "offers.eye": "Haydovchilar uchun takliflar",
    "offers.title": "Haqiqiy lanes, yuqori weekly gross va doim javob beradigan qo'llab-quvvatlash.",
    "offers.copy": "KMG dedicated USPS, Amazon va West Side, Midwest, East Side, South Side bo'ylab regional dedicated lanes taklif qiladi.",
    "offers.grossLabel": "Weekly gross",
    "offers.grossCopy": "Haftalik to'lov va aniq shartlar bilan samarali lanes.",
    "offers.percentLabel": "Foiz",
    "offers.percentCopy": "Malakali haydovchilar uchun gross'ning 31% va undan yuqori.",
    "offers.cpmLabel": "CPM",
    "offers.cpmCopy": "70 CPM dan boshlanadigan CPM opportunities.",
    "offers.bonusLabel": "Inspection bonuslari",
    "offers.bonusCopy": "Toza inspections va safety natijalari uchun bonuslar.",
    "offers.laneWest": "West Side",
    "offers.laneMidwest": "Midwest",
    "offers.laneEast": "East Side",
    "offers.laneSouth": "South Side",
    "offers.weekly": "Haftalik to'lov",
    "offers.dispatch": "Eng yaxshi dispatchers",
    "safety.eye": "Safety And Service",
    "safety.title": "Bizning kuchimiz — qat'iy safety va o'z service shopimiz.",
    "safety.cardOneTitle": "Kuchli safety department",
    "safety.cardOneCopy": "Safety — dispatch, maintenance, inspectionga tayyorgarlik va haydovchilarni himoya qilish jarayonining bir qismi.",
    "safety.cardTwoTitle": "O'z service shopimiz",
    "safety.cardTwoCopy": "Service shop support Freightliner trucksni tayyor, tekshirilgan va yo'lda barqaror holatda ushlab turadi.",
    "safety.cardThreeTitle": "Freightliner readiness",
    "safety.cardThreeCopy": "Haydovchilar jiddiy OTR ishi uchun toza, zamonaviy Freightliner equipment bilan ishlaydi.",
    "fleet.eye": "Fleet",
    "fleet.title": "Jiddiy OTR ishi uchun Freightliner trucks.",
    "fleet.copy": "KMG Freightliner equipment, haydovchi qulayligi, maintenance intizomi va uzoq marshrutlar uchun ishonchli fleet standardlariga e'tibor beradi.",
    "fleet.statOne": "Yangi yuk mashinalari",
    "fleet.statOneCopy": "Zamonaviy uskunalar",
    "fleet.statTwoCopy": "Dedicated lanes",
    "fleet.statThreeCopy": "O'z service shopimiz",
    "apply.eye": "Murojaat",
    "apply.title": "KMG recruiting bilan suhbatni boshlang.",
    "apply.copy": "Ma'lumotlaringizni yuboring, HR jamoasi so'rovni Telegramda Website Lead sifatida oladi.",
    "apply.pointOne": "Dedicated USPS va Amazon lanes",
    "apply.pointTwo": "Haftalik to'lov va yuqori gross imkoniyati",
    "apply.pointThree": "Bozordagi eng yaxshi dispatchers",
    "apply.pointFour": "Safety va service shop qo'llab-quvvatlashi",
    "apply.formTitle": "Haydovchi arizasi",
    "reviews.eye": "Sharhlar",
    "reviews.title": "Haydovchilar va hamkorlardan besh yulduzli sharhlar.",
    "reviews.one": "Dispatch tez javob beradi va haftani tartibli ushlab turadi. OTR ishda bu juda muhim.",
    "reviews.two": "Safety va service shop support bu yerda jiddiy darajada. Har bir uzoq reysdan oldin seziladi.",
    "reviews.three": "KMG bilan muloqot — aniq va professional. Bunday jamoa bilan ishonch qurish oson.",
    "reviews.four": "Yangi Freightliner trucks, kuchli lanes va haftalik to'lov dasturni tartibli qiladi.",
    "partners.eye": "Partners",
    "partners.title": "Jiddiy yuk tashish uchun ishonchli hamkorlik tarmog'i.",
    "partners.copy": "KMG brokers, shippers, carriers, xizmat ko'rsatuvchi hamkorlar, sug'urta va texnologiya provayderlar bilan ishlaydi.",
    "partners.one": "Brokers & shippers",
    "partners.two": "Dedicated freight",
    "partners.three": "Maintenance partners",
    "partners.four": "Insurance & tech",
    "shop.eye": "Shop",
    "shop.title": "KMG brend mahsulotlari — keyingi bosqichga tayyor.",
    "shop.copy": "Shop hozirda KMG kelajak mahsulotlari uchun vitrina vazifasini o'taydi. Buyurtma va savat funksiyalari keyinroq ulanadi.",
    "shop.itemOne": "Haydovchiga mos brend mahsulot",
    "shop.itemTwo": "Kompaniya yo'l kiyimi konsepti",
    "shop.itemThree": "Kelajakdagi buyurtmalar uchun amaliy mahsulot",
    "shop.itemFour": "Brend taniqliligini oshiruvchi mahsulot",
    "contact.eye": "Kontakt",
    "contact.title": "Filadelfiyada KMG bilan bog'laning yoki tashrif buyuring.",
    "contact.phone": "Telefon",
    "contact.email": "Email",
    "contact.address": "Manzil",
    "contact.hours": "Ish vaqti",
    "contact.hoursValue": "Du - Ju, 8:00 - 18:00",
    "contact.dispatch": "Dispatch",
    "contact.dispatchValue": "Faol haydovchilar uchun 24/7",
    "forms.firstName": "Ism",
    "forms.lastName": "Familiya",
    "forms.email": "Email",
    "forms.phone": "Telefon",
    "forms.experience": "Tajriba",
    "forms.experiencePlaceholder": "2 yil OTR",
    "forms.submitApplication": "Ariza yuborish",
    "forms.sending": "Yuborilmoqda...",
    "forms.applicationSuccess": "{name}, rahmat. Arizangiz KMG HR jamoasiga yuborildi.",
    "forms.applicationError": "Ariza yuborilmadi. Telefon yoki Telegram orqali bog'laning.",
    "seo.eye": "KMG Trucking haqida",
    "seo.copy": "Kayili M Group LLC — Filadelfiyadan 2020 yildan beri ishlaydigan premium OTR trucking company. Sayt CDL Class A recruiting, hamkorlik munosabatlari, safety ishonchi va fleet brand rivojlantirish uchun tayyorlangan.",
    "footer.desc": "Kayili M Group LLC — safety, service, dispatch va uzoq muddatli karyeralar asosida qurilgan haydovchi-birinchi logistics kompaniyasi.",
    "footer.company": "Kompaniya",
    "footer.drivers": "Haydovchilar",
    "footer.business": "Biznes",
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
  "home.hero.servicesCta": "\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0443\u0441\u043b\u0443\u0433\u0438",
  "home.trust.fleet": "Fleet \u0438 carrier network",
  "home.trust.directions": "\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0431\u0438\u0437\u043d\u0435\u0441\u0430",
  "home.trust.dispatch": "Dispatch \u0438 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u0432\u043e\u0434\u0438\u0442\u0435\u043b\u0435\u0439",
  "home.trust.year": "\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u043c \u0441 2020 \u0433\u043e\u0434\u0430",
  "home.services.eye": "\u0423\u0441\u043b\u0443\u0433\u0438",
  "home.services.title": "\u0427\u0435\u0442\u044b\u0440\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f, \u0435\u0434\u0438\u043d\u044b\u0439 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442 \u0440\u0430\u0431\u043e\u0442\u044b KMG.",
  "home.services.copy": "\u0423 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0435\u0441\u0442\u044c \u0441\u0432\u043e\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0441 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u044f\u043c\u0438, \u0446\u0438\u0444\u0440\u0430\u043c\u0438, \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435\u043c \u0443\u0441\u043b\u0443\u0433 \u0438 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 \u0448\u0430\u0433\u0430\u043c\u0438.",
  "home.more": "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435",
  "home.trucking.title": "Trucking",
  "home.trucking.copy": "\u041e\u0441\u043d\u043e\u0432\u0430 KMG: \u0432\u043e\u0434\u0438\u0442\u0435\u043b\u0438, fleet network, dedicated lanes, dispatch, \u043f\u043e\u0442\u0435\u043d\u0446\u0438\u0430\u043b \u0435\u0436\u0435\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u0434\u043e\u0445\u043e\u0434\u0430, safety \u0438 \u043e\u0442\u0437\u044b\u0432\u044b.",
  "home.shop.title": "Shop",
  "home.shop.copy": "\u0421\u0435\u0440\u0432\u0438\u0441\u043d\u043e\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 KMG: repair support, RS workflow, invoices, inspection readiness, \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0438 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c uptime.",
  "home.brokerage.title": "Brokerage",
  "home.brokerage.copy": "\u0424\u0440\u0430\u0445\u0442\u043e\u0432\u043e\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435: street lanes, broker relationships, partner coverage, freight communication \u0438 \u0432\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u044c \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0439.",
  "home.consulting.title": "Consulting",
  "home.consulting.copy": "\u0421\u0438\u0441\u0442\u0435\u043c\u043d\u043e\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435: safety consulting, dispatch process, fleet setup, carrier setup, audits, compliance \u0438 \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439.",
  "apply.formTitle": "\u0417\u0430\u044f\u0432\u043a\u0430 \u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044f",
  "forms.firstName": "\u0418\u043c\u044f",
  "forms.lastName": "\u0424\u0430\u043c\u0438\u043b\u0438\u044f",
  "forms.email": "Email",
  "forms.phone": "\u0422\u0435\u043b\u0435\u0444\u043e\u043d",
  "forms.experience": "\u041e\u043f\u044b\u0442",
  "forms.experiencePlaceholder": "2 \u0433\u043e\u0434\u0430 OTR",
  "forms.submitApplication": "\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443",
  "forms.sending": "\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c \u0437\u0430\u044f\u0432\u043a\u0443...",
  "forms.applicationSuccess": "{name}, \u0441\u043f\u0430\u0441\u0438\u0431\u043e. \u0412\u0430\u0448\u0430 \u0437\u0430\u044f\u0432\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430 HR team KMG.",
  "forms.applicationError": "\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443. \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0438\u043b\u0438 \u043d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0432 Telegram.",
  "reviews.eye": "\u041e\u0442\u0437\u044b\u0432\u044b",
  "reviews.title": "\u041f\u044f\u0442\u0438\u0437\u0432\u0451\u0437\u0434\u043e\u0447\u043d\u044b\u0435 \u043e\u0442\u0437\u044b\u0432\u044b \u0432\u043e\u0434\u0438\u0442\u0435\u043b\u0435\u0439 \u0438 \u043f\u0430\u0440\u0442\u043d\u0451\u0440\u043e\u0432.",
  "reviews.one": "Dispatch \u0431\u044b\u0441\u0442\u0440\u043e \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0438 \u0434\u0435\u0440\u0436\u0438\u0442 \u043d\u0435\u0434\u0435\u043b\u044e \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u043e\u0439. \u0414\u043b\u044f OTR \u044d\u0442\u043e \u0432\u0430\u0436\u043d\u043e.",
  "reviews.two": "Safety \u0438 service shop support \u0437\u0434\u0435\u0441\u044c \u043d\u0430 \u0441\u0435\u0440\u044c\u0451\u0437\u043d\u043e\u043c \u0443\u0440\u043e\u0432\u043d\u0435.",
  "reviews.three": "\u041a\u043e\u043c\u043c\u0443\u043d\u0438\u043a\u0430\u0446\u0438\u044f \u0441 KMG \u2014 \u0447\u0451\u0442\u043a\u0430\u044f \u0438 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f.",
  "reviews.four": "\u041d\u043e\u0432\u044b\u0435 Freightliner trucks, \u0441\u0438\u043b\u044c\u043d\u044b\u0435 lanes \u0438 \u0435\u0436\u0435\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0430\u044f \u043e\u043f\u043b\u0430\u0442\u0430 \u0434\u0435\u043b\u0430\u044e\u0442 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0443 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u043e\u0439.",
  "contact.eye": "\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",
  "contact.title": "\u041f\u043e\u0441\u0435\u0442\u0438\u0442\u0435 \u0438\u043b\u0438 \u0441\u0432\u044f\u0436\u0438\u0442\u0435\u0441\u044c \u0441 KMG \u0432 \u0424\u0438\u043b\u0430\u0434\u0435\u043b\u044c\u0444\u0438\u0438.",
  "contact.phone": "\u0422\u0435\u043b\u0435\u0444\u043e\u043d",
  "contact.email": "Email",
  "contact.address": "\u0410\u0434\u0440\u0435\u0441",
  "contact.hours": "\u0427\u0430\u0441\u044b",
  "contact.hoursValue": "\u041f\u043d - \u041f\u0442, 8:00 - 18:00",
  "contact.dispatch": "Dispatch",
  "contact.dispatchValue": "\u041a\u0440\u0443\u0433\u043b\u043e\u0441\u0443\u0442\u043e\u0447\u043d\u043e \u0434\u043b\u044f \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u0432\u043e\u0434\u0438\u0442\u0435\u043b\u0435\u0439",
  "footer.desc": "Kayili M Group LLC \u2014 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0430, \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u0430\u044f \u043d\u0430 safety, service, dispatch \u0438 \u0434\u043e\u043b\u0433\u043e\u0441\u0440\u043e\u0447\u043d\u044b\u0445 \u043a\u0430\u0440\u044c\u0435\u0440\u0430\u0445 \u0441 2020 \u0433\u043e\u0434\u0430.",
  "footer.company": "\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f",
  "footer.business": "\u0411\u0438\u0437\u043d\u0435\u0441",
  "footer.rights": "\u00a9 2026 Kayili M Group LLC. \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b.",
  "telegram.label": "Telegram",
  "telegram.message": "\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435, \u043f\u0438\u0448\u0443 \u0441 \u0441\u0430\u0439\u0442\u0430 KMG. \u0425\u043e\u0442\u0435\u043b \u0431\u044b \u0443\u0437\u043d\u0430\u0442\u044c -",
});

Object.assign(translations.uz, {
  "nav.services": "Xizmatlar",
  "home.hero.eye": "KMG Group LLC / Filadelfiya transportation company",
  "home.hero.title": "Fleet, service, brokerage va safety asosida qurilgan transportation company.",
  "home.hero.copy": "KMG trucking operations, Freightliner fleet support, repair and inspection services, brokerage lanes va consultingni aniq tizimlar izlayotgan carriers uchun birlashtiradi.",
  "home.hero.servicesCta": "Xizmatlarni ko'rish",
  "home.trust.fleet": "Fleet va carrier network",
  "home.trust.directions": "Biznesning asosiy yo'nalishlari",
  "home.trust.dispatch": "Dispatch va haydovchi qo'llab-quvvatlashi",
  "home.trust.year": "2020 yildan beri",
  "home.services.eye": "Xizmatlar",
  "home.services.title": "To'rt yo'nalish, bitta KMG ish standarti.",
  "home.services.copy": "Har bir yo'nalishning o'z sahifasi bor — batafsil ma'lumot, raqamlar, xizmat tafsilotlari va keyingi qadamlar bilan.",
  "home.more": "Batafsil",
  "home.trucking.title": "Trucking",
  "home.trucking.copy": "KMGning asosi: haydovchilar, fleet network, dedicated lanes, dispatch, haftalik daromad imkoniyati, safety va sharhlar.",
  "home.shop.title": "Shop",
  "home.shop.copy": "KMG xizmat yo'nalishi: repair support, RS workflow, invoices, inspection readiness, hujjatlar va uptime nazorati.",
  "home.brokerage.title": "Brokerage",
  "home.brokerage.copy": "Yuk ulanish qatlami: street lanes, broker relationships, hamkor qamrovi, freight communication va jo'natma ko'rinarligi.",
  "home.consulting.title": "Consulting",
  "home.consulting.copy": "Tizimlar yo'nalishi: safety consulting, dispatch jarayoni, fleet setup, carrier setup, audits, compliance va operatsiyalarni tartibga solish.",
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
  "home.lanes.eye": "Coverage",
  "home.lanes.title": "Dedicated lanes across 48 states.",
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
  "cta.apply": "Подать заявку",
  "cta.contactKmg": "Связаться с KMG",
  "service.back": "Назад к услугам",
  "service.mockPackage": "Пример пакета",
  "footer.descShort": "Транспортная группа — trucking, shop, brokerage и consulting.",
  "footer.company": "Компания",
  "footer.rights": "© 2026 Kayili M Group LLC. Все права защищены.",
  "home.compliance.eye": "Compliance Snapshot",
  "home.compliance.title": "Операционная идентичность, дисциплина compliance и база для роста.",
  "home.compliance.hq": "Главный офис",
  "home.compliance.capacity": "Пример мощности",
  "home.lanes.eye": "Маршруты",
  "home.lanes.title": "Выделенные маршруты по 48 штатам.",
  "home.about.eye": "Что делает KMG",
  "home.about.title": "KMG — это не просто одна trucking lane. Это операционная платформа для водителей, freight, equipment и compliance.",
  "home.about.copy": "Компания объединяет trucking, shop services, brokerage relationships и consulting для carriers. Такая структура помогает водителям находить работу, партнёрам двигать freight, а fleet owners — укреплять safety, dispatch, setup и audit discipline.",
  "home.about.quote": "Мы сильнее всего там, где operations встречаются с accountability: safety, dispatch, shop, fleet и lanes.",
  "home.metric.fleet": "Fleet network",
  "home.metric.gross": "Weekly gross potential",
  "home.metric.dispatch": "Dispatch support",
  "home.trucking.itemOne": "Dedicated USPS и Amazon lanes",
  "home.trucking.itemTwo": "West Side, Midwest, East Side и South Side coverage",
  "home.trucking.itemThree": "Driver recruiting, отзывы и форма заявки",
  "home.shop.metricOne": "Поддержка грузовиков",
  "home.shop.metricTwo": "Заявки на обслуживание",
  "home.shop.metricThree": "Документация и billing",
  "home.shop.itemOne": "Repair coordination между водителем, shop и dispatch",
  "home.shop.itemTwo": "Inspection preparation и service records",
  "home.shop.itemThree": "Invoice discipline для прозрачной maintenance history",
  "home.brokerage.metricOne": "Street и partner lanes",
  "home.brokerage.metricTwo": "Carrier relationships",
  "home.brokerage.metricThree": "Freight visibility",
  "home.brokerage.itemOne": "Street lane support и freight matching",
  "home.brokerage.itemTwo": "Коммуникация с brokers, shippers и carriers",
  "home.brokerage.itemThree": "Coverage planning для срочного и регулярного freight",
  "home.consulting.metricOne": "Compliance systems",
  "home.consulting.metricTwo": "Carrier и fleet",
  "home.consulting.metricThree": "Process review",
  "home.consulting.itemOne": "Safety consulting и audit readiness",
  "home.consulting.itemTwo": "Dispatch workflow и communication structure",
  "home.consulting.itemThree": "Fleet setup, carrier setup и документация процессов",
  "apply.eye": "Заявка",
  "apply.title": "Заявки водителей — приоритет для KMG.",
  "apply.copy": "Расскажите, кто вы, какой у вас OTR experience и как с вами связаться. HR получает заявку в Telegram как Website Lead.",
  "apply.gross": "Weekly gross potential",
  "apply.percent": "Процент от gross и выше",
  "apply.cpm": "CPM opportunities",
  "trucking.eye": "KMG Trucking",
  "trucking.title": "300+ fleet network, dedicated lanes, высокий gross potential и поддержка водителей.",
  "trucking.copy": "Trucking — основа KMG: водители, lanes, dispatch, equipment, safety и долгосрочные отношения.",
  "trucking.cardFleet": "Fleet и carrier network для серьёзных OTR operations.",
  "trucking.cardGrossLabel": "Weekly gross",
  "trucking.cardGross": "Weekly gross potential зависит от lane, результата и program fit.",
  "trucking.cardPercent": "31% от gross и выше для квалифицированных водителей.",
  "trucking.cardCpm": "CPM opportunities от 70 CPM.",
  "trucking.fleetMix": "Пример состава fleet",
  "trucking.coverage": "Пример зоны покрытия",
  "trucking.featureOneTitle": "Lanes и freight",
  "trucking.featureOneCopy": "Dedicated USPS, Amazon и региональное покрытие по West Side, Midwest, East Side и South Side.",
  "trucking.featureTwoTitle": "Dispatch support",
  "trucking.featureTwoCopy": "Лучшие dispatchers, быстрая связь и чёткие ожидания для активных водителей.",
  "trucking.featureThreeTitle": "Safety и shop",
  "trucking.featureThreeCopy": "Safety department и service shop support помогают водителям соответствовать требованиям и оставаться в движении.",
  "trucking.processOneTitle": "Заявка",
  "trucking.processOneCopy": "Водитель отправляет Website Lead с контактными данными и OTR experience.",
  "trucking.processTwoTitle": "Отбор",
  "trucking.processTwoCopy": "Recruiting проверяет соответствие, доступность, lanes и ожидания по оплате.",
  "trucking.processThreeTitle": "Dispatch",
  "trucking.processThreeCopy": "Водитель получает lane plan, ожидания по коммуникации и контакты поддержки.",
  "trucking.processFourTitle": "Работа",
  "trucking.processFourCopy": "Safety, dispatch и shop support помогают грузовику оставаться в движении.",
  "trucking.ctaTitle": "Готовы обсудить trucking с KMG?",
  "trucking.ctaCopy": "Отправьте заявку водителя, и HR получит её как Website Lead.",
  "shopPage.eye": "KMG Shop",
  "shopPage.title": "Repair, RS, invoices, inspections и uptime support.",
  "shopPage.copy": "KMG Shop поддерживает road readiness: repair coordination, inspection preparation, documentation, invoices и service discipline для active trucks.",
  "shopPage.capabilities": "Возможности service shop",
  "shopPage.systemTitle": "Готовность грузовика — это система бизнес-процессов, а не просто ремонт.",
  "shopPage.systemCopy": "Shop direction поддерживает водителей, fleet owners и dispatch через быструю документацию, чёткую коммуникацию и практичный maintenance flow.",
  "shopPage.statRepair": "Road и shop coordination",
  "shopPage.statRs": "Service request handling",
  "shopPage.statInvoice": "Documentation support",
  "shopPage.featureOneTitle": "Repair coordination",
  "shopPage.featureOneCopy": "Поддержка при проблемах с грузовиком, планирование ремонта, service flow и коммуникация между водителем, shop и dispatch.",
  "shopPage.featureTwoTitle": "Inspection readiness",
  "shopPage.featureTwoCopy": "Подготовка к чистым inspections, safety standards и документация — до того, как проблемы на дороге обойдутся дорого.",
  "shopPage.featureThreeTitle": "Invoices и records",
  "shopPage.featureThreeCopy": "Invoice support, service records, история ремонтов и дисциплина документооборота для прозрачности fleet.",
  "shopPage.readyRepair": "Repair грузовика и координация поддержки",
  "shopPage.readyRs": "Service request workflow",
  "shopPage.readyInspection": "Pre-inspection readiness",
  "shopPage.readyInvoice": "Чёткая сервисная документация",
  "shopPage.packageOneTitle": "Road Ready Check",
  "shopPage.packageOneCopy": "Базовая проверка готовности к inspection, заметки о видимых проблемах и коммуникация с водителем перед dispatch.",
  "shopPage.packageTwoTitle": "Repair Flow",
  "shopPage.packageTwoCopy": "Приём заявки на ремонт, координация с shop, сервисные заметки, отслеживание invoice и обновления статуса.",
  "shopPage.packageThreeTitle": "Fleet Records",
  "shopPage.packageThreeCopy": "Пример maintenance history, архив invoice, заметки по inspection и dashboard учёта обслуживания.",
  "shopPage.ctaTitle": "Нужен shop support или координация обслуживания?",
  "shopPage.ctaCopy": "Свяжитесь с KMG и расскажите, какая поддержка вам нужна.",
  "shopPage.footerDesc": "Shop support для repair, RS, invoices, inspections и uptime.",
  "brokerage.eye": "KMG Brokerage",
  "brokerage.title": "Street lanes, freight relationships и coverage support.",
  "brokerage.copy": "Направление brokerage в KMG сосредоточено на коммуникации, видимости lanes, freight partnerships и надёжном исполнении.",
  "brokerage.featureOneTitle": "Street lanes",
  "brokerage.featureOneCopy": "Lane support для spot opportunities, partner freight и route coverage.",
  "brokerage.featureTwoTitle": "Partner network",
  "brokerage.featureTwoCopy": "Коммуникация с brokers, shippers, carriers и операционными партнёрами.",
  "brokerage.featureThreeTitle": "Freight visibility",
  "brokerage.featureThreeCopy": "Чёткие ожидания по pickup, delivery, обновлениям и надёжности сервиса.",
  "brokerage.mockLane": "Пример lane",
  "brokerage.packageOneTitle": "East Coast regional",
  "brokerage.packageOneCopy": "Street lane coverage для Northeast, Midwest handoffs и регулярных freight opportunities.",
  "brokerage.packageTwoTitle": "Midwest coverage",
  "brokerage.packageTwoCopy": "Carrier partner matching, коммуникация по appointment и обновления статуса груза.",
  "brokerage.packageThreeTitle": "South / West lanes",
  "brokerage.packageThreeCopy": "Coverage planning для spot lanes, dedicated freight и потребностей partner freight.",
  "brokerage.standardsEye": "Brokerage standards",
  "brokerage.standardsTitle": "Цель проста: чёткая freight communication и надёжное coverage.",
  "brokerage.standardsCopy": "Направление brokerage KMG поддерживает движение freight через lane clarity, партнёрскую ответственность и операционную дисциплину.",
  "brokerage.stripOne": "Street lanes",
  "brokerage.stripTwo": "Broker relations",
  "brokerage.stripThree": "Shipper support",
  "brokerage.ctaTitle": "Хотите обсудить freight или lanes?",
  "brokerage.ctaCopy": "Свяжитесь с KMG и расскажите, какие brokerage отношения вам нужны.",
  "brokerage.footerDesc": "Brokerage support для street lanes, freight relationships и coverage.",
  "consulting.eye": "KMG Consulting",
  "consulting.title": "Safety consulting, dispatch systems, fleet setup, carrier setup и audits.",
  "consulting.copy": "Consulting для carriers и команд, которым нужны сильные operations без долгих проб и ошибок в compliance, dispatch, fleet processes и setup.",
  "consulting.featureOneTitle": "Safety consulting",
  "consulting.featureOneCopy": "Поддержка в области safety process, inspection readiness, документации и операционных стандартов.",
  "consulting.featureTwoTitle": "Dispatch systems",
  "consulting.featureTwoCopy": "Dispatch workflow, communication structure, поддержка водителей и дисциплина принятия lane decisions.",
  "consulting.featureThreeTitle": "Fleet setup",
  "consulting.featureThreeCopy": "Carrier setup, fleet standards, структура процессов и операционная основа для роста.",
  "consulting.readySafety": "Consulting по compliance и safety process",
  "consulting.readyDispatch": "Настройка workflow и communication",
  "consulting.readyFleet": "Fleet systems и стандарты",
  "consulting.readyAudit": "Audit readiness и process review",
  "consulting.packageOneTitle": "Safety Readiness",
  "consulting.packageOneCopy": "Анализ safety process, инспекционное мышление, контрольный список документов и рекомендации по compliance workflow.",
  "consulting.packageTwoTitle": "Dispatch Setup",
  "consulting.packageTwoCopy": "Структура dispatch communication, поток поддержки водителей, lane notes, правила эскалации и ритм статусов.",
  "consulting.packageThreeTitle": "Carrier Audit",
  "consulting.packageThreeCopy": "Пример аудита: setup, fleet records, safety process, dispatch process и операционные пробелы.",
  "consulting.ctaTitle": "Нужен consulting для carrier operation?",
  "consulting.ctaCopy": "Свяжитесь с KMG и опишите направление, которое хотите улучшить.",
  "consulting.footerDesc": "Consulting для safety, dispatch, fleet setup, carrier setup и audits.",
  "news.eye": "KMG Новости",
  "news.title": "Обновления рынка грузоперевозок для водителей и партнёров.",
  "news.copy": "Краткие практичные обновления по safety, ставкам, топливу и дисциплине работы.",
  "news.close": "Закрыть",
  "news.cardOneCat": "Freight Market",
  "news.cardOneTitle": "Truckload capacity сжимается быстрее ожиданий",
  "news.cardTwoTitle": "International Roadcheck фокусируется на ELD и cargo securement",
  "news.cardThreeTitle": "Diesel и операционные расходы давят на routing decisions",
  "news.cardFourTitle": "Удаление ELD из реестра FMCSA повышает compliance risk для carriers",
  "news.cardFiveTitle": "Политика, топливо и геополитические риски меняют freight planning",
  "news.modalOneTitle": "Рынок truckload сжимается быстрее ожиданий.",
  "news.modalOneCopy": "Апрельский update C.H. Robinson 2026 отмечает ускоренное сужение North American truckload markets и более высокие прогнозируемые truckload costs по сравнению с прошлым годом. Для KMG это подтверждает ценность дисциплинированного dispatch, lane planning и надёжного сервиса.",
  "news.modalTwoTitle": "Сезон Roadcheck ставит ELD и cargo readiness в центр внимания.",
  "news.modalTwoCopy": "CVSA назначила International Roadcheck на 12–14 мая 2026 года с акцентом на ELD tampering и cargo securement. Это делает safety discipline, документацию и shop readiness особенно важными для активных carriers.",
  "news.modalThreeTitle": "Топливо и операционные расходы остаются главным давлением при планировании.",
  "news.modalThreeCopy": "Апрельский market update Crane Worldwide указывает на растущее cost pressure на рынке U.S. ground, волатильность топлива и регуляторные риски. Для carriers это означает, что route discipline и контроль затрат важны каждую неделю.",
  "news.modalFourTitle": "Удаление ELD из реестра FMCSA быстро становится угрозой вывода из эксплуатации.",
  "news.modalFourCopy": "FMCSA исключила HERO ELD из зарегистрированного списка 2 апреля 2026 года. Carriers, использующие отозванный ELD, должны до дедлайна заменить его на сертифицированное устройство.",
  "news.modalFiveTitle": "Freight planning меняется под давлением capacity, топлива и регулирования.",
  "news.modalFiveCopy": "Апрельские market reports фиксируют tighter capacity, повышенную топливную нагрузку и compliance pressure. Операционная модель KMG отвечает на эту среду через dispatch discipline, safety systems и практичную service support.",
});

Object.assign(translations.uz, {
  "nav.home": "Bosh sahifa",
  "nav.services": "Xizmatlar",
  "nav.blog": "Yangiliklar",
  "nav.contact": "Kontaktlar",
  "cta.apply": "Murojaat qilish",
  "cta.contactKmg": "KMG bilan bog'lanish",
  "service.back": "Xizmatlarga qaytish",
  "service.mockPackage": "Namuna paket",
  "footer.descShort": "Trucking, shop, brokerage va consulting asosida qurilgan transportation group.",
  "footer.company": "Kompaniya",
  "footer.rights": "© 2026 Kayili M Group LLC. Barcha huquqlar himoyalangan.",
  "home.compliance.eye": "Compliance Snapshot",
  "home.compliance.title": "Operatsion identitet, compliance intizomi va o'sish uchun tayyor tuzilma.",
  "home.compliance.hq": "Bosh ofis",
  "home.compliance.capacity": "Taxminiy quvvat",
  "home.lanes.eye": "Yo'nalishlar",
  "home.lanes.title": "48 shtat bo'ylab maxsus yo'nalishlar.",
  "home.about.eye": "KMG nima qiladi",
  "home.about.title": "KMG bitta trucking lane emas. Bu haydovchilar, freight, equipment va compliance uchun operatsion platforma.",
  "home.about.copy": "Kompaniya trucking, shop services, brokerage relationships va consultingni carriers uchun birlashtiradi. Bu haydovchilarga ish topish, hamkorlarga freight harakatini ta'minlash, fleet ownerlarga esa safety, dispatch, setup va audit intizomini kuchaytirish imkonini beradi.",
  "home.about.quote": "Biz operations va accountability kesishgan joyda kuchlimiz: safety, dispatch, shop, fleet va lanes.",
  "home.metric.fleet": "Fleet network",
  "home.metric.gross": "Haftalik daromad imkoniyati",
  "home.metric.dispatch": "Dispatch qo'llab-quvvatlashi",
  "home.trucking.itemOne": "Dedicated USPS va Amazon lanes",
  "home.trucking.itemTwo": "West Side, Midwest, East Side va South Side qamrovi",
  "home.trucking.itemThree": "Haydovchi recruiting, sharhlar va ariza jarayoni",
  "home.shop.metricOne": "Yuk mashinasi qo'llab-quvvatlashi",
  "home.shop.metricTwo": "Xizmat so'rovlari",
  "home.shop.metricThree": "Hujjatlar va billing",
  "home.shop.itemOne": "Driver, shop va dispatch o'rtasida repair coordination",
  "home.shop.itemTwo": "Inspection preparation va service records",
  "home.shop.itemThree": "Transparent maintenance history uchun invoice discipline",
  "home.brokerage.metricOne": "Street va partner lanes",
  "home.brokerage.metricTwo": "Carrier relationships",
  "home.brokerage.metricThree": "Freight visibility",
  "home.brokerage.itemOne": "Street lane support va freight matching",
  "home.brokerage.itemTwo": "Brokers, shippers va carriers bilan muloqot",
  "home.brokerage.itemThree": "Shoshilinch va muntazam freight uchun coverage planning",
  "home.consulting.metricOne": "Compliance tizimlari",
  "home.consulting.metricTwo": "Carrier va fleet",
  "home.consulting.metricThree": "Jarayon tahlili",
  "home.consulting.itemOne": "Safety consulting va audit readiness",
  "home.consulting.itemTwo": "Dispatch workflow va muloqot tuzilmasi",
  "home.consulting.itemThree": "Fleet setup, carrier setup va jarayon hujjatlari",
  "apply.eye": "Murojaat",
  "apply.title": "Haydovchi arizalari KMG uchun ustuvordir.",
  "apply.copy": "Kimligingiz, OTR tajribangiz va aloqa ma'lumotlaringizni yuboring. HR ariza qabul qiladi.",
  "apply.gross": "Haftalik daromad imkoniyati",
  "apply.percent": "Gross foizi va undan yuqori",
  "apply.cpm": "CPM opportunities",
  "trucking.eye": "KMG Trucking",
  "trucking.title": "300+ fleet network, dedicated lanes, yuqori gross imkoniyati va haydovchi qo'llab-quvvatlashi.",
  "trucking.copy": "Trucking KMGning asosi: haydovchilar, lanes, dispatch, equipment, safety va uzoq muddatli munosabatlar.",
  "trucking.cardFleet": "Jiddiy OTR operatsiyalari uchun fleet va carrier network.",
  "trucking.cardGrossLabel": "Weekly gross",
  "trucking.cardGross": "Haftalik daromad imkoniyati lane, natija va dasturga mos kelishga bog'liq.",
  "trucking.cardPercent": "Malakali haydovchilar uchun gross'ning 31% va undan yuqori.",
  "trucking.cardCpm": "70 CPM dan boshlanadigan CPM imkoniyatlari.",
  "trucking.fleetMix": "Taxminiy fleet tarkibi",
  "trucking.coverage": "Taxminiy qamrov",
  "trucking.featureOneTitle": "Lanes va freight",
  "trucking.featureOneCopy": "Dedicated USPS, Amazon va West Side, Midwest, East Side, South Side bo'ylab regional qamrov.",
  "trucking.featureTwoTitle": "Dispatch qo'llab-quvvatlash",
  "trucking.featureTwoCopy": "Eng yaxshi dispatchers, tez muloqot va faol haydovchilar uchun aniq kutishlar.",
  "trucking.featureThreeTitle": "Safety va shop",
  "trucking.featureThreeCopy": "Safety department va service shop support haydovchilarni muvofiqlikda va harakatda ushlab turadi.",
  "trucking.processOneTitle": "Ariza",
  "trucking.processOneCopy": "Haydovchi aloqa ma'lumotlari va OTR tajribasi bilan Website Lead yuboradi.",
  "trucking.processTwoTitle": "Tanlash",
  "trucking.processTwoCopy": "Recruiting moslik, mavjudlik, lanes va to'lov kutishlarini ko'rib chiqadi.",
  "trucking.processThreeTitle": "Dispatch",
  "trucking.processThreeCopy": "Haydovchi lane plan, muloqot kutishlari va qo'llab-quvvatlash kontaktlarini oladi.",
  "trucking.processFourTitle": "Ish",
  "trucking.processFourCopy": "Safety, dispatch va shop support yuk mashinasini harakatda ushlab turishga yordam beradi.",
  "trucking.ctaTitle": "KMG trucking haqida suhbatga tayyormisiz?",
  "trucking.ctaCopy": "Haydovchi arizasini yuboring, HR uni Website Lead sifatida qabul qiladi.",
  "shopPage.eye": "KMG Shop",
  "shopPage.title": "Repair, RS, invoices, inspections va uptime qo'llab-quvvatlash.",
  "shopPage.copy": "KMG Shop yo'lga tayyorlikni qo'llab-quvvatlaydi: repair coordination, inspectionga tayyorgarlik, hujjatlar, invoices va faol yuk mashinalari uchun xizmat intizomi.",
  "shopPage.capabilities": "Service shop imkoniyatlari",
  "shopPage.systemTitle": "Truck ready bo'lishi business system, faqat repair task emas.",
  "shopPage.systemCopy": "Shop direction drivers, fleet owners va dispatchga fast documentation, clean communication va practical maintenance flow orqali yordam beradi.",
  "shopPage.statRepair": "Yo'l va shop koordinatsiyasi",
  "shopPage.statRs": "Xizmat so'rovlarini ko'rib chiqish",
  "shopPage.statInvoice": "Hujjatlar bo'yicha qo'llab-quvvatlash",
  "shopPage.featureOneTitle": "Repair coordination",
  "shopPage.featureOneCopy": "Yuk mashinasi muammolari, ta'mirlashni rejalashtirish, service flow va haydovchi, shop, dispatch o'rtasidagi muloqot uchun qo'llab-quvvatlash.",
  "shopPage.featureTwoTitle": "Inspectionga tayyorgarlik",
  "shopPage.featureTwoCopy": "Yo'l muammolari qimmatga tushmasidan oldin toza inspections, safety standartlari va hujjatlarga tayyorgarlik.",
  "shopPage.featureThreeTitle": "Invoices va records",
  "shopPage.featureThreeCopy": "Fleet shaffofligi uchun invoice qo'llab-quvvatlash, xizmat yozuvlari, ta'mirlash tarixi va hujjat intizomi.",
  "shopPage.readyRepair": "Yuk mashinasini ta'mirlash va koordinatsiya",
  "shopPage.readyRs": "Xizmat so'rovi workflow",
  "shopPage.readyInspection": "Inspectiondan oldingi tayyorgarlik",
  "shopPage.readyInvoice": "Aniq xizmat hujjatlari",
  "shopPage.packageOneTitle": "Road Ready Check",
  "shopPage.packageOneCopy": "Inspectionga tayyorlikni asosiy ko'rib chiqish, ko'rinadigan muammolar eslatmalari va dispatchdan oldin haydovchi bilan muloqot.",
  "shopPage.packageTwoTitle": "Repair Flow",
  "shopPage.packageTwoCopy": "Ta'mirlash so'rovini qabul qilish, shop koordinatsiyasi, xizmat eslatmalari, invoice kuzatuvi va holat yangilanishlari.",
  "shopPage.packageThreeTitle": "Fleet Records",
  "shopPage.packageThreeCopy": "Maintenance tarixi, invoice arxivi, inspection eslatmalari va xizmat hisobi dashboard namunasi.",
  "shopPage.ctaTitle": "Shop qo'llab-quvvatlash yoki xizmat koordinatsiyasi kerakmi?",
  "shopPage.ctaCopy": "KMG bilan bog'laning va qanday qo'llab-quvvatlash kerakligini yozing.",
  "shopPage.footerDesc": "Repair, RS, invoices, inspections va uptime uchun shop support.",
  "brokerage.eye": "KMG Brokerage",
  "brokerage.title": "Street lanes, freight relationships va coverage support.",
  "brokerage.copy": "KMG brokerage yo'nalishi muloqot, lanes ko'rinarligi, freight partnerships va ishonchli bajarishga e'tibor beradi.",
  "brokerage.featureOneTitle": "Street lanes",
  "brokerage.featureOneCopy": "Spot imkoniyatlar, partner freight va marshrutlar qamrovi uchun lane qo'llab-quvvatlash.",
  "brokerage.featureTwoTitle": "Hamkorlik tarmog'i",
  "brokerage.featureTwoCopy": "Brokers, shippers, carriers va operatsion hamkorlar bilan muloqot.",
  "brokerage.featureThreeTitle": "Freight ko'rinarligi",
  "brokerage.featureThreeCopy": "Pickup, delivery, yangilanishlar va xizmat ishonchliligi bo'yicha aniq kutishlar.",
  "brokerage.mockLane": "Namuna yo'nalish",
  "brokerage.packageOneTitle": "East Coast regional",
  "brokerage.packageOneCopy": "Northeast, Midwest o'tishlari va muntazam freight imkoniyatlari uchun street lane qamrovi.",
  "brokerage.packageTwoTitle": "Midwest qamrovi",
  "brokerage.packageTwoCopy": "Carrier hamkor mosligi, uchrashuvlar muloqoti va yuk holati yangilanishlari.",
  "brokerage.packageThreeTitle": "South / West lanes",
  "brokerage.packageThreeCopy": "Spot lanes, dedicated freight va hamkor freight ehtiyojlari uchun coverage planning.",
  "brokerage.standardsEye": "Brokerage standartlari",
  "brokerage.standardsTitle": "Maqsad oddiy: aniq freight muloqot va ishonchli coverage.",
  "brokerage.standardsCopy": "KMG brokerage yo'nalishi lanes aniqligi, hamkorlik mas'uliyati va operatsion intizom orqali freight harakatini qo'llab-quvvatlaydi.",
  "brokerage.stripOne": "Street lanes",
  "brokerage.stripTwo": "Broker munosabatlari",
  "brokerage.stripThree": "Shipper qo'llab-quvvatlash",
  "brokerage.ctaTitle": "Freight yoki lanes haqida gaplashamizmi?",
  "brokerage.ctaCopy": "KMG bilan bog'laning va kerakli brokerage munosabat turini ayting.",
  "brokerage.footerDesc": "Street lanes, freight relationships va coverage uchun brokerage support.",
  "consulting.eye": "KMG Consulting",
  "consulting.title": "Safety consulting, dispatch systems, fleet setup, carrier setup va audits.",
  "consulting.copy": "Consulting compliance, dispatch, fleet jarayonlari va setup bo'yicha sinab ko'rmasdan kuchliroq operations kerak bo'lgan carriers va jamoalar uchun.",
  "consulting.featureOneTitle": "Safety consulting",
  "consulting.featureOneCopy": "Safety jarayoni, inspection readiness, hujjatlar va operatsion standartlar bo'yicha qo'llab-quvvatlash.",
  "consulting.featureTwoTitle": "Dispatch tizimlari",
  "consulting.featureTwoCopy": "Dispatch workflow, muloqot tuzilmasi, haydovchi qo'llab-quvvatlashi va lane qarorlar intizomi.",
  "consulting.featureThreeTitle": "Fleet setup",
  "consulting.featureThreeCopy": "Carrier setup, fleet standartlari, jarayon tuzilmasi va o'sish uchun operatsion asos.",
  "consulting.readySafety": "Compliance va safety jarayoni bo'yicha consulting",
  "consulting.readyDispatch": "Workflow va muloqot sozlamasi",
  "consulting.readyFleet": "Fleet tizimlari va standartlari",
  "consulting.readyAudit": "Audit readiness va jarayon tahlili",
  "consulting.packageOneTitle": "Safety Readiness",
  "consulting.packageOneCopy": "Safety jarayonini ko'rib chiqish, inspection yondashuvi, hujjat nazorat ro'yxati va compliance workflow tavsiyanomasi.",
  "consulting.packageTwoTitle": "Dispatch Setup",
  "consulting.packageTwoCopy": "Dispatch muloqot tuzilmasi, haydovchi qo'llab-quvvatlash oqimi, lane eslatmalari, eskalatsiya qoidalari va holat ritmi.",
  "consulting.packageThreeTitle": "Carrier Audit",
  "consulting.packageThreeCopy": "Setup, fleet records, safety jarayoni, dispatch jarayoni va operatsion kamchiliklar bo'yicha namuna audit.",
  "consulting.ctaTitle": "Carrier operation uchun consulting kerakmi?",
  "consulting.ctaCopy": "KMG bilan bog'laning va yaxshilamoqchi bo'lgan yo'nalishingizni ayting.",
  "consulting.footerDesc": "Safety, dispatch, fleet setup, carrier setup va audits uchun consulting.",
  "news.eye": "KMG Yangiliklari",
  "news.title": "Haydovchilar va hamkorlar uchun yuk bozori yangiliklari.",
  "news.copy": "Safety, tariflar, yoqilg'i va ish intizomi bo'yicha qisqa amaliy yangiliklar.",
  "news.close": "Yopish",
  "news.cardOneCat": "Freight Market",
  "news.cardOneTitle": "Truckload capacity kutilgandan tezroq tightening qilmoqda",
  "news.cardTwoTitle": "International Roadcheck ELD va cargo securementga fokus qiladi",
  "news.cardThreeTitle": "Diesel va operatsion xarajatlar marshrut qarorlariga bosim qiladi",
  "news.cardFourTitle": "FMCSA ELD ro'yxatdan chiqarishi carriers uchun compliance riskni oshiradi",
  "news.cardFiveTitle": "Siyosat, yoqilg'i va geosiyosiy xatarlar freight planningni o'zgartirmoqda",
  "news.modalOneTitle": "Truckload bozori kutilgandan tezroq toraymoqda.",
  "news.modalOneCopy": "C.H. Robinson aprel 2026 yangiligida North American truckload bozori kutilgandan tezroq torayayotganini va 2026 yilgi truckload xarajatlari o'tgan yilga nisbatan yuqori bo'lishini ko'rsatadi. KMG uchun bu intizomli dispatch, lane planning va xizmat ishonchliligi qiymatini tasdiqlaydi.",
  "news.modalTwoTitle": "Roadcheck mavsumi ELD va yuk tayyorligini markazga olib chiqadi.",
  "news.modalTwoCopy": "CVSA International Roadcheckni 2026 yil 12-14 may kunlariga belgiladi, ELD buzilishi va cargo securementga e'tibor qaratiladi. Bu faol carriers uchun safety intizomi, hujjatlar va shop readinessni ayniqsa muhim qiladi.",
  "news.modalThreeTitle": "Yoqilg'i va operatsion xarajatlar rejalashtirishda asosiy bosim bo'lib qolmoqda.",
  "news.modalThreeCopy": "Crane Worldwide aprel 2026 bozor yangiligida AQSh quruqlik bozorlarida xarajatlar bosimi, yoqilg'i o'zgaruvchanligi va siyosat xatarlari kuchayayotganini ko'rsatadi. Carriers uchun marshrut intizomi va xarajatlar nazorati har hafta muhim.",
  "news.modalFourTitle": "FMCSA ELD ro'yxatdan chiqarishi tezda yo'l harakatini taqiqlash xavfiga aylanishi mumkin.",
  "news.modalFourCopy": "FMCSA HERO ELDni 2026 yil 2 aprelda ro'yxatdan olib tashladi. Bekor qilingan ELD ishlatayotgan carriers muddatgacha muvofiq qurilmaga o'tishi shart.",
  "news.modalFiveTitle": "Freight planning capacity, yoqilg'i va tartibga solish bosimi sababli o'zgarayapti.",
  "news.modalFiveCopy": "Aprel bozor hisobotlari tighter capacity, kuchaygan yoqilg'i yuklamasi va compliance bosimini ko'rsatadi. KMG operatsion modeli bu muhitga dispatch intizomi, safety tizimlari va amaliy xizmat qo'llab-quvvatlash bilan javob beradi.",
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
  const labelSpan = telegramLink.querySelector(".telegram-text") || telegramLink.querySelector("span");
  if (labelSpan) labelSpan.textContent = t("telegram.label");
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
    if (scrollTruck) {
      scrollTruck.style.left = `${percent}%`;
      scrollTruck.style.opacity = percent > 2 ? "1" : "0";
    }
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

// ─── Counter animation ────────────────────────────────────────────

const counterEls = document.querySelectorAll("[data-counter]");

const animateCounter = (el) => {
  if (prefersReducedMotion.matches) return;
  const target = parseInt(el.dataset.counter, 10);
  const from = parseInt(el.dataset.counterFrom || "0", 10);
  const suffix = el.dataset.counterSuffix || "";
  const duration = 1400;
  const startTime = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(from + (target - from) * eased) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};

if ("IntersectionObserver" in window && counterEls.length) {
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );
  counterEls.forEach((el) => counterObserver.observe(el));
}

// ─── Typewriter ───────────────────────────────────────────────────

const typewriterEl = document.querySelector("[data-typewriter]");

if (typewriterEl && !prefersReducedMotion.matches) {
  const phrases = [
    "300+ fleet network",
    "USPS & Amazon lanes",
    "$12k–$15k weekly gross",
    "24/7 dispatch support",
    "48 states coverage",
  ];
  let phraseIdx = 0;
  let charIdx = 0;
  let deleting = false;

  const tick = () => {
    const phrase = phrases[phraseIdx];
    if (deleting) {
      charIdx--;
      typewriterEl.textContent = phrase.slice(0, charIdx);
      if (charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        setTimeout(tick, 380);
        return;
      }
      setTimeout(tick, 38);
    } else {
      charIdx++;
      typewriterEl.textContent = phrase.slice(0, charIdx);
      if (charIdx === phrase.length) {
        deleting = true;
        setTimeout(tick, 2200);
        return;
      }
      setTimeout(tick, 58);
    }
  };
  setTimeout(tick, 900);
}

// ─── Route network animation ───────────────────────────────────────

const routeMapEl = document.querySelector("[data-route-map]");

if ("IntersectionObserver" in window && routeMapEl) {
  const routeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          routeMapEl.classList.add("is-visible");
          routeObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  routeObserver.observe(routeMapEl);
}

// ─── Page fade transitions ────────────────────────────────────────

const navigateFade = (href) => {
  document.body.classList.add("is-leaving");
  setTimeout(() => { window.location.href = href; }, 220);
};

document.addEventListener("click", (e) => {
  const link = e.target.closest("a[href]");
  if (!link || !link.href) return;
  if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
  if (link.target === "_blank") return;

  let url;
  try { url = new URL(link.href, location.origin); } catch { return; }

  if (url.origin !== location.origin) return;
  if (url.pathname === location.pathname && url.hash) return;
  if (link.href === location.href) return;

  e.preventDefault();
  navigateFade(link.href);
});
