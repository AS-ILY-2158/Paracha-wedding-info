
/* =========================================================
   PARACHA WEDDING CARD BY ASP
   File: assets/js/script.js
   PART 1 OF 4 — CORE SETUP & LANGUAGE SYSTEM
   ========================================================= */

"use strict";

/* ---------------------------------------------------------
   1. APPLICATION CONFIGURATION
   --------------------------------------------------------- */

const ParachaWedding = (() => {
  const CONFIG = Object.freeze({
    storageKey: "paracha-wedding-language",
    defaultLanguage: "en",
    supportedLanguages: ["en", "ur"],
    timezone: "Asia/Karachi"
  });

  /* -------------------------------------------------------
     2. SAFE DOM HELPERS
     ------------------------------------------------------- */

  const DOM = {
    html: document.documentElement,

    get(selector, parent = document) {
      return parent.querySelector(selector);
    },

    getAll(selector, parent = document) {
      return Array.from(parent.querySelectorAll(selector));
    },

    getById(id) {
      return document.getElementById(id);
    }
  };

  /* -------------------------------------------------------
     3. TRANSLATION DICTIONARY
     ------------------------------------------------------- */

  const TRANSLATIONS = {
    en: {
      "site.title": "Paracha Wedding Card",
      "site.brand": "Paracha Wedding",
      "site.tagline": "A Celebration of Togetherness",

      "nav.home": "Home",
      "nav.introduction": "Introduction",
      "nav.events": "Events",
      "nav.families": "Families",
      "nav.blessings": "Blessings",

      "hero.eyebrow": "A Celebration of Love and Togetherness",
      "hero.title": "Together with Our Families",
      "hero.description": "With the blessings of Allah, we invite you to share in the joy of our wedding celebrations.",
      "hero.scroll": "Explore the Celebration",

      "introduction.title": "With the Blessings of Allah",
      "introduction.description": "Two families, one beautiful celebration, and a lifetime of prayers and togetherness.",

      "events.title": "Wedding Celebrations",
      "events.subtitle": "Three special occasions, shared with family and friends.",

      "event.nikah": "Nikah",
      "event.baraat": "Baraat",
      "event.walima": "Walima",

      "event.date": "Date",
      "event.day": "Day",
      "event.time": "Time",
      "event.venue": "Venue",
      "event.coming_soon": "Coming Soon",
      "event.countdown": "Countdown",
      "event.days": "Days",
      "event.hours": "Hours",
      "event.minutes": "Minutes",
      "event.seconds": "Seconds",
      "event.countdown_started": "This celebration has begun.",
      "event.countdown_completed": "This event date has passed.",
      "event.hijri_note": "Hijri dates are expected dates and remain subject to the official moon-sighting announcement in Pakistan.",

      "families.title": "The Families",
      "families.bride": "Bride's Family",
      "families.groom": "Groom's Family",
      "families.daughter_of": "Daughter of",
      "families.granddaughter_of": "Granddaughter of",
      "families.niece_of": "Niece of",
      "families.sister_of": "Sister of",
      "families.cousin_of": "Cousin of",
      "families.son_of": "Son of",
      "families.grandson_of": "Grandson of",
      "families.brother_of": "Brother of",

      "quran.title": "Guidance from the Holy Quran",
      "quran.subtitle": "Verses about marriage, love, mercy and family life.",

      "hadith.title": "Sayings of the Prophet Muhammad ﷺ",
      "hadith.subtitle": "Prophetic guidance on marriage and family life.",

      "family_message.title": "A Message from Our Families",

      "blessings.title": "Prayers and Blessings",
      "blessings.subtitle": "May Allah bless this union and grant the couple a life filled with faith, love and mercy.",

      "footer.invitation": "Your presence and prayers will be an honour to our families.",
      "footer.rights": "All rights reserved.",
      "footer.made_by": "Presented by ASP",

      "button.back_to_top": "Back to top",
      "button.open_menu": "Open navigation menu",
      "button.close_menu": "Close navigation menu",

      "accessibility.language_changed": "Language changed to English.",
      "accessibility.menu_opened": "Navigation menu opened.",
      "accessibility.menu_closed": "Navigation menu closed."
    },

    ur: {
      "site.title": "پاراچہ ویڈنگ کارڈ",
      "site.brand": "پاراچہ ویڈنگ",
      "site.tagline": "خوشیوں اور رشتوں کا جشن",

      "nav.home": "ہوم",
      "nav.introduction": "تعارف",
      "nav.events": "تقریبات",
      "nav.families": "خاندان",
      "nav.blessings": "دعائیں",

      "hero.eyebrow": "محبت اور اپنائیت کا خوبصورت جشن",
      "hero.title": "اپنے خاندانوں کے ساتھ",
      "hero.description": "اللہ تعالیٰ کے فضل و کرم سے ہم آپ کو اپنی شادی کی خوشیوں میں شرکت کی دعوت دیتے ہیں۔",
      "hero.scroll": "تقریبات دیکھیے",

      "introduction.title": "اللہ تعالیٰ کے فضل و کرم سے",
      "introduction.description": "دو خاندان، ایک خوبصورت تقریب اور زندگی بھر کی دعاؤں اور اپنائیت کا سفر۔",

      "events.title": "شادی کی تقریبات",
      "events.subtitle": "تین خاص مواقع، خاندان اور عزیز و اقارب کے ساتھ۔",

      "event.nikah": "نکاح",
      "event.baraat": "بارات",
      "event.walima": "ولیمہ",

      "event.date": "تاریخ",
      "event.day": "دن",
      "event.time": "وقت",
      "event.venue": "مقام",
      "event.coming_soon": "جلد بتایا جائے گا",
      "event.countdown": "باقی وقت",
      "event.days": "دن",
      "event.hours": "گھنٹے",
      "event.minutes": "منٹ",
      "event.seconds": "سیکنڈ",
      "event.countdown_started": "یہ تقریب شروع ہو چکی ہے۔",
      "event.countdown_completed": "اس تقریب کی تاریخ گزر چکی ہے۔",
      "event.hijri_note": "ہجری تاریخیں متوقع ہیں اور پاکستان میں چاند نظر آنے کے سرکاری اعلان سے مشروط ہیں۔",

      "families.title": "دونوں خاندان",
      "families.bride": "دلہن کا خاندان",
      "families.groom": "دولہا کا خاندان",
      "families.daughter_of": "صاحبزادی",
      "families.granddaughter_of": "پوتی",
      "families.niece_of": "بھتیجی",
      "families.sister_of": "بہن",
      "families.cousin_of": "کزن",
      "families.son_of": "فرزند",
      "families.grandson_of": "پوتا",
      "families.brother_of": "بھائی",

      "quran.title": "قرآنِ کریم کی رہنمائی",
      "quran.subtitle": "نکاح، محبت، رحمت اور خاندانی زندگی کے متعلق آیات۔",

      "hadith.title": "رسول اللہ ﷺ کی احادیث",
      "hadith.subtitle": "نکاح اور خاندانی زندگی کے بارے میں نبوی رہنمائی۔",

      "family_message.title": "خاندانوں کی جانب سے پیغام",

      "blessings.title": "دعائیں اور نیک تمنائیں",
      "blessings.subtitle": "اللہ تعالیٰ اس رشتے میں برکت عطا فرمائے اور جوڑے کو ایمان، محبت اور رحمت سے بھرپور زندگی نصیب فرمائے۔",

      "footer.invitation": "آپ کی شرکت اور دعائیں ہمارے خاندانوں کے لیے باعثِ عزت ہوں گی۔",
      "footer.rights": "تمام حقوق محفوظ ہیں۔",
      "footer.made_by": "ASP کی جانب سے پیش کردہ",

      "button.back_to_top": "اوپر جائیں",
      "button.open_menu": "نیویگیشن مینو کھولیں",
      "button.close_menu": "نیویگیشن مینو بند کریں",

      "accessibility.language_changed": "زبان اردو کر دی گئی ہے۔",
      "accessibility.menu_opened": "نیویگیشن مینو کھول دیا گیا ہے۔",
      "accessibility.menu_closed": "نیویگیشن مینو بند کر دیا گیا ہے۔"
    }
  };

  /* -------------------------------------------------------
     4. LANGUAGE PREFERENCE
     ------------------------------------------------------- */

  function getSavedLanguage() {
    try {
      const savedLanguage = window.localStorage.getItem(
        CONFIG.storageKey
      );

      if (CONFIG.supportedLanguages.includes(savedLanguage)) {
        return savedLanguage;
      }
    } catch (error) {
      console.warn(
        "[Paracha Wedding] Language preference could not be read:",
        error
      );
    }

    return null;
  }

  function getBrowserLanguage() {
    const browserLanguage =
      navigator.language ||
      (Array.isArray(navigator.languages)
        ? navigator.languages[0]
        : "") ||
      CONFIG.defaultLanguage;

    return browserLanguage.toLowerCase().startsWith("ur")
      ? "ur"
      : "en";
  }

  function saveLanguage(language) {
    try {
      window.localStorage.setItem(CONFIG.storageKey, language);
    } catch (error) {
      console.warn(
        "[Paracha Wedding] Language preference could not be saved:",
        error
      );
    }
  }

  /* -------------------------------------------------------
     5. TRANSLATION LOOKUP
     ------------------------------------------------------- */

  function translate(key, language = currentLanguage) {
    const selectedDictionary = TRANSLATIONS[language];

    if (
      selectedDictionary &&
      Object.prototype.hasOwnProperty.call(selectedDictionary, key)
    ) {
      return selectedDictionary[key];
    }

    const englishFallback = TRANSLATIONS.en[key];

    if (typeof englishFallback === "string") {
      return englishFallback;
    }

    return null;
  }

  /* -------------------------------------------------------
     6. APPLY TRANSLATIONS TO THE PAGE
     ------------------------------------------------------- */

  function applyTranslations(language) {
    const dictionary = TRANSLATIONS[language];

    if (!dictionary) {
      console.error(
        `[Paracha Wedding] Unsupported language: ${language}`
      );
      return false;
    }

    DOM.html.lang = language;
    DOM.html.dir = language === "ur" ? "rtl" : "ltr";

    DOM.getAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      const translatedText = translate(key, language);

      if (translatedText !== null) {
        element.textContent = translatedText;
      }
    });

    DOM.getAll("[data-i18n-aria-label]").forEach((element) => {
      const key = element.getAttribute("data-i18n-aria-label");
      const translatedText = translate(key, language);

      if (translatedText !== null) {
        element.setAttribute("aria-label", translatedText);
      }
    });

    DOM.getAll("[data-i18n-title]").forEach((element) => {
      const key = element.getAttribute("data-i18n-title");
      const translatedText = translate(key, language);

      if (translatedText !== null) {
        element.setAttribute("title", translatedText);
      }
    });

    DOM.getAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.getAttribute("data-i18n-placeholder");
      const translatedText = translate(key, language);

      if (translatedText !== null) {
        element.setAttribute("placeholder", translatedText);
      }
    });

    DOM.getAll("[data-language]").forEach((button) => {
      const isSelected =
        button.getAttribute("data-language") === language;

      button.classList.toggle("is-active", isSelected);
      button.setAttribute(
        "aria-pressed",
        isSelected ? "true" : "false"
      );
    });

    currentLanguage = language;

    document.dispatchEvent(
      new CustomEvent("paracha:languagechange", {
        detail: { language }
      })
    );

    return true;
  }

  /* -------------------------------------------------------
     7. CHANGE WEBSITE LANGUAGE
     ------------------------------------------------------- */

  let currentLanguage = CONFIG.defaultLanguage;

  function setLanguage(language, options = {}) {
    if (!CONFIG.supportedLanguages.includes(language)) {
      console.warn(
        `[Paracha Wedding] Language "${language}" is not supported.`
      );
      return false;
    }

    const successfullyApplied = applyTranslations(language);

    if (!successfullyApplied) {
      return false;
    }

    if (options.save !== false) {
      saveLanguage(language);
    }

    return true;
  }

  /* -------------------------------------------------------
     8. INITIALIZE LANGUAGE SYSTEM
     ------------------------------------------------------- */

  function initializeLanguage() {
    const savedLanguage = getSavedLanguage();

    const initialLanguage =
      savedLanguage || getBrowserLanguage();

    setLanguage(initialLanguage, {
      save: false
    });

    DOM.getAll("[data-language]").forEach((button) => {
      button.addEventListener("click", () => {
        const selectedLanguage =
          button.getAttribute("data-language");

        setLanguage(selectedLanguage);
      });
    });
  }

  /* -------------------------------------------------------
     9. PUBLIC APPLICATION INTERFACE
     ------------------------------------------------------- */

  return {
    config: CONFIG,
    dom: DOM,
    translations: TRANSLATIONS,

    get currentLanguage() {
      return currentLanguage;
    },

    translate,
    setLanguage,
    initializeLanguage
  };
})();

