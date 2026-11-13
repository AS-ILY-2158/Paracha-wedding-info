
/* =========================================================
   PARACHA WEDDING BY ASP
   Main JavaScript
   Timezone: Asia/Karachi
   ========================================================= */

"use strict";

/* =========================================================
   01. WEBSITE CONFIGURATION
   ========================================================= */

const WEDDING_CONFIG = {
  timezone: "Asia/Karachi",
  location: "Peshawar, Pakistan",

  events: {
    nikah: {
      date: "2027-03-06T00:00:00+05:00"
    },
    baraat: {
      date: "2027-04-03T00:00:00+05:00"
    },
    walima: {
      date: "2027-04-04T00:00:00+05:00"
    }
  },

  defaultLanguage: "en",
  supportedLanguages: ["en", "ur"]
};


/* =========================================================
   02. TRANSLATION DATA
   ========================================================= */

const TRANSLATIONS = {

  en: {
    "nav.home": "Home",
    "nav.introduction": "Introduction",
    "nav.families": "Families",
    "nav.events": "Events",
    "nav.quran": "Quran",
    "nav.hadith": "Hadith",
    "nav.message": "Message",

    "hero.eyebrow": "A Celebration of Togetherness",
    "hero.subtitle": "Two Families, One Beautiful Beginning",

    "introduction.title": "A New Chapter Begins",
    "introduction.label": "Introduction",

    "date.title": "Wedding Dates",
    "date.gregorian": "Gregorian Date",
    "date.hijri": "Hijri Date",
    "date.location": "Location",

    "families.title": "The Families",
    "families.label": "Our Families",
    "families.bride": "Bride's Family",
    "families.groom": "Groom's Family",

    "events.title": "Wedding Celebrations",
    "events.label": "The Celebrations",
    "events.nikah": "Nikah",
    "events.baraat": "Baraat",
    "events.walima": "Walima",

    "events.date": "Date",
    "events.time": "Time",
    "events.venue": "Venue",
    "events.coming": "Coming Soon",

    "countdown.title": "Countdown",
    "countdown.days": "Days",
    "countdown.hours": "Hours",
    "countdown.minutes": "Minutes",
    "countdown.seconds": "Seconds",
    "countdown.finished": "The day has arrived",

    "quran.title": "Guidance from the Quran",
    "quran.label": "The Holy Quran",

    "hadith.title": "Guidance from Hadith",
    "hadith.label": "Prophetic Teachings",

    "message.title": "A Message from the Family",
    "blessing.title": "With Prayers and Blessings",

    "footer.location": "Peshawar, Pakistan",
    "footer.rights": "All Rights Reserved",
    "footer.credit": "Designed with care by ASP"
  },

  ur: {
    "nav.home": "صفحۂ اول",
    "nav.introduction": "تعارف",
    "nav.families": "خاندان",
    "nav.events": "تقریبات",
    "nav.quran": "قرآن",
    "nav.hadith": "حدیث",
    "nav.message": "پیغام",

    "hero.eyebrow": "خوشیوں کے ایک نئے سفر کا آغاز",
    "hero.subtitle": "دو خاندان، ایک خوبصورت آغاز",

    "introduction.title": "ایک نئے باب کا آغاز",
    "introduction.label": "تعارف",

    "date.title": "شادی کی تاریخیں",
    "date.gregorian": "عیسوی تاریخ",
    "date.hijri": "ہجری تاریخ",
    "date.location": "مقام",

    "families.title": "دونوں خاندان",
    "families.label": "ہمارے خاندان",
    "families.bride": "دلہن کا خاندان",
    "families.groom": "دولہے کا خاندان",

    "events.title": "شادی کی تقریبات",
    "events.label": "تقریبات",
    "events.nikah": "نکاح",
    "events.baraat": "بارات",
    "events.walima": "ولیمہ",

    "events.date": "تاریخ",
    "events.time": "وقت",
    "events.venue": "مقام",
    "events.coming": "جلد بتایا جائے گا",

    "countdown.title": "باقی وقت",
    "countdown.days": "دن",
    "countdown.hours": "گھنٹے",
    "countdown.minutes": "منٹ",
    "countdown.seconds": "سیکنڈ",
    "countdown.finished": "تقریب کا دن آ پہنچا ہے",

    "quran.title": "قرآن مجید کی رہنمائی",
    "quran.label": "قرآن مجید",

    "hadith.title": "احادیث کی رہنمائی",
    "hadith.label": "تعلیماتِ نبوی ﷺ",

    "message.title": "خاندان کی جانب سے پیغام",
    "blessing.title": "دعاؤں اور نیک تمناؤں کے ساتھ",

    "footer.location": "پشاور، پاکستان",
    "footer.rights": "تمام حقوق محفوظ ہیں",
    "footer.credit": "ASP کی جانب سے ترتیب دیا گیا"
  }
};


