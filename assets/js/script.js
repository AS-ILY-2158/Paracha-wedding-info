
/* =========================================================
   PARACHA WEDDING WEBSITE
   JAVASCRIPT PART 1 OF 4
   Core Setup & Language System
========================================================= */

(() => {
  "use strict";

  /* =======================================================
     1. CENTRAL WEBSITE CONFIGURATION
  ======================================================= */

  const WeddingSite = window.WeddingSite || {};

  WeddingSite.config = {
    defaultLanguage: "en",

    supportedLanguages: ["en", "ur"],

    storageKey: "paracha-wedding-language",

    timezone: "Asia/Karachi",

    events: {
      nikah: {
        date: "2027-03-06"
      },

      baraat: {
        date: "2027-04-03"
      },

      walima: {
        date: "2027-04-04"
      }
    }
  };


  /* =======================================================
     2. WEBSITE STATE
  ======================================================= */

  WeddingSite.state = WeddingSite.state || {
    language: WeddingSite.config.defaultLanguage,

    isMenuOpen: false,

    countdownIntervals: [],

    revealObserver: null
  };


  /* =======================================================
     3. TRANSLATION DATABASE
  ======================================================= */

  WeddingSite.translations = {

    /* -------------------------------------------------------
       ENGLISH
    ------------------------------------------------------- */

    en: {

      "nav.introduction": "Introduction",
      "nav.events": "Events",
      "nav.blessings": "Blessings & Prayers",

      "common.backToTop": "Back to top",
      "common.openMenu": "Open navigation menu",
      "common.closeMenu": "Close navigation menu",

      "hero.eyebrow": "A Celebration of Love & Family",
      "hero.title": "A Beautiful Beginning",
      "hero.subtitle": "Two families, one celebration, and a lifetime of blessings.",
      "hero.introduction": "Two Families, One Celebration",

      "hero.explore": "Explore Our Celebration",
      "hero.viewEvents": "View Events",

      "family.heading": "The Families",
      "family.subtitle": "A union celebrated with the love and blessings of two families.",
      "family.bride": "Bride's Family",
      "family.groom": "Groom's Family",

      "events.eyebrow": "Save the Dates",
      "events.heading": "Wedding Celebrations",
      "events.subtitle": "Three special occasions, each marking a beautiful chapter in this journey.",

      "events.nikah": "Nikah",
      "events.baraat": "Baraat",
      "events.walima": "Walima",

      "events.nikahSubtitle": "The Sacred Union",
      "events.baraatSubtitle": "The Wedding Celebration",
      "events.walimaSubtitle": "A Celebration of Togetherness",

      "events.date": "Date",
      "events.time": "Time",
      "events.venue": "Venue",

      "events.comingSoon": "Coming Soon",
      "events.expectedDate": "Expected Islamic date",

      "countdown.title": "Countdown to the Celebration",
      "countdown.days": "Days",
      "countdown.hours": "Hours",
      "countdown.minutes": "Minutes",
      "countdown.seconds": "Seconds",
      "countdown.awaiting": "The celebration begins soon.",
      "countdown.dateReached": "The celebration date has arrived.",

      "blessings.eyebrow": "With Prayers & Gratitude",
      "blessings.heading": "Blessings & Prayers",
      "blessings.familyMessage": "A Message from Our Families",

      "quran.heading": "Words from the Holy Quran",
      "quran.subtitle": "Verses of guidance, love, mercy, and blessings.",
      "quran.reference": "Quran Reference",
      "quran.openVerse": "Open Verse",

      "hadith.heading": "Sayings of the Prophet ﷺ",
      "hadith.subtitle": "Guidance and wisdom from the Sunnah.",
      "hadith.reference": "Hadith Reference",
      "hadith.openHadith": "Open Hadith",

      "dua.heading": "A Special Prayer",
      "dua.subtitle": "May Allah bless this union.",

      "footer.description": "A celebration of love, family, and blessings.",
      "footer.madeWith": "With love and prayers",
      "footer.copyright": "All rights reserved."
    },


    /* -------------------------------------------------------
       URDU
    ------------------------------------------------------- */

    ur: {

      "nav.introduction": "تعارف",
      "nav.events": "تقریبات",
      "nav.blessings": "دعائیں اور برکتیں",

      "common.backToTop": "اوپر جائیں",
      "common.openMenu": "نیویگیشن مینو کھولیں",
      "common.closeMenu": "نیویگیشن مینو بند کریں",

      "hero.eyebrow": "محبت اور خاندان کا جشن",
      "hero.title": "ایک خوبصورت آغاز",
      "hero.subtitle": "دو خاندان، ایک خوشی اور برکتوں سے بھرا ایک نیا سفر۔",
      "hero.introduction": "دو خاندان، ایک جشن",

      "hero.explore": "تقریبات دیکھیں",
      "hero.viewEvents": "تقریبات کی تفصیل",

      "family.heading": "دونوں خاندان",
      "family.subtitle": "دو خاندانوں کی محبت اور دعاؤں کے ساتھ ایک خوبصورت رشتہ۔",
      "family.bride": "دلہن کا خاندان",
      "family.groom": "دولہا کا خاندان",

      "events.eyebrow": "تاریخیں محفوظ رکھیں",
      "events.heading": "شادی کی تقریبات",
      "events.subtitle": "تین خصوصی تقریبات، جو اس خوبصورت سفر کے اہم مراحل ہیں۔",

      "events.nikah": "نکاح",
      "events.baraat": "بارات",
      "events.walima": "ولیمہ",

      "events.nikahSubtitle": "مبارک اور مقدس رشتہ",
      "events.baraatSubtitle": "شادی کی خوشی",
      "events.walimaSubtitle": "خوشیوں کی دعوت",

      "events.date": "تاریخ",
      "events.time": "وقت",
      "events.venue": "مقام",

      "events.comingSoon": "تفصیلات جلد بتائی جائیں گی",
      "events.expectedDate": "متوقع اسلامی تاریخ",

      "countdown.title": "تقریب شروع ہونے میں باقی وقت",
      "countdown.days": "دن",
      "countdown.hours": "گھنٹے",
      "countdown.minutes": "منٹ",
      "countdown.seconds": "سیکنڈ",
      "countdown.awaiting": "تقریب کا وقت قریب آ رہا ہے۔",
      "countdown.dateReached": "تقریب کی تاریخ آ گئی ہے۔",

      "blessings.eyebrow": "دعاؤں اور شکرگزاری کے ساتھ",
      "blessings.heading": "دعائیں اور برکتیں",
      "blessings.familyMessage": "خاندانوں کی جانب سے پیغام",

      "quran.heading": "قرآنِ کریم کی آیات",
      "quran.subtitle": "ہدایت، محبت، رحمت اور برکتوں سے متعلق آیات۔",
      "quran.reference": "قرآنی حوالہ",
      "quran.openVerse": "آیت کھولیں",

      "hadith.heading": "رسول اللہ ﷺ کے ارشادات",
      "hadith.subtitle": "سنتِ نبوی ﷺ سے رہنمائی اور حکمت۔",
      "hadith.reference": "حدیث کا حوالہ",
      "hadith.openHadith": "حدیث کھولیں",

      "dua.heading": "خصوصی دعا",
      "dua.subtitle": "اللہ تعالیٰ اس رشتے کو برکت عطا فرمائے۔",

      "footer.description": "محبت، خاندان اور برکتوں کا ایک خوبصورت جشن۔",
      "footer.madeWith": "محبت اور دعاؤں کے ساتھ",
      "footer.copyright": "جملہ حقوق محفوظ ہیں۔"
    }

  };


  /* =======================================================
     4. SAFE LOCAL STORAGE ACCESS
  ======================================================= */

  function readSavedLanguage() {
    try {
      const savedLanguage = localStorage.getItem(
        WeddingSite.config.storageKey
      );

      if (
        WeddingSite.config.supportedLanguages.includes(savedLanguage)
      ) {
        return savedLanguage;
      }

    } catch (error) {
      console.warn(
        "Language preference could not be read.",
        error
      );
    }

    return WeddingSite.config.defaultLanguage;
  }


  function saveLanguage(language) {
    try {
      localStorage.setItem(
        WeddingSite.config.storageKey,
        language
      );

    } catch (error) {
      console.warn(
        "Language preference could not be saved.",
        error
      );
    }
  }


  /* =======================================================
     5. TRANSLATION LOOKUP
  ======================================================= */

  function getTranslation(key, language) {
    const selectedLanguage =
      language || WeddingSite.state.language;

    const selectedDictionary =
      WeddingSite.translations[selectedLanguage] || {};

    const englishDictionary =
      WeddingSite.translations.en || {};

    return (
      selectedDictionary[key] ||
      englishDictionary[key] ||
      key
    );
  }


  /* =======================================================
     6. APPLY TEXT TRANSLATIONS
  ======================================================= */

  function applyTextTranslations(language) {
    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach((element) => {
      const key = element.getAttribute("data-i18n");

      if (!key) return;

      const translatedText = getTranslation(key, language);

      element.textContent = translatedText;
    });
  }


  /* =======================================================
     7. APPLY ACCESSIBILITY TRANSLATIONS
  ======================================================= */

  function applyAccessibilityTranslations(language) {

    const elements = document.querySelectorAll(
      "[data-i18n-aria-label]"
    );

    elements.forEach((element) => {
      const key = element.getAttribute(
        "data-i18n-aria-label"
      );

      if (!key) return;

      element.setAttribute(
        "aria-label",
        getTranslation(key, language)
      );
    });
  }


  /* =======================================================
     8. UPDATE LANGUAGE BUTTONS
  ======================================================= */

  function updateLanguageButtons(language) {

    const buttons = document.querySelectorAll(
      "[data-language]"
    );

    buttons.forEach((button) => {

      const buttonLanguage = button.getAttribute(
        "data-language"
      );

      const isActive = buttonLanguage === language;

      button.classList.toggle("is-active", isActive);

      button.setAttribute(
        "aria-pressed",
        String(isActive)
      );

    });
  }


  /* =======================================================
     9. SET DOCUMENT LANGUAGE & DIRECTION
  ======================================================= */

  function updateDocumentLanguage(language) {

    const root = document.documentElement;

    root.lang = language;

    root.dir = language === "ur" ? "rtl" : "ltr";

    document.body.classList.toggle(
      "language-urdu",
      language === "ur"
    );

    document.body.classList.toggle(
      "language-english",
      language === "en"
    );
  }


  /* =======================================================
     10. MAIN LANGUAGE FUNCTION
  ======================================================= */

  function setLanguage(language, options = {}) {

    if (
      !WeddingSite.config.supportedLanguages.includes(language)
    ) {
      console.warn("Unsupported language:", language);
      return false;
    }

    WeddingSite.state.language = language;

    updateDocumentLanguage(language);

    applyTextTranslations(language);

    applyAccessibilityTranslations(language);

    updateLanguageButtons(language);

    if (options.save !== false) {
      saveLanguage(language);
    }

    document.dispatchEvent(
      new CustomEvent("wedding:languageChanged", {
        detail: {
          language: language,
          direction: language === "ur" ? "rtl" : "ltr"
        }
      })
    );

    return true;
  }


  /* =======================================================
     11. LANGUAGE BUTTON EVENTS
  ======================================================= */

  function initializeLanguageButtons() {

    const buttons = document.querySelectorAll(
      "[data-language]"
    );

    buttons.forEach((button) => {

      button.addEventListener("click", () => {

        const language = button.getAttribute(
          "data-language"
        );

        setLanguage(language);

      });

    });

  }


  /* =======================================================
     12. INITIALIZE LANGUAGE SYSTEM
  ======================================================= */

  function initializeLanguageSystem() {

    const savedLanguage = readSavedLanguage();

    setLanguage(savedLanguage, {
      save: false
    });

    initializeLanguageButtons();

  }


  /* =======================================================
     13. PUBLIC LANGUAGE METHODS
  ======================================================= */

  WeddingSite.setLanguage = setLanguage;

  WeddingSite.getTranslation = getTranslation;

  WeddingSite.applyTranslations = function () {
    applyTextTranslations(WeddingSite.state.language);

    applyAccessibilityTranslations(
      WeddingSite.state.language
    );
  };


  /* =======================================================
     14. INITIALIZATION
  ======================================================= */

  function initializePartOne() {
    initializeLanguageSystem();
  }

  if (document.readyState === "loading") {

    document.addEventListener(
      "DOMContentLoaded",
      initializePartOne,
      { once: true }
    );

  } else {

    initializePartOne();

  }


  /* =======================================================
     15. EXPOSE WEBSITE SYSTEM
  ======================================================= */

  window.WeddingSite = WeddingSite;


  /* =======================================================
     END OF JAVASCRIPT PART 1
     Next: Mobile Navigation & Countdown
  ======================================================= */

})();