/* ---------------------------------------------------------
   10. INITIALIZE CORE LANGUAGE SYSTEM
   --------------------------------------------------------- */

function initializeParachaCore() {
  try {
    ParachaWedding.initializeLanguage();

    document.documentElement.classList.add("js-enabled");

    console.info(
      "[Paracha Wedding] Core language system initialized."
    );
  } catch (error) {
    console.error(
      "[Paracha Wedding] Core initialization failed:",
      error
    );
  }
}

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    initializeParachaCore,
    { once: true }
  );
} else {
  initializeParachaCore();
}

/* ================= END OF PART 1 OF 4 ================= */

/* =========================================================
   PART 2 OF 4 — NAVIGATION SYSTEM
   Append this section immediately after Part 1.
   ========================================================= */

(function initializeNavigationSystem() {
  "use strict";

  /* -------------------------------------------------------
     1. NAVIGATION ELEMENTS
     ------------------------------------------------------- */

  const toggleButton = ParachaWedding.dom.getById(
    "mobile-menu-toggle"
  );

  const navigation = ParachaWedding.dom.getById(
    "main-navigation"
  );

  const navigationLinks = navigation
    ? ParachaWedding.dom.getAll('a[href^="#"]', navigation)
    : [];

  const header =
    ParachaWedding.dom.get(".site-header") ||
    ParachaWedding.dom.get("header");

  if (!navigation) {
    console.warn(
      "[Paracha Wedding] Navigation element #main-navigation was not found."
    );
    return;
  }

  let isMenuOpen = false;
  let scrollTicking = false;

  /* -------------------------------------------------------
     2. ACCESSIBILITY LABELS
     ------------------------------------------------------- */

  function updateToggleAccessibility() {
    if (!toggleButton) return;

    const language = ParachaWedding.currentLanguage;

    const labelKey = isMenuOpen
      ? "button.close_menu"
      : "button.open_menu";

    const label = ParachaWedding.translate(
      labelKey,
      language
    );

    if (label) {
      toggleButton.setAttribute("aria-label", label);
    }

    toggleButton.setAttribute(
      "aria-expanded",
      isMenuOpen ? "true" : "false"
    );
  }

  /* -------------------------------------------------------
     3. OPEN MOBILE NAVIGATION
     ------------------------------------------------------- */

  function openMenu() {
    if (!toggleButton || isMenuOpen) return;

    isMenuOpen = true;

    navigation.classList.add("is-open");
    toggleButton.classList.add("is-active");

    document.body.classList.add("menu-open");

    updateToggleAccessibility();

    document.dispatchEvent(
      new CustomEvent("paracha:menuopen")
    );

    console.info(
      "[Paracha Wedding] Mobile navigation opened."
    );
  }

  /* -------------------------------------------------------
     4. CLOSE MOBILE NAVIGATION
     ------------------------------------------------------- */

  function closeMenu(options = {}) {
    if (!isMenuOpen) return;

    isMenuOpen = false;

    navigation.classList.remove("is-open");

    if (toggleButton) {
      toggleButton.classList.remove("is-active");
    }

    document.body.classList.remove("menu-open");

    updateToggleAccessibility();

    if (options.returnFocus && toggleButton) {
      toggleButton.focus();
    }

    document.dispatchEvent(
      new CustomEvent("paracha:menuclose")
    );

    console.info(
      "[Paracha Wedding] Mobile navigation closed."
    );
  }

  /* -------------------------------------------------------
     5. TOGGLE BUTTON EVENT
     ------------------------------------------------------- */

  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      if (isMenuOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  /* -------------------------------------------------------
     6. CLOSE MENU AFTER NAVIGATION
     ------------------------------------------------------- */

  navigationLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetSelector = link.getAttribute("href");

      if (
        !targetSelector ||
        targetSelector === "#" ||
        !targetSelector.startsWith("#")
      ) {
        return;
      }

      let targetSection;

      try {
        targetSection = document.querySelector(targetSelector);
      } catch (error) {
        console.warn(
          "[Paracha Wedding] Invalid navigation target:",
          targetSelector
        );
        return;
      }

      if (!targetSection) {
        console.warn(
          "[Paracha Wedding] Navigation target not found:",
          targetSelector
        );
        return;
      }

      closeMenu();

      /*
       * Native anchor navigation is retained.
       * CSS scroll-behavior and scroll-margin can
       * control the visual scrolling behavior.
       */
    });
  });

  /* -------------------------------------------------------
     7. CLOSE MENU WHEN CLICKING OUTSIDE
     ------------------------------------------------------- */

  document.addEventListener("click", (event) => {
    if (!isMenuOpen) return;

    const clickedInsideNavigation =
      navigation.contains(event.target);

    const clickedToggle =
      toggleButton &&
      toggleButton.contains(event.target);

    if (!clickedInsideNavigation && !clickedToggle) {
      closeMenu();
    }
  });

  /* -------------------------------------------------------
     8. KEYBOARD ACCESSIBILITY
     ------------------------------------------------------- */

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isMenuOpen) {
      closeMenu({
        returnFocus: true
      });
    }
  });

  /* -------------------------------------------------------
     9. CLOSE MENU WHEN RETURNING TO DESKTOP
     ------------------------------------------------------- */

  const desktopMediaQuery = window.matchMedia(
    "(min-width: 769px)"
  );

  function handleViewportChange(event) {
    if (event.matches) {
      closeMenu();
    }
  }

  if (typeof desktopMediaQuery.addEventListener === "function") {
    desktopMediaQuery.addEventListener(
      "change",
      handleViewportChange
    );
  } else if (typeof desktopMediaQuery.addListener === "function") {
    desktopMediaQuery.addListener(handleViewportChange);
  }

  /* -------------------------------------------------------
     10. NAVIGATION SECTIONS
     ------------------------------------------------------- */

  const navigationSections = navigationLinks
    .map((link) => {
      const selector = link.getAttribute("href");

      if (!selector || selector === "#") {
        return null;
      }

      const section = document.querySelector(selector);

      if (!section) {
        return null;
      }

      return {
        link,
        section,
        id: section.id
      };
    })
    .filter(Boolean);

  /* -------------------------------------------------------
     11. UPDATE ACTIVE NAVIGATION LINK
     ------------------------------------------------------- */

  function setActiveNavigation(sectionId) {
    navigationSections.forEach((item) => {
      const isActive = item.id === sectionId;

      item.link.classList.toggle(
        "is-active",
        isActive
      );

      if (isActive) {
        item.link.setAttribute(
          "aria-current",
          "location"
        );
      } else {
        item.link.removeAttribute("aria-current");
      }
    });
  }

  /* -------------------------------------------------------
     12. INTERSECTION OBSERVER FOR ACTIVE SECTION
     ------------------------------------------------------- */

  function initializeActiveSectionObserver() {
    if (!navigationSections.length) return;

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          const visibleSections = entries
            .filter((entry) => entry.isIntersecting)
            .sort(
              (a, b) =>
                b.intersectionRatio - a.intersectionRatio
            );

          if (visibleSections.length > 0) {
            setActiveNavigation(
              visibleSections[0].target.id
            );
          }
        },
        {
          root: null,
          rootMargin: "-20% 0px -60% 0px",
          threshold: [0, 0.1, 0.25, 0.5, 0.75, 1]
        }
      );

      navigationSections.forEach((item) => {
        observer.observe(item.section);
      });

      return;
    }

    initializeScrollBasedActiveSection();
  }

  /* -------------------------------------------------------
     13. FALLBACK ACTIVE SECTION DETECTION
     ------------------------------------------------------- */

  function updateActiveSectionOnScroll() {
    const headerHeight = header
      ? header.getBoundingClientRect().height
      : 0;

    const activationPoint =
      window.scrollY + headerHeight + 120;

    let currentSection = navigationSections[0];

    navigationSections.forEach((item) => {
      const sectionTop =
        item.section.getBoundingClientRect().top +
        window.scrollY;

      if (sectionTop <= activationPoint) {
        currentSection = item;
      }
    });

    if (currentSection) {
      setActiveNavigation(currentSection.id);
    }
  }

  function initializeScrollBasedActiveSection() {
    window.addEventListener(
      "scroll",
      () => {
        if (scrollTicking) return;

        scrollTicking = true;

        window.requestAnimationFrame(() => {
          updateActiveSectionOnScroll();
          scrollTicking = false;
        });
      },
      { passive: true }
    );

    window.addEventListener(
      "resize",
      updateActiveSectionOnScroll,
      { passive: true }
    );

    updateActiveSectionOnScroll();
  }

  /* -------------------------------------------------------
     14. INITIALIZE NAVIGATION
     ------------------------------------------------------- */

  updateToggleAccessibility();

  initializeActiveSectionObserver();

  /*
   * Update the menu's accessible label whenever
   * the website language changes.
   */

  document.addEventListener(
    "paracha:languagechange",
    updateToggleAccessibility
  );

  /*
   * Ensure the initial active navigation state
   * is correct after the page has loaded.
   */

  window.addEventListener(
    "load",
    () => {
      if (!("IntersectionObserver" in window)) {
        updateActiveSectionOnScroll();
      }
    },
    { once: true }
  );

  console.info(
    "[Paracha Wedding] Navigation system initialized."
  );
})();