/* =========================================================
   03. DOM HELPERS
   ========================================================= */

const $ = (selector, parent = document) =>
  parent.querySelector(selector);

const $$ = (selector, parent = document) =>
  [...parent.querySelectorAll(selector)];


/* =========================================================
   04. LANGUAGE SYSTEM
   ========================================================= */

function getInitialLanguage() {

  try {
    const savedLanguage = localStorage.getItem(
      "paracha-wedding-language"
    );

    if (
      WEDDING_CONFIG.supportedLanguages.includes(savedLanguage)
    ) {
      return savedLanguage;
    }
  } catch (error) {
    console.warn("Language preference unavailable.");
  }

  const browserLanguage =
    navigator.language?.toLowerCase() || "en";

  if (browserLanguage.startsWith("ur")) {
    return "ur";
  }

  return WEDDING_CONFIG.defaultLanguage;
}


let currentLanguage = getInitialLanguage();


function translatePage(language) {

  if (!WEDDING_CONFIG.supportedLanguages.includes(language)) {
    return;
  }

  currentLanguage = language;

  const dictionary = TRANSLATIONS[language];

  document.documentElement.lang = language;
  document.documentElement.dir =
    language === "ur" ? "rtl" : "ltr";

  $$("[data-i18n]").forEach(element => {

    const key = element.dataset.i18n;

    if (dictionary[key] !== undefined) {
      element.textContent = dictionary[key];
    }

  });

  $$("[data-i18n-placeholder]").forEach(element => {

    const key = element.dataset.i18nPlaceholder;

    if (dictionary[key] !== undefined) {
      element.placeholder = dictionary[key];
    }

  });

  $$("[data-i18n-title]").forEach(element => {

    const key = element.dataset.i18nTitle;

    if (dictionary[key] !== undefined) {
      element.title = dictionary[key];
    }

  });

  const languageButton = $("#language-toggle");

  if (languageButton) {

    languageButton.textContent =
      language === "ur" ? "English" : "اردو";

    languageButton.setAttribute(
      "aria-label",
      language === "ur"
        ? "Switch to English"
        : "اردو میں تبدیل کریں"
    );

  }

  // Family message language switching
  const englishMessage = $(
    "#message-english, .message-english"
  );

  const urduMessage = $(
    "#message-urdu, .message-urdu"
  );

  if (englishMessage) {
    englishMessage.hidden = language !== "en";
  }

  if (urduMessage) {
    urduMessage.hidden = language !== "ur";
  }

  // Rebuild countdown labels in selected language
  updateAllCountdowns();

  try {
    localStorage.setItem(
      "paracha-wedding-language",
      language
    );
  } catch (error) {
    console.warn("Language preference could not be saved.");
  }

}


function initializeLanguage() {

  translatePage(currentLanguage);

  const languageButton = $("#language-toggle");

  if (languageButton) {

    languageButton.addEventListener("click", () => {

      const nextLanguage =
        currentLanguage === "en" ? "ur" : "en";

      translatePage(nextLanguage);

    });

  }

}