/* =========================================================
   PARACHA WEDDING WEBSITE
   JAVASCRIPT PART 2 OF 4
   Mobile Navigation & Live Countdown
========================================================= */

(() => {
  "use strict";

  const WeddingSite = window.WeddingSite;

  if (!WeddingSite) {
    console.error(
      "WeddingSite core is not initialized. Check JavaScript Part 1."
    );
    return;
  }


  /* =======================================================
     1. MOBILE NAVIGATION ELEMENTS
  ======================================================= */

  const menuToggle = document.getElementById(
    "mobile-menu-toggle"
  );

  const navigation = document.getElementById(
    "main-navigation"
  );


  /* =======================================================
     2. MENU ACCESSIBILITY
  ======================================================= */

  function updateMenuAccessibility(isOpen) {

    if (!menuToggle || !navigation) return;

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menuToggle.setAttribute(
      "aria-label",
      WeddingSite.getTranslation(
        isOpen
          ? "common.closeMenu"
          : "common.openMenu"
      )
    );

    navigation.setAttribute(
      "aria-hidden",
      String(!isOpen)
    );

  }


  /* =======================================================
     3. OPEN MOBILE MENU
  ======================================================= */

  function openMobileMenu() {

    if (!menuToggle || !navigation) return;

    navigation.classList.add("is-open");

    menuToggle.classList.add("is-active");

    document.body.classList.add("menu-open");

    WeddingSite.state.isMenuOpen = true;

    updateMenuAccessibility(true);

  }


  /* =======================================================
     4. CLOSE MOBILE MENU
  ======================================================= */

  function closeMobileMenu() {

    if (!menuToggle || !navigation) return;

    navigation.classList.remove("is-open");

    menuToggle.classList.remove("is-active");

    document.body.classList.remove("menu-open");

    WeddingSite.state.isMenuOpen = false;

    updateMenuAccessibility(false);

  }


  /* =======================================================
     5. TOGGLE MOBILE MENU
  ======================================================= */

  function toggleMobileMenu() {

    if (WeddingSite.state.isMenuOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }

  }


  /* =======================================================
     6. MOBILE MENU EVENT LISTENERS
  ======================================================= */

  function initializeMobileNavigation() {

    if (!menuToggle || !navigation) {
      console.warn(
        "Mobile navigation elements were not found."
      );
      return;
    }

    menuToggle.setAttribute(
      "aria-controls",
      "main-navigation"
    );

    menuToggle.setAttribute(
      "aria-haspopup",
      "true"
    );

    menuToggle.addEventListener(
      "click",
      toggleMobileMenu
    );


    /* Close after clicking a navigation link */

    const navigationLinks = navigation.querySelectorAll(
      "a"
    );

    navigationLinks.forEach((link) => {

      link.addEventListener("click", () => {
        closeMobileMenu();
      });

    });


    /* Close when pressing Escape */

    document.addEventListener("keydown", (event) => {

      if (
        event.key === "Escape" &&
        WeddingSite.state.isMenuOpen
      ) {
        closeMobileMenu();

        menuToggle.focus();
      }

    });


    /* Close when clicking outside the menu */

    document.addEventListener("click", (event) => {

      if (!WeddingSite.state.isMenuOpen) return;

      const clickedInsideMenu =
        navigation.contains(event.target);

      const clickedToggle =
        menuToggle.contains(event.target);

      if (!clickedInsideMenu && !clickedToggle) {
        closeMobileMenu();
      }

    });


    /* Close when returning to desktop layout */

    window.addEventListener("resize", () => {

      if (window.innerWidth > 900) {
        closeMobileMenu();
      }

    });


    /* Initial accessibility state */

    closeMobileMenu();

  }


  /* =======================================================
     7. COUNTDOWN CONFIGURATION
  ======================================================= */

  const COUNTDOWN_INTERVAL = 1000;

  const PAKISTAN_TIME_OFFSET = "+05:00";


  /* =======================================================
     8. CREATE EVENT TARGET DATE
  ======================================================= */

  function getEventTargetDate(dateString) {

    if (
      typeof dateString !== "string" ||
      !/^\d{4}-\d{2}-\d{2}$/.test(dateString)
    ) {
      return null;
    }

    /*
      Event date is interpreted as midnight in Pakistan.

      Example:
      2027-03-06T00:00:00+05:00
    */

    const targetDate = new Date(
      `${dateString}T00:00:00${PAKISTAN_TIME_OFFSET}`
    );

    if (Number.isNaN(targetDate.getTime())) {
      return null;
    }

    /*
      Validate that JavaScript did not normalize
      an invalid calendar date.
    */

    const actualDate = [
      targetDate.getFullYear(),
      String(targetDate.getMonth() + 1).padStart(2, "0"),
      String(targetDate.getDate()).padStart(2, "0")
    ].join("-");

    if (actualDate !== dateString) {
      return null;
    }

    return targetDate;

  }


  /* =======================================================
     9. FORMAT COUNTDOWN NUMBERS
  ======================================================= */

  function formatCountdownNumber(value) {

    return String(Math.max(0, value)).padStart(2, "0");

  }


  /* =======================================================
     10. UPDATE ONE COUNTDOWN
  ======================================================= */

  function updateCountdown(countdownElement) {

    if (!countdownElement) return;

    const dateString =
      countdownElement.getAttribute(
        "data-countdown-date"
      );

    const targetDate = getEventTargetDate(dateString);

    const statusElement =
      countdownElement.querySelector(
        "[data-countdown-status]"
      );

    if (!targetDate) {

      if (statusElement) {
        statusElement.textContent =
          WeddingSite.state.language === "ur"
            ? "تاریخ دستیاب نہیں"
            : "Date unavailable";
      }

      return;

    }


    const now = Date.now();

    const remainingMilliseconds =
      targetDate.getTime() - now;


    /* -------------------------------------------------------
       Event date has arrived
    ------------------------------------------------------- */

    if (remainingMilliseconds <= 0) {

      updateCountdownValues(countdownElement, {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      });

      if (statusElement) {
        statusElement.textContent =
          WeddingSite.getTranslation(
            "countdown.dateReached"
          );
      }

      countdownElement.setAttribute(
        "data-countdown-state",
        "reached"
      );

      return;

    }


    /* -------------------------------------------------------
       Calculate remaining time
    ------------------------------------------------------- */

    const totalSeconds = Math.floor(
      remainingMilliseconds / 1000
    );

    const days = Math.floor(
      totalSeconds / 86400
    );

    const hours = Math.floor(
      (totalSeconds % 86400) / 3600
    );

    const minutes = Math.floor(
      (totalSeconds % 3600) / 60
    );

    const seconds = totalSeconds % 60;


    updateCountdownValues(countdownElement, {
      days,
      hours,
      minutes,
      seconds
    });


    if (statusElement) {
      statusElement.textContent =
        WeddingSite.getTranslation(
          "countdown.awaiting"
        );
    }

    countdownElement.setAttribute(
      "data-countdown-state",
      "active"
    );

  }


  /* =======================================================
     11. UPDATE COUNTDOWN VALUES
  ======================================================= */

  function updateCountdownValues(
    countdownElement,
    values
  ) {

    Object.entries(values).forEach(
      ([unit, value]) => {

        const valueElement =
          countdownElement.querySelector(
            `[data-countdown-value="${unit}"]`
          );

        if (!valueElement) return;

        const formattedValue =
          formatCountdownNumber(value);

        if (
          valueElement.textContent !== formattedValue
        ) {
          valueElement.textContent = formattedValue;
        }

      }
    );

  }


  /* =======================================================
     12. INITIALIZE ALL COUNTDOWNS
  ======================================================= */

  function initializeCountdowns() {

    const countdownElements =
      document.querySelectorAll("[data-countdown]");

    if (!countdownElements.length) {
      console.warn(
        "No countdown elements were found."
      );
      return;
    }


    /* Clear previous intervals if initialized again */

    WeddingSite.state.countdownIntervals.forEach(
      (intervalId) => {
        clearInterval(intervalId);
      }
    );

    WeddingSite.state.countdownIntervals = [];


    countdownElements.forEach((countdownElement) => {

      /* Show correct values immediately */

      updateCountdown(countdownElement);


      /* Update every second */

      const intervalId = setInterval(() => {

        updateCountdown(countdownElement);

      }, COUNTDOWN_INTERVAL);


      WeddingSite.state.countdownIntervals.push(
        intervalId
      );

    });

  }


  /* =======================================================
     13. PUBLIC METHODS
  ======================================================= */

  WeddingSite.navigation = {
    open: openMobileMenu,
    close: closeMobileMenu,
    toggle: toggleMobileMenu
  };


  WeddingSite.countdown = {
    initialize: initializeCountdowns,
    update: updateCountdown
  };


  /* =======================================================
     14. LANGUAGE CHANGE SUPPORT
  ======================================================= */

  document.addEventListener(
    "wedding:languageChanged",
    () => {

      /*
        Refresh translated menu accessibility labels
        and countdown status messages.
      */

      updateMenuAccessibility(
        WeddingSite.state.isMenuOpen
      );

      document.querySelectorAll(
        "[data-countdown]"
      ).forEach((countdownElement) => {

        updateCountdown(countdownElement);

      });

    }
  );


  /* =======================================================
     15. INITIALIZATION
  ======================================================= */

  function initializePartTwo() {

    initializeMobileNavigation();

    initializeCountdowns();

  }


  if (document.readyState === "loading") {

    document.addEventListener(
      "DOMContentLoaded",
      initializePartTwo,
      { once: true }
    );

  } else {

    initializePartTwo();

  }


  /* =======================================================
     END OF JAVASCRIPT PART 2
     Next: Scroll Animations & Back to Top
  ======================================================= */

})();