/* ================= END OF PART 2 OF 4 ================= */

/* =========================================================
   PART 3 OF 4 — WEDDING EVENT COUNTDOWN SYSTEM
   Append immediately after Part 2.
   ========================================================= */

(function initializeCountdownSystem() {
  "use strict";

  /* -------------------------------------------------------
     1. EVENT CONFIGURATION
     ------------------------------------------------------- */

  const EVENTS = Object.freeze([
    {
      id: "nikah",
      date: "2027-03-06"
    },
    {
      id: "baraat",
      date: "2027-04-03"
    },
    {
      id: "walima",
      date: "2027-04-04"
    }
  ]);

  const TIMEZONE = ParachaWedding.config.timezone;

  const UPDATE_INTERVAL = 1000;

  let countdownInterval = null;

  /* -------------------------------------------------------
     2. COUNTDOWN STATUS TRANSLATIONS
     ------------------------------------------------------- */

  Object.assign(ParachaWedding.translations.en, {
    "event.countdown_today": "Today is the event day.",
    "event.countdown_passed": "This event date has passed."
  });

  Object.assign(ParachaWedding.translations.ur, {
    "event.countdown_today": "آج تقریب کا دن ہے۔",
    "event.countdown_passed": "اس تقریب کی تاریخ گزر چکی ہے۔"
  });

  /* -------------------------------------------------------
     3. TIMEZONE DATE/TIME HELPERS
     ------------------------------------------------------- */

  function getZonedDateParts(date, timezone) {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: timezone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hourCycle: "h23"
    });

    const parts = formatter.formatToParts(date);

    const result = {};

    parts.forEach((part) => {
      if (part.type !== "literal") {
        result[part.type] = Number(part.value);
      }
    });

    return result;
  }

  /*
   * Calculate the UTC offset for a timezone at a
   * particular instant. This avoids relying on the
   * visitor's computer timezone.
   */

  function getTimezoneOffset(date, timezone) {
    const parts = getZonedDateParts(date, timezone);

    const zonedTimeAsUTC = Date.UTC(
      parts.year,
      parts.month - 1,
      parts.day,
      parts.hour,
      parts.minute,
      parts.second
    );

    const instantWithoutMilliseconds =
      Math.floor(date.getTime() / 1000) * 1000;

    return zonedTimeAsUTC - instantWithoutMilliseconds;
  }

  /* -------------------------------------------------------
     4. CONVERT LOCAL EVENT MIDNIGHT TO UTC
     ------------------------------------------------------- */

  function getEventTargetTimestamp(dateString) {
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(
      dateString
    );

    if (!match) {
      throw new Error(
        `Invalid event date: ${dateString}`
      );
    }

    const year = Number(match[1]);
    const month = Number(match[2]);
    const day = Number(match[3]);

    const requestedDate = new Date(
      Date.UTC(year, month - 1, day)
    );

    /*
     * Validate the calendar date. For example,
     * 2027-02-31 must not be accepted.
     */

    if (
      requestedDate.getUTCFullYear() !== year ||
      requestedDate.getUTCMonth() !== month - 1 ||
      requestedDate.getUTCDate() !== day
    ) {
      throw new Error(
        `Invalid calendar date: ${dateString}`
      );
    }

    /*
     * Start with the requested local midnight,
     * then convert it using the timezone offset.
     * Recalculate once to handle offset changes.
     */

    const approximateUTC = Date.UTC(
      year,
      month - 1,
      day,
      0,
      0,
      0
    );

    let targetTimestamp =
      approximateUTC -
      getTimezoneOffset(
        new Date(approximateUTC),
        TIMEZONE
      );

    targetTimestamp =
      approximateUTC -
      getTimezoneOffset(
        new Date(targetTimestamp),
        TIMEZONE
      );

    return targetTimestamp;
  }

  /* -------------------------------------------------------
     5. GET CURRENT EVENT-DATE STATUS
     ------------------------------------------------------- */

  function getEventStatus(now, targetTimestamp) {
    const difference = targetTimestamp - now;

    if (difference > 0) {
      return "upcoming";
    }

    const currentParts = getZonedDateParts(
      new Date(now),
      TIMEZONE
    );

    const today =
      `${currentParts.year}-` +
      `${String(currentParts.month).padStart(2, "0")}-` +
      `${String(currentParts.day).padStart(2, "0")}`;

    if (difference <= 0) {
      const targetDate = new Date(targetTimestamp);

      const targetParts = getZonedDateParts(
        targetDate,
        TIMEZONE
      );

      const eventDate =
        `${targetParts.year}-` +
        `${String(targetParts.month).padStart(2, "0")}-` +
        `${String(targetParts.day).padStart(2, "0")}`;

      if (today === eventDate) {
        return "today";
      }
    }

    return "passed";
  }

  /* -------------------------------------------------------
     6. FORMAT COUNTDOWN NUMBERS
     ------------------------------------------------------- */

  function formatCountdownNumber(value) {
    const language = ParachaWedding.currentLanguage;

    const locale =
      language === "ur" ? "ur-PK" : "en-US";

    return new Intl.NumberFormat(locale, {
      maximumFractionDigits: 0,
      useGrouping: false
    }).format(value);
  }

  /* -------------------------------------------------------
     7. UPDATE INDIVIDUAL COUNTDOWN DISPLAY
     ------------------------------------------------------- */

  function updateCountdownDisplay(
    container,
    remainingMilliseconds
  ) {
    const totalSeconds = Math.max(
      0,
      Math.floor(remainingMilliseconds / 1000)
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

    const values = {
      days,
      hours,
      minutes,
      seconds
    };

    Object.entries(values).forEach(([unit, value]) => {
      const element = container.querySelector(
        `[data-countdown-value="${unit}"]`
      );

      if (element) {
        element.textContent =
          formatCountdownNumber(value);
      }
    });
  }

  /* -------------------------------------------------------
     8. UPDATE EVENT STATUS MESSAGE
     ------------------------------------------------------- */

  function updateCountdownStatus(
    container,
    status
  ) {
    const statusElement = container.querySelector(
      "[data-countdown-status]"
    );

    if (!statusElement) return;

    let translationKey;

    if (status === "today") {
      translationKey = "event.countdown_today";
    } else if (status === "passed") {
      translationKey = "event.countdown_passed";
    } else {
      /*
       * Do not display a completion message
       * while the event date is still upcoming.
       */

      statusElement.textContent = "";
      return;
    }

    const message = ParachaWedding.translate(
      translationKey
    );

    statusElement.textContent = message || "";
  }

  /* -------------------------------------------------------
     9. UPDATE ONE EVENT
     ------------------------------------------------------- */

  function updateEventCountdown(eventConfig, now) {
    const container = document.querySelector(
      `[data-countdown="${eventConfig.id}"]`
    );

    if (!container) {
      console.warn(
        `[Paracha Wedding] Countdown container not found: ${eventConfig.id}`
      );
      return;
    }

    try {
      const targetTimestamp =
        getEventTargetTimestamp(eventConfig.date);

      const remainingMilliseconds =
        targetTimestamp - now;

      const status = getEventStatus(
        now,
        targetTimestamp
      );

      if (status === "upcoming") {
        updateCountdownDisplay(
          container,
          remainingMilliseconds
        );
      } else {
        /*
         * Once the event date arrives, the countdown
         * reaches zero. No unknown event time is assumed.
         */

        updateCountdownDisplay(container, 0);
      }

      updateCountdownStatus(container, status);

      container.setAttribute(
        "data-event-status",
        status
      );
    } catch (error) {
      console.error(
        `[Paracha Wedding] Countdown error for ${eventConfig.id}:`,
        error
      );

      container.setAttribute(
        "data-event-status",
        "error"
      );
    }
  }

  /* -------------------------------------------------------
     10. UPDATE ALL EVENT COUNTDOWNS
     ------------------------------------------------------- */

  function updateAllCountdowns() {
    const now = Date.now();

    EVENTS.forEach((eventConfig) => {
      updateEventCountdown(eventConfig, now);
    });
  }

  /* -------------------------------------------------------
     11. START COUNTDOWN TIMER
     ------------------------------------------------------- */

  function startCountdownTimer() {
    if (countdownInterval !== null) {
      window.clearInterval(countdownInterval);
    }

    updateAllCountdowns();

    countdownInterval = window.setInterval(
      updateAllCountdowns,
      UPDATE_INTERVAL
    );
  }

  /* -------------------------------------------------------
     12. STOP COUNTDOWN TIMER
     ------------------------------------------------------- */

  function stopCountdownTimer() {
    if (countdownInterval !== null) {
      window.clearInterval(countdownInterval);
      countdownInterval = null;
    }
  }

  /* -------------------------------------------------------
     13. PAGE VISIBILITY HANDLING
     ------------------------------------------------------- */

  document.addEventListener(
    "visibilitychange",
    () => {
      if (document.hidden) {
        stopCountdownTimer();
      } else {
        startCountdownTimer();
      }
    }
  );

  /* -------------------------------------------------------
     14. PAGE LIFECYCLE HANDLING
     ------------------------------------------------------- */

  window.addEventListener("pagehide", () => {
    stopCountdownTimer();
  });

  window.addEventListener("pageshow", () => {
    if (!document.hidden) {
      startCountdownTimer();
    }
  });

  /* -------------------------------------------------------
     15. LANGUAGE CHANGE HANDLING
     ------------------------------------------------------- */

  document.addEventListener(
    "paracha:languagechange",
    updateAllCountdowns
  );

  /* -------------------------------------------------------
     16. INITIALIZE COUNTDOWNS
     ------------------------------------------------------- */

  startCountdownTimer();

  console.info(
    "[Paracha Wedding] Event countdown system initialized."
  );

})();