/* =========================================================
   05. MOBILE NAVIGATION
   ========================================================= */

function initializeNavigation() {

  const menuButton = $("#menu-toggle");
  const navigation = $("#main-navigation");

  if (!menuButton || !navigation) return;

  function closeMenu() {

    navigation.classList.remove("open");

    menuButton.setAttribute("aria-expanded", "false");

  }

  menuButton.addEventListener("click", () => {

    const isOpen =
      navigation.classList.toggle("open");

    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

  });

  $$("a", navigation).forEach(link => {

    link.addEventListener("click", closeMenu);

  });

  document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
      closeMenu();
    }

  });

  document.addEventListener("click", event => {

    if (
      !navigation.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      closeMenu();
    }

  });

}


/* =========================================================
   06. STICKY HEADER
   ========================================================= */

function initializeHeader() {

  const header = $(".site-header");

  if (!header) return;

  function updateHeader() {

    header.classList.toggle(
      "scrolled",
      window.scrollY > 60
    );

  }

  window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
  );

  updateHeader();

}


/* =========================================================
   07. GREGORIAN DATE
   ========================================================= */

function getPakistanDate() {

  return new Date(
    new Date().toLocaleString("en-US", {
      timeZone: WEDDING_CONFIG.timezone
    })
  );

}


function updateGregorianDate() {

  const dateElement = $("#gregorian-date");

  if (!dateElement) return;

  const date = getPakistanDate();

  const formattedDate = new Intl.DateTimeFormat(
    currentLanguage === "ur" ? "ur-PK" : "en-PK",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: WEDDING_CONFIG.timezone
    }
  ).format(date);

  dateElement.textContent = formattedDate;

}


/* =========================================================
   08. HIJRI DATE
   ========================================================= */

function updateHijriDate() {

  const hijriElement = $("#hijri-date");

  if (!hijriElement) return;

  const date = new Date();

  try {

    const locale =
      currentLanguage === "ur" ? "ur-PK-u-ca-islamic" :
      "en-PK-u-ca-islamic";

    const formatter = new Intl.DateTimeFormat(
      locale,
      {
        day: "numeric",
        month: "long",
        year: "numeric",
        calendar: "islamic",
        timeZone: WEDDING_CONFIG.timezone
      }
    );

    hijriElement.textContent = formatter.format(date);

    hijriElement.title =
      currentLanguage === "ur"
        ? "یہ تاریخ تقویمی اندازہ ہے؛ سرکاری رؤیتِ ہلال سے فرق ممکن ہے۔"
        : "Calendar estimate; Pakistan's official moon-sighting announcement may differ.";

  } catch (error) {

    hijriElement.textContent =
      currentLanguage === "ur"
        ? "تاریخ دستیاب نہیں"
        : "Date unavailable";

  }

}


/* =========================================================
   09. COUNTDOWN SYSTEM
   ========================================================= */

function getCountdownLabels() {

  return currentLanguage === "ur"
    ? {
        days: "دن",
        hours: "گھنٹے",
        minutes: "منٹ",
        seconds: "سیکنڈ"
      }
    : {
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds"
      };

}


function createCountdownMarkup(days, hours, minutes, seconds) {

  const labels = getCountdownLabels();

  const values = [
    { value: days, label: labels.days },
    { value: hours, label: labels.hours },
    { value: minutes, label: labels.minutes },
    { value: seconds, label: labels.seconds }
  ];

  return values.map(item => `
    <div class="countdown-item">
      <span class="countdown-number">
        ${String(item.value).padStart(2, "0")}
      </span>
      <span class="countdown-label">
        ${item.label}
      </span>
    </div>
  `).join("");

}