/* =========================================================
   PARACHA WEDDING WEBSITE
   JAVASCRIPT PART 3 OF 4
   Scroll Reveal, Back to Top & Scroll Effects
========================================================= */

(() => {
  "use strict";

  const WeddingSite = window.WeddingSite;

  if (!WeddingSite) {
    console.error(
      "WeddingSite core is not initialized. Check JavaScript Part 1."
    );
    return;
  }


  /* =======================================================
     1. ELEMENT REFERENCES
  ======================================================= */

  const backToTopButton = document.getElementById(
    "back-to-top"
  );

  const siteHeader = document.getElementById(
    "site-header"
  );


  /* =======================================================
     2. REDUCED MOTION PREFERENCE
  ======================================================= */

  const reducedMotionQuery = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  function prefersReducedMotion() {
    return reducedMotionQuery.matches;
  }


  /* =======================================================
     3. SCROLL REVEAL SELECTORS
  ======================================================= */

  const revealSelectors = [
    ".section-heading",
    ".hero-content",
    ".family-card",
    ".event-card",
    ".verse-card",
    ".hadith-card",
    ".family-blessing-card",
    ".dua-card",
    ".blessings-closing",
    ".footer-main"
  ];


  /* =======================================================
     4. COLLECT REVEAL ELEMENTS
  ======================================================= */

  function getRevealElements() {

    const selector = revealSelectors.join(",");

    return Array.from(
      document.querySelectorAll(selector)
    );

  }


  /* =======================================================
     5. ASSIGN REVEAL CLASSES
  ======================================================= */

  function prepareRevealElements(elements) {

    elements.forEach((element, index) => {

      if (element.classList.contains("is-visible")) {
        return;
      }

      if (element.classList.contains("reveal")) {
        return;
      }

      if (
        element.classList.contains("reveal-up") ||
        element.classList.contains("reveal-left") ||
        element.classList.contains("reveal-right") ||
        element.classList.contains("reveal-scale")
      ) {
        return;
      }

      element.classList.add("reveal-up");

      /*
        Add small stagger delays to groups of cards.
      */

      const parent = element.parentElement;

      if (!parent) return;

      const siblings = Array.from(parent.children);

      const siblingIndex = siblings.indexOf(element);

      if (siblingIndex >= 0) {

        const delayClass =
          `reveal-delay-${(siblingIndex % 5) + 1}`;

        element.classList.add(delayClass);

      }

    });

  }


  /* =======================================================
     6. REVEAL ELEMENT IMMEDIATELY
  ======================================================= */

  function revealImmediately(element) {

    element.classList.add("is-visible");

    if (WeddingSite.state.revealObserver) {
      WeddingSite.state.revealObserver.unobserve(element);
    }

  }


  /* =======================================================
     7. INTERSECTION OBSERVER
  ======================================================= */

  function initializeRevealObserver() {

    const elements = getRevealElements();

    if (!elements.length) return;

    /*
      Without IntersectionObserver, keep all content visible.
    */

    if (!("IntersectionObserver" in window)) {

      elements.forEach((element) => {
        element.classList.add("is-visible");
      });

      return;

    }


    /*
      Reduced motion means no scroll animations.
    */

    if (prefersReducedMotion()) {

      elements.forEach((element) => {
        element.classList.add("is-visible");
      });

      return;

    }


    prepareRevealElements(elements);


    const observer = new IntersectionObserver(
      (entries, currentObserver) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");

          currentObserver.unobserve(entry.target);

        });

      },
      {
        root: null,

        rootMargin: "0px 0px -55px 0px",

        threshold: 0.08
      }
    );


    WeddingSite.state.revealObserver = observer;


    /*
      Only activate hidden reveal styles after
      observer initialization has succeeded.
    */

    document.body.classList.add("reveal-ready");


    elements.forEach((element) => {

      /*
        Elements already inside the visible viewport
        will be observed and revealed normally.
      */

      observer.observe(element);

    });

  }


  /* =======================================================
     8. REVEAL FALLBACK FOR DYNAMIC CONTENT
  ======================================================= */

  function refreshRevealElements() {

    const observer = WeddingSite.state.revealObserver;

    if (!observer) return;

    const elements = getRevealElements();

    elements.forEach((element) => {

      if (element.classList.contains("is-visible")) {
        return;
      }

      if (
        element.classList.contains("reveal") ||
        element.classList.contains("reveal-up") ||
        element.classList.contains("reveal-left") ||
        element.classList.contains("reveal-right") ||
        element.classList.contains("reveal-scale")
      ) {
        observer.observe(element);
      }

    });

  }


  /* =======================================================
     9. BACK TO TOP VISIBILITY
  ======================================================= */

  function updateBackToTopVisibility() {

    if (!backToTopButton) return;

    const scrollPosition =
      window.scrollY ||
      document.documentElement.scrollTop ||
      0;

    const shouldShow = scrollPosition > 450;

    backToTopButton.classList.toggle(
      "is-visible",
      shouldShow
    );

    backToTopButton.setAttribute(
      "aria-hidden",
      String(!shouldShow)
    );

    backToTopButton.tabIndex = shouldShow ? 0 : -1;

  }


  /* =======================================================
     10. HEADER SCROLL STATE
  ======================================================= */

  function updateHeaderScrollState() {

    if (!siteHeader) return;

    const scrollPosition =
      window.scrollY ||
      document.documentElement.scrollTop ||
      0;

    siteHeader.classList.toggle(
      "is-scrolled",
      scrollPosition > 35
    );

  }


  /* =======================================================
     11. CENTRAL SCROLL UPDATE
  ======================================================= */

  let scrollUpdateScheduled = false;

  function handleScroll() {

    if (scrollUpdateScheduled) return;

    scrollUpdateScheduled = true;

    window.requestAnimationFrame(() => {

      updateBackToTopVisibility();

      updateHeaderScrollState();

      scrollUpdateScheduled = false;

    });

  }


  /* =======================================================
     12. BACK TO TOP ACTION
  ======================================================= */

  function scrollToTop() {

    const behavior = prefersReducedMotion()
      ? "auto"
      : "smooth";

    window.scrollTo({
      top: 0,
      behavior: behavior
    });

  }


  /* =======================================================
     13. INITIALIZE BACK TO TOP
  ======================================================= */

  function initializeBackToTop() {

    if (!backToTopButton) {
      console.warn(
        "Back to top button was not found."
      );
      return;
    }

    backToTopButton.addEventListener(
      "click",
      scrollToTop
    );

    updateBackToTopVisibility();

  }


  /* =======================================================
     14. INITIALIZE SCROLL LISTENERS
  ======================================================= */

  function initializeScrollListeners() {

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      handleScroll,
      { passive: true }
    );

    updateHeaderScrollState();

  }


  /* =======================================================
     15. HANDLE MOTION PREFERENCE CHANGES
  ======================================================= */

  function handleMotionPreferenceChange() {

    if (prefersReducedMotion()) {

      document.body.classList.remove("reveal-ready");

      const elements = getRevealElements();

      elements.forEach((element) => {

        element.classList.add("is-visible");

      });

      if (WeddingSite.state.revealObserver) {

        WeddingSite.state.revealObserver.disconnect();

        WeddingSite.state.revealObserver = null;

      }

    } else {

      /*
        Reinitialize animations if the user
        changes the preference while the page is open.
      */

      document.body.classList.remove("reveal-ready");

      const elements = getRevealElements();

      elements.forEach((element) => {
        element.classList.remove("is-visible");
      });

      initializeRevealObserver();

    }

  }


  /* =======================================================
     16. INITIALIZE MOTION PREFERENCE LISTENER
  ======================================================= */

  function initializeMotionPreferenceListener() {

    if (typeof reducedMotionQuery.addEventListener === "function") {

      reducedMotionQuery.addEventListener(
        "change",
        handleMotionPreferenceChange
      );

    } else if (
      typeof reducedMotionQuery.addListener === "function"
    ) {

      reducedMotionQuery.addListener(
        handleMotionPreferenceChange
      );

    }

  }


  /* =======================================================
     17. PUBLIC METHODS
  ======================================================= */

  WeddingSite.scroll = {
    toTop: scrollToTop,

    refreshReveal: refreshRevealElements,

    update: handleScroll
  };


  /* =======================================================
     18. INITIALIZATION
  ======================================================= */

  function initializePartThree() {

    initializeRevealObserver();

    initializeBackToTop();

    initializeScrollListeners();

    initializeMotionPreferenceListener();

  }


  if (document.readyState === "loading") {

    document.addEventListener(
      "DOMContentLoaded",
      initializePartThree,
      { once: true }
    );

  } else {

    initializePartThree();

  }


  /* =======================================================
     END OF JAVASCRIPT PART 3
     Next: Final Integration & Initialization
  ======================================================= */

})();