/* ================= END OF PART 3 OF 4 ================= */

/* =========================================================
   PARACHA WEDDING WEBSITE BY ASP
   JAVASCRIPT — PART 4 OF 4

   Systems:
   1. Scroll Reveal
   2. Reduced Motion Support
   3. Back To Top
   4. Accessibility Announcements
   5. Global Error Handling
   6. Final Initialization

   ========================================================= */

(function initializeScrollRevealSystem() {
    "use strict";

    if (window.__parachaScrollRevealInitialized) {
        return;
    }

    window.__parachaScrollRevealInitialized = true;

    const revealElements = document.querySelectorAll("[data-reveal]");

    if (!revealElements.length) {
        return;
    }

    const reducedMotionQuery = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );

    function revealAllElements() {
        revealElements.forEach(function (element) {
            element.classList.add("is-visible");
            element.setAttribute("data-revealed", "true");
        });
    }

    function revealElement(element) {
        if (!element || element.getAttribute("data-revealed") === "true") {
            return;
        }

        element.classList.add("is-visible");
        element.setAttribute("data-revealed", "true");
    }

    function initializeRevealObserver() {
        if (reducedMotionQuery.matches) {
            revealAllElements();
            return;
        }

        if (!("IntersectionObserver" in window)) {
            revealAllElements();
            return;
        }

        const observer = new IntersectionObserver(
            function (entries, currentObserver) {
                entries.forEach(function (entry) {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    revealElement(entry.target);
                    currentObserver.unobserve(entry.target);
                });
            },
            {
                root: null,
                rootMargin: "0px 0px -60px 0px",
                threshold: 0.08
            }
        );

        revealElements.forEach(function (element) {
            if (element.getAttribute("data-revealed") === "true") {
                return;
            }

            observer.observe(element);
        });
    }

    function handleMotionPreferenceChange(event) {
        if (event.matches) {
            revealAllElements();
        }
    }

    initializeRevealObserver();

    if (typeof reducedMotionQuery.addEventListener === "function") {
        reducedMotionQuery.addEventListener(
            "change",
            handleMotionPreferenceChange
        );
    } else if (typeof reducedMotionQuery.addListener === "function") {
        reducedMotionQuery.addListener(handleMotionPreferenceChange);
    }

})();