function updateCountdown(element) {

  const targetDate = element.dataset.date;

  if (!targetDate) return;

  const target = new Date(targetDate).getTime();
  const now = Date.now();

  if (Number.isNaN(target)) {

    element.textContent =
      currentLanguage === "ur"
        ? "تاریخ دستیاب نہیں"
        : "Date unavailable";

    return;

  }

  const difference = target - now;

  if (difference <= 0) {

    element.textContent =
      currentLanguage === "ur"
        ? "تقریب کا دن آ پہنچا ہے"
        : "The day has arrived";

    return;

  }

  const secondsTotal = Math.floor(
    difference / 1000
  );

  const days = Math.floor(
    secondsTotal / 86400
  );

  const hours = Math.floor(
    (secondsTotal % 86400) / 3600
  );

  const minutes = Math.floor(
    (secondsTotal % 3600) / 60
  );

  const seconds = secondsTotal % 60;

  element.innerHTML = createCountdownMarkup(
    days,
    hours,
    minutes,
    seconds
  );

}


function updateAllCountdowns() {

  $$("[data-countdown]").forEach(element => {
    updateCountdown(element);
  });

}


function initializeCountdowns() {

  updateAllCountdowns();

  window.setInterval(
    updateAllCountdowns,
    1000
  );

}


/* =========================================================
   10. SCROLL REVEAL ANIMATIONS
   ========================================================= */

function initializeScrollReveal() {

  const elements = $$(".reveal");

  if (!elements.length) return;

  if (!("IntersectionObserver" in window)) {

    elements.forEach(element => {
      element.classList.add("visible");
    });

    return;

  }

  const observer = new IntersectionObserver(
    (entries, activeObserver) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          activeObserver.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -35px 0px"
    }
  );

  elements.forEach(element => {
    observer.observe(element);
  });

}


/* =========================================================
   11. ACTIVE NAVIGATION LINK
   ========================================================= */

function initializeActiveNavigation() {

  const sections = $$("main section[id]");
  const links = $$("#main-navigation a[href^='#']");

  if (!sections.length || !links.length) return;

  const observer = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        links.forEach(link => {

          const isActive =
            link.getAttribute("href") ===
            `#${entry.target.id}`;

          if (isActive) {
            link.setAttribute("aria-current", "location");
          } else {
            link.removeAttribute("aria-current");
          }

        });

      });

    },
    {
      rootMargin: "-35% 0px -55% 0px"
    }
  );

  sections.forEach(section => {
    observer.observe(section);
  });

}


/* =========================================================
   12. DATE REFRESH
   ========================================================= */

function initializeDateRefresh() {

  function refreshDates() {
    updateGregorianDate();
    updateHijriDate();
  }

  refreshDates();

  window.setInterval(
    refreshDates,
    60000
  );

}


/* =========================================================
   13. ACCESSIBILITY
   ========================================================= */

function initializeAccessibility() {

  const menuButton = $("#menu-toggle");

  if (menuButton) {

    menuButton.setAttribute(
      "aria-controls",
      "main-navigation"
    );

    menuButton.setAttribute(
      "aria-expanded",
      "false"
    );

  }

  const countdowns = $$("[data-countdown]");

  countdowns.forEach(element => {

    element.setAttribute("aria-live", "off");
    element.setAttribute("aria-label", "Event countdown");

  });

}


/* =========================================================
   14. INITIALIZE WEBSITE
   ========================================================= */

function initializeWeddingWebsite() {

  initializeLanguage();

  initializeNavigation();

  initializeHeader();

  initializeDateRefresh();

  initializeCountdowns();

  initializeScrollReveal();

  initializeActiveNavigation();

  initializeAccessibility();

  console.info(
    "Paracha Wedding Website initialized successfully."
  );

}


/* =========================================================
   15. START APPLICATION
   ========================================================= */

if (document.readyState === "loading") {

  document.addEventListener(
    "DOMContentLoaded",
    initializeWeddingWebsite
  );

} else {

  initializeWeddingWebsite();

}