/* =========================================================
   PARACHA WEDDING WEBSITE
   JAVASCRIPT PART 4 OF 4
   Final Integration, Accessibility & Quality Checks
========================================================= */

(() => {
  "use strict";

  const WeddingSite = window.WeddingSite;

  if (!WeddingSite) {
    console.error(
      "WeddingSite core is missing. Check JavaScript Part 1."
    );
    return;
  }


  /* =======================================================
     1. ELEMENT REFERENCES
  ======================================================= */

  const navigation = document.getElementById(
    "main-navigation"
  );

  const menuToggle = document.getElementById(
    "mobile-menu-toggle"
  );

  const pageSections = Array.from(
    document.querySelectorAll(".page-section")
  );

  const pageLinks = Array.from(
    document.querySelectorAll("[data-page-link]")
  );


  /* =======================================================
     2. ACCESSIBILITY FIX FOR DESKTOP NAVIGATION
  ======================================================= */

  function synchronizeNavigationAccessibility() {

    if (!navigation) return;

    const isDesktop = window.innerWidth > 900;

    if (isDesktop) {

      /*
        Desktop navigation is always accessible.
      */

      navigation.removeAttribute("aria-hidden");

      navigation.removeAttribute("inert");

    } else {

      /*
        On mobile, hide the closed navigation
        from assistive technology.
      */

      const menuIsOpen =
        menuToggle?.getAttribute("aria-expanded") === "true";

      navigation.setAttribute(
        "aria-hidden",
        String(!menuIsOpen)
      );

      if (menuIsOpen) {
        navigation.removeAttribute("inert");
      } else {
        navigation.setAttribute("inert", "");
      }

    }

  }


  /* =======================================================
     3. NAVIGATION RESIZE HANDLER
  ======================================================= */

  let resizeTimer = null;

  function handleNavigationResize() {

    if (resizeTimer !== null) {
      window.clearTimeout(resizeTimer);
    }

    resizeTimer = window.setTimeout(() => {

      synchronizeNavigationAccessibility();

      resizeTimer = null;

    }, 120);

  }


  /* =======================================================
     4. ACTIVE PAGE NAVIGATION
  ======================================================= */

  function setActivePageLink(sectionId) {

    pageLinks.forEach((link) => {

      const isActive =
        link.getAttribute("data-page-link") === sectionId;

      link.classList.toggle(
        "is-current-page",
        isActive
      );

      if (isActive) {

        link.setAttribute(
          "aria-current",
          "location"
        );

      } else {

        link.removeAttribute("aria-current");

      }

    });

  }


  /* =======================================================
     5. SECTION VISIBILITY OBSERVER
  ======================================================= */

  function initializeActiveSectionObserver() {

    if (!pageSections.length) return;

    if (!("IntersectionObserver" in window)) {
      return;
    }

    const sectionObserver = new IntersectionObserver(
      (entries) => {

        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => {
            return b.intersectionRatio - a.intersectionRatio;
          });

        if (!visibleSections.length) return;

        const activeSection =
          visibleSections[0].target;

        if (activeSection.id) {
          setActivePageLink(activeSection.id);
        }

      },
      {
        root: null,

        rootMargin: "-25% 0px -55% 0px",

        threshold: [0, 0.15, 0.3, 0.5, 0.75]
      }
    );

    pageSections.forEach((section) => {
      sectionObserver.observe(section);
    });

    WeddingSite.state.activeSectionObserver =
      sectionObserver;

  }


  /* =======================================================
     6. NAVIGATION LINK ACCESSIBILITY
  ======================================================= */

  function initializeNavigationLinks() {

    pageLinks.forEach((link) => {

      const targetId = link.getAttribute(
        "data-page-link"
      );

      if (!targetId) return;

      const targetSection = document.getElementById(
        targetId
      );

      if (!targetSection) {
        console.warn(
          `Navigation target not found: ${targetId}`
        );
      }

    });

  }


  /* =======================================================
     7. LANGUAGE CHANGE INTEGRATION
  ======================================================= */

  function handleLanguageChange() {

    /*
      Synchronize navigation accessibility
      after language or layout changes.
    */

    synchronizeNavigationAccessibility();

    /*
      Refresh scroll-dependent UI.
    */

    if (
      WeddingSite.scroll &&
      typeof WeddingSite.scroll.update === "function"
    ) {

      WeddingSite.scroll.update();

    }

    /*
      Refresh reveal observation if available.
    */

    if (
      WeddingSite.scroll &&
      typeof WeddingSite.scroll.refreshReveal === "function"
    ) {

      WeddingSite.scroll.refreshReveal();

    }

  }


  /* =======================================================
     8. CHECK REQUIRED PAGE STRUCTURE
  ======================================================= */

  function runStructureChecks() {

    const requiredElements = [
      "site-header",
      "main-content",
      "introduction",
      "events",
      "blessings",
      "back-to-top",
      "live-announcer"
    ];

    const missingElements = [];

    requiredElements.forEach((id) => {

      if (!document.getElementById(id)) {
        missingElements.push(id);
      }

    });

    if (missingElements.length) {

      console.warn(
        "Some expected website elements are missing:",
        missingElements.join(", ")
      );

    }

    return missingElements.length === 0;

  }


  /* =======================================================
     9. CHECK EVENT COUNTDOWN STRUCTURE
  ======================================================= */

  function checkCountdownStructure() {

    const countdowns = document.querySelectorAll(
      "[data-countdown]"
    );

    countdowns.forEach((countdown) => {

      const requiredValues = [
        "days",
        "hours",
        "minutes",
        "seconds"
      ];

      requiredValues.forEach((value) => {

        const element = countdown.querySelector(
          `[data-countdown-value="${value}"]`
        );

        if (!element) {

          console.warn(
            `Countdown element missing: ${value}`,
            countdown
          );

        }

      });

    });

  }


  /* =======================================================
     10. SAFE EXTERNAL LINKS
  ======================================================= */

  function secureExternalLinks() {

    const externalLinks = document.querySelectorAll(
      'a[target="_blank"]'
    );

    externalLinks.forEach((link) => {

      const currentRel =
        link.getAttribute("rel") || "";

      const relValues = new Set(
        currentRel.split(/\s+/).filter(Boolean)
      );

      relValues.add("noopener");
      relValues.add("noreferrer");

      link.setAttribute(
        "rel",
        Array.from(relValues).join(" ")
      );

    });

  }


  /* =======================================================
     11. PREVENT EMPTY HASH NAVIGATION
  ======================================================= */

  function initializeAnchorSafety() {

    document.addEventListener("click", (event) => {

      const link = event.target.closest(
        'a[href="#"]'
      );

      if (!link) return;

      event.preventDefault();

    });

  }


  /* =======================================================
     12. PUBLIC INTEGRATION METHODS
  ======================================================= */

  WeddingSite.integration = {

    synchronizeNavigation:
      synchronizeNavigationAccessibility,

    refreshNavigation: () => {

      initializeNavigationLinks();

      synchronizeNavigationAccessibility();

    },

    setActivePage: setActivePageLink,

    runStructureChecks: runStructureChecks

  };


  /* =======================================================
     13. INITIALIZE FINAL INTEGRATION
  ======================================================= */

  function initializePartFour() {

    runStructureChecks();

    checkCountdownStructure();

    secureExternalLinks();

    initializeAnchorSafety();

    initializeNavigationLinks();

    synchronizeNavigationAccessibility();

    initializeActiveSectionObserver();

    window.addEventListener(
      "resize",
      handleNavigationResize,
      { passive: true }
    );

    document.addEventListener(
      "wedding:languageChanged",
      handleLanguageChange
    );

    /*
      Set the initial active navigation item.
    */

    if (pageSections.length) {

      const firstSection = pageSections[0];

      if (firstSection.id) {
        setActivePageLink(firstSection.id);
      }

    }

    console.info(
      "Wedding website JavaScript integration initialized."
    );

  }


  /* =======================================================
     14. DOM READY
  ======================================================= */

  if (document.readyState === "loading") {

    document.addEventListener(
      "DOMContentLoaded",
      initializePartFour,
      { once: true }
    );

  } else {

    initializePartFour();

  }


  /* =======================================================
     END OF JAVASCRIPT PART 4 OF 4
     END OF JAVASCRIPT FILE
  ======================================================= */

})();