/* =========================================================
   BACK TO TOP SYSTEM
   ========================================================= */

(function initializeBackToTopSystem() {
    "use strict";

    if (window.__parachaBackToTopInitialized) {
        return;
    }

    window.__parachaBackToTopInitialized = true;

    const backToTopButton = document.getElementById("back-to-top");

    if (!backToTopButton) {
        return;
    }

    const reducedMotionQuery = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );

    const visibilityThreshold = 450;
    let ticking = false;

    function updateButtonVisibility() {
        const shouldShow = window.scrollY > visibilityThreshold;

        backToTopButton.classList.toggle("is-visible", shouldShow);
        backToTopButton.setAttribute(
            "aria-hidden",
            shouldShow ? "false" : "true"
        );

        backToTopButton.tabIndex = shouldShow ? 0 : -1;

        ticking = false;
    }

    function requestVisibilityUpdate() {
        if (ticking) {
            return;
        }

        ticking = true;
        window.requestAnimationFrame(updateButtonVisibility);
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: reducedMotionQuery.matches ? "auto" : "smooth"
        });
    }

    backToTopButton.addEventListener("click", scrollToTop);

    window.addEventListener(
        "scroll",
        requestVisibilityUpdate,
        { passive: true }
    );

    window.addEventListener(
        "resize",
        requestVisibilityUpdate,
        { passive: true }
    );

    updateButtonVisibility();

})();


/* =========================================================
   ACCESSIBILITY ANNOUNCEMENT SYSTEM
   ========================================================= */

(function initializeAccessibilitySystem() {
    "use strict";

    if (window.__parachaAccessibilityInitialized) {
        return;
    }

    window.__parachaAccessibilityInitialized = true;

    const announcer = document.getElementById(
        "accessibility-announcer"
    );

    function announce(message, priority) {
        if (!announcer || typeof message !== "string") {
            return;
        }

        const cleanMessage = message.trim();

        if (!cleanMessage) {
            return;
        }

        announcer.setAttribute(
            "aria-live",
            priority === "assertive" ? "assertive" : "polite"
        );

        announcer.textContent = "";

        window.requestAnimationFrame(function () {
            announcer.textContent = cleanMessage;
        });
    }

    window.ParachaWedding = window.ParachaWedding || {};

    window.ParachaWedding.announce = announce;

    document.addEventListener(
        "paracha:languagechange",
        function () {
            const language = window.ParachaWedding.currentLanguage;

            if (language === "ur") {
                announce("زبان اردو میں تبدیل کر دی گئی ہے۔");
            } else if (language === "en") {
                announce("Language changed to English.");
            }
        }
    );

})();


/* =========================================================
   GLOBAL ERROR HANDLING
   ========================================================= */

(function initializeGlobalErrorHandling() {
    "use strict";

    if (window.__parachaErrorHandlingInitialized) {
        return;
    }

    window.__parachaErrorHandlingInitialized = true;

    window.addEventListener("error", function (event) {
        /*
         * Do not expose technical error details to visitors.
         * Do not interrupt the website's normal operation.
         */

        if (window.console && typeof console.error === "function") {
            console.error(
                "[Paracha Wedding] A JavaScript error occurred.",
                event.message || "Unknown error"
            );
        }
    });

    window.addEventListener(
        "unhandledrejection",
        function (event) {
            /*
             * Record the failure for development diagnostics.
             * No private information is displayed on the page.
             */

            if (window.console && typeof console.error === "function") {
                console.error(
                    "[Paracha Wedding] An asynchronous operation failed."
                );
            }
        }
    );

})();


/* =========================================================
   FINAL INITIALIZATION
   ========================================================= */

(function initializeParachaWeddingFinalSystems() {
    "use strict";

    if (window.__parachaWeddingFinalSystemsInitialized) {
        return;
    }

    window.__parachaWeddingFinalSystemsInitialized = true;

    function initializeFinalSystems() {
        /*
         * Scroll reveal, navigation, countdown, language,
         * accessibility and back-to-top systems are initialized
         * by their respective independent modules.
         *
         * This final initialization confirms that the document
         * is ready and the required main page structure exists.
         */

        const requiredElements = {
            header: document.querySelector("header.site-header"),
            main: document.querySelector("main"),
            footer: document.getElementById("site-footer")
        };

        if (!requiredElements.main) {
            console.error(
                "[Paracha Wedding] Main content element was not found."
            );
        }

        document.documentElement.classList.add(
            "paracha-site-ready"
        );

        /*
         * Dispatch a custom event for future optional integrations.
         * No external API or backend is required.
         */

        document.dispatchEvent(
            new CustomEvent("paracha:site-ready", {
                detail: {
                    project: "Paracha Wedding Website by ASP",
                    version: "1.0"
                }
            })
        );
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            initializeFinalSystems,
            { once: true }
        );
    } else {
        initializeFinalSystems();
    }

})();

/* =========================================================
   END OF JAVASCRIPT PART 4 OF 4
   ========================================================= */
