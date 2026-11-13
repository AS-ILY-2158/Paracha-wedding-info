
"use strict";

/* =========================================================
   WEDDING WEBSITE
   Main JavaScript
   Nake Rahim Family & Ahmad Family
========================================================= */


/* =========================================================
   01. WEBSITE CONFIGURATION
========================================================= */

const WeddingSite = {

  config: {
    timezoneOffset: 5 * 60 * 60 * 1000,
    defaultLanguage: "en"
  },

  state: {
    language: "en",
    countdownInterval: null
  }

};


/* =========================================================
   02. LANGUAGE TRANSLATIONS
========================================================= */

const translations = {

  en: {

    // Navigation
    "nav.events": "Events",
    "nav.families": "Families",
    "nav.quran": "Quran",
    "nav.hadith": "Hadith",

    // Events
    "events.eyebrow": "SAVE THE DATES",
    "events.title": "Wedding Celebrations",
    "events.description": "Three beautiful occasions, one journey of togetherness.",

    "events.nikah.label": "THE SACRED BOND",
    "events.nikah.name": "Nikah",
    "events.nikah.subtitle": "The Beginning of Forever",
    "events.nikah.hijri": "Expected 27 Ramadan 1448 AH",

    "events.baraat.label": "THE GRAND CELEBRATION",
    "events.baraat.name": "Baraat",
    "events.baraat.subtitle": "A Day of Joy & Celebration",
    "events.baraat.hijri": "Expected 26 Shawwal 1448 AH",

    "events.walima.label": "THE RECEPTION",
    "events.walima.name": "Walima",
    "events.walima.subtitle": "A Gathering of Blessings",
    "events.walima.hijri": "Expected 27 Shawwal 1448 AH",

    "events.dateNote": "Islamic dates are expected and subject to local moon sighting.",

    // Dates
    "dates.march": "March",
    "dates.april": "April",
    "dates.saturday": "Saturday",
    "dates.sunday": "Sunday",

    // Common
    "common.time": "TIME",
    "common.venue": "VENUE",
    "common.comingSoon": "Coming Soon",
    "common.countdown": "COUNTDOWN",
    "common.reference": "REFERENCE",
    "common.readQuran": "Read Quran",
    "common.readHadith": "Read Hadith",

    // Time
    "time.days": "Days",
    "time.hours": "Hours",
    "time.minutes": "Minutes",
    "time.seconds": "Seconds",

    // Families
    "families.eyebrow": "TWO FAMILIES, ONE CELEBRATION",
    "families.title": "The Families",
    "families.description": "Celebrating the union of two families.",

    "families.bride.kicker": "THE BRIDE'S FAMILY",
    "families.bride.role": "With love and blessings",

    "families.groom.kicker": "THE GROOM'S FAMILY",
    "families.groom.role": "With love and blessings",

    "families.father": "Father",
    "families.grandfather": "Grandfather",
    "families.uncles": "Uncles",
    "families.brothers": "Brothers",
    "families.cousins": "Cousins",
    "families.groom": "Groom",

    // Quran
    "quran.eyebrow": "WORDS OF ALLAH",
    "quran.title": "From the Holy Quran",
    "quran.description": "Verses reflecting love, mercy, marriage and family.",
    "quran.verseLabel": "QURANIC VERSE",

    // Hadith
    "hadith.eyebrow": "PROPHETIC GUIDANCE",
    "hadith.title": "Sayings of the Prophet ﷺ",
    "hadith.description": "Guidance for a blessed marriage and a life of goodness.",
    "hadith.label": "HADITH",

    // Footer
    "footer.message": "May Allah bless this union with love, understanding, patience, and happiness. May both families be united in goodness, and may every step ahead be filled with His mercy and blessings.",
    "footer.copyright": "A Celebration of Togetherness",

    // Countdown status
    "countdown.finished": "This celebration has begun.",
    "countdown.unavailable": "Date unavailable."

  },


  ur: {

    // Navigation
    "nav.events": "تقریبات",
    "nav.families": "خاندان",
    "nav.quran": "قرآن مجید",
    "nav.hadith": "احادیث",

    // Events
    "events.eyebrow": "تاریخیں محفوظ رکھیں",
    "events.title": "شادی کی تقریبات",
    "events.description": "تین خوبصورت تقریبات، خوشیوں اور اپنائیت کا ایک سفر۔",

    "events.nikah.label": "عقدِ نکاح",
    "events.nikah.name": "نکاح",
    "events.nikah.subtitle": "ایک نئے سفر کا آغاز",
    "events.nikah.hijri": "متوقع 27 رمضان 1448 ہجری",

    "events.baraat.label": "خوشیوں کی تقریب",
    "events.baraat.name": "بارات",
    "events.baraat.subtitle": "خوشیوں اور مسرت کا دن",
    "events.baraat.hijri": "متوقع 26 شوال 1448 ہجری",

    "events.walima.label": "دعوتِ ولیمہ",
    "events.walima.name": "ولیمہ",
    "events.walima.subtitle": "برکتوں بھری محفل",
    "events.walima.hijri": "متوقع 27 شوال 1448 ہجری",

    "events.dateNote": "اسلامی تاریخیں متوقع ہیں اور مقامی رویتِ ہلال کے مطابق تبدیل ہو سکتی ہیں۔",

    // Dates
    "dates.march": "مارچ",
    "dates.april": "اپریل",
    "dates.saturday": "ہفتہ",
    "dates.sunday": "اتوار",

    // Common
    "common.time": "وقت",
    "common.venue": "مقام",
    "common.comingSoon": "بعد میں بتایا جائے گا",
    "common.countdown": "تقریب تک باقی وقت",
    "common.reference": "حوالہ",
    "common.readQuran": "قرآن مجید پڑھیں",
    "common.readHadith": "حدیث پڑھیں",

    // Time
    "time.days": "دن",
    "time.hours": "گھنٹے",
    "time.minutes": "منٹ",
    "time.seconds": "سیکنڈ",

    // Families
    "families.eyebrow": "دو خاندان، ایک خوشی",
    "families.title": "خاندان",
    "families.description": "دو خاندانوں کے خوبصورت ملاپ کی خوشی۔",

    "families.bride.kicker": "دلہن کا خاندان",
    "families.bride.role": "محبت اور دعاؤں کے ساتھ",

    "families.groom.kicker": "دولہے کا خاندان",
    "families.groom.role": "محبت اور دعاؤں کے ساتھ",

    "families.father": "والد",
    "families.grandfather": "دادا",
    "families.uncles": "چچا",
    "families.brothers": "بھائی",
    "families.cousins": "کزنز",
    "families.groom": "دولہا",

    // Quran
    "quran.eyebrow": "اللہ تعالیٰ کا کلام",
    "quran.title": "قرآن مجید سے",
    "quran.description": "محبت، رحمت، نکاح اور خاندان کے بارے میں قرآنی آیات۔",
    "quran.verseLabel": "قرآنی آیت",

    // Hadith
    "hadith.eyebrow": "تعلیماتِ نبوی ﷺ",
    "hadith.title": "فرامینِ رسول ﷺ",
    "hadith.description": "بابرکت ازدواجی زندگی اور حسنِ سلوک کے بارے میں رہنمائی۔",
    "hadith.label": "حدیث",

    // Footer
    "footer.message": "اللہ تعالیٰ اس رشتے کو محبت، باہمی سمجھ، صبر اور خوشیوں سے بھر دے۔ دونوں خاندانوں کو خیر و برکت کے ساتھ متحد رکھے اور آنے والا ہر قدم اپنی رحمتوں اور برکتوں سے نوازے۔",
    "footer.copyright": "اپنائیت اور خوشیوں کا جشن",

    // Countdown status
    "countdown.finished": "یہ تقریب شروع ہو چکی ہے۔",
    "countdown.unavailable": "تاریخ دستیاب نہیں۔"

  }

};


/* =========================================================
   03. QURAN CONTENT
========================================================= */

const quranVerses = {

  1: {
    arabic:
      "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ",

    english:
      "And of His signs is that He created for you from yourselves spouses that you may find tranquillity in them; and He placed between you affection and mercy. Indeed, in that are signs for a people who give thought.",

    urdu:
      "اور اس کی نشانیوں میں سے یہ ہے کہ اس نے تمہارے لیے تمہاری ہی جنس سے جوڑے بنائے تاکہ تم ان کے پاس سکون حاصل کرو، اور تمہارے درمیان محبت اور رحمت پیدا کر دی۔ یقیناً اس میں غور و فکر کرنے والوں کے لیے بہت سی نشانیاں ہیں۔"
  },


  2: {
    arabic:
      "وَأَنْكِحُوا الْأَيَامَىٰ مِنْكُمْ وَالصَّالِحِينَ مِنْ عِبَادِكُمْ وَإِمَائِكُمْ ۚ إِنْ يَكُونُوا فُقَرَاءَ يُغْنِهِمُ اللَّهُ مِنْ فَضْلِهِ ۗ وَاللَّهُ وَاسِعٌ عَلِيمٌ",

    english:
      "Marry off the unmarried among you, as well as the righteous of your male and female slaves. If they are poor, Allah will enrich them out of His bounty. For Allah is All-Bountiful, All-Knowing.",

    urdu:
      "تم میں سے جو لوگ مجرد ہوں، اور تمہارے نیک مرد اور عورت غلاموں میں سے جو نکاح کے قابل ہوں، ان کے نکاح کر دو۔ اگر وہ غریب ہوں تو اللہ اپنے فضل سے انہیں غنی کر دے گا۔ اللہ بڑی وسعت والا، خوب جاننے والا ہے۔"
  },


  3: {
    arabic:
      "وَآتُوا النِّسَاءَ صَدُقَاتِهِنَّ نِحْلَةً ۚ فَإِنْ طِبْنَ لَكُمْ عَنْ شَيْءٍ مِنْهُ نَفْسًا فَكُلُوهُ هَنِيئًا مَرِيئًا",

    english:
      "Give women their due dowries graciously. But if they willingly give up some of it to you, then enjoy it with a clear conscience.",

    urdu:
      "اور عورتوں کو ان کے مہر خوشدلی کے ساتھ ادا کرو۔ پھر اگر وہ اپنی خوشی سے اس میں سے کوئی چیز تمہیں چھوڑ دیں تو اسے خوشگواری سے کھاؤ۔"
  },


  4: {
    arabic:
      "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا يَحِلُّ لَكُمْ أَنْ تَرِثُوا النِّسَاءَ كَرْهًا ۖ وَلَا تَعْضُلُوهُنَّ لِتَذْهَبُوا بِبَعْضِ مَا آتَيْتُمُوهُنَّ إِلَّا أَنْ يَأْتِينَ بِفَاحِشَةٍ مُبَيِّنَةٍ ۚ وَعَاشِرُوهُنَّ بِالْمَعْرُوفِ ۚ فَإِنْ كَرِهْتُمُوهُنَّ فَعَسَىٰ أَنْ تَكْرَهُوا شَيْئًا وَيَجْعَلَ اللَّهُ فِيهِ خَيْرًا كَثِيرًا",

    english:
      "O believers! It is not permissible for you to inherit women against their will or mistreat them to make them return some of the dowry. Treat them fairly. If you happen to dislike them, you may dislike something in which Allah has placed much good.",

    urdu:
      "اے ایمان والو! تمہارے لیے جائز نہیں کہ تم عورتوں کو زبردستی وراثت میں لے لو، اور نہ انہیں اس لیے تنگ کرو کہ جو کچھ تم نے انہیں دیا ہے اس میں سے کچھ واپس لے لو۔ اور ان کے ساتھ اچھے طریقے سے زندگی بسر کرو۔ اگر تم انہیں ناپسند کرو تو ممکن ہے کہ تم ایک چیز کو ناپسند کرو اور اللہ نے اس میں بہت بھلائی رکھ دی ہو۔"
  },


  5: {
    arabic:
      "وَالَّذِينَ يَقُولُونَ رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",

    english:
      "And those who pray, 'Our Lord! Bless us with righteous spouses and offspring who will be the joy of our hearts, and make us models for the righteous.'",

    urdu:
      "اور وہ لوگ دعا کرتے ہیں کہ اے ہمارے رب! ہمیں ہماری بیویوں اور ہماری اولاد کی طرف سے آنکھوں کی ٹھنڈک عطا فرما اور ہمیں پرہیزگاروں کا پیشوا بنا۔"
  }

};


/* =========================================================
   04. HADITH CONTENT
========================================================= */

const hadiths = {

  1: {
    arabic:
      "يَا مَعْشَرَ الشَّبَابِ مَنِ اسْتَطَاعَ الْبَاءَةَ فَلْيَتَزَوَّجْ، فَإِنَّهُ أَغَضُّ لِلْبَصَرِ، وَأَحْصَنُ لِلْفَرْجِ، وَمَنْ لَمْ يَسْتَطِعْ فَعَلَيْهِ بِالصَّوْمِ، فَإِنَّهُ لَهُ وِجَاءٌ",

    english:
      "O young people! Whoever among you is able to marry should marry, because it helps him lower his gaze and guard his chastity. Whoever is unable to marry should fast, for fasting is a protection for him.",

    urdu:
      "اے نوجوانو! تم میں سے جو نکاح کی استطاعت رکھتا ہو اسے نکاح کر لینا چاہیے، کیونکہ یہ نگاہ کو نیچا رکھنے اور پاک دامنی کی حفاظت کرنے میں زیادہ مددگار ہے۔ اور جو نکاح کی استطاعت نہ رکھتا ہو اسے روزے رکھنے چاہییں، کیونکہ روزہ اس کے لیے حفاظت کا ذریعہ ہے۔"
  },


  2: {
    arabic:
      "أَكْمَلُ الْمُؤْمِنِينَ إِيمَانًا أَحْسَنُهُمْ خُلُقًا وَخِيَارُكُمْ خِيَارُكُمْ لِنِسَائِهِمْ خُلُقًا",

    english:
      "The most complete of the believers in faith is the one with the best character among them. And the best of you are those who are best to their women.",

    urdu:
      "ایمان کے اعتبار سے کامل ترین مومن وہ ہے جس کا اخلاق سب سے اچھا ہو، اور تم میں بہترین وہ ہیں جو اپنی عورتوں کے ساتھ بہترین اخلاق سے پیش آتے ہیں۔"
  }

};


/* =========================================================
   05. SAFE TRANSLATION FUNCTION
========================================================= */

function getTranslation(key, language = WeddingSite.state.language) {

  const dictionary = translations[language];

  if (!dictionary || !Object.prototype.hasOwnProperty.call(dictionary, key)) {
    console.warn("Missing translation:", language, key);
    return key;
  }

  return dictionary[key];

}


function applyTextTranslations(language) {

  document.querySelectorAll("[data-i18n]").forEach(element => {

    const key = element.getAttribute("data-i18n");

    const translatedText = getTranslation(key, language);

    if (translatedText !== key) {
      element.textContent = translatedText;
    }

  });

}


/* =========================================================
   06. LANGUAGE DIRECTION
========================================================= */

function setLanguageDirection(language) {

  const isUrdu = language === "ur";

  document.documentElement.lang = isUrdu ? "ur" : "en";
  document.documentElement.dir = isUrdu ? "rtl" : "ltr";

  document.body.classList.toggle("urdu-language", isUrdu);
  document.body.classList.toggle("english-language", !isUrdu);

}


/* =========================================================
   07. LANGUAGE SWITCHER
========================================================= */

function updateLanguageButtons(language) {

  document.querySelectorAll("[data-language]").forEach(button => {

    const isActive = button.dataset.language === language;

    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));

  });

}


function changeLanguage(language) {

  if (!Object.prototype.hasOwnProperty.call(translations, language)) {
    console.warn("Unsupported language:", language);
    return;
  }

  WeddingSite.state.language = language;

  setLanguageDirection(language);
  applyTextTranslations(language);
  updateLanguageButtons(language);

  closeMobileMenu();

  document.dispatchEvent(
    new CustomEvent("wedding:languageChanged", {
      detail: { language }
    })
  );

}


function initializeLanguageSwitcher() {

  document.querySelectorAll("[data-language]").forEach(button => {

    button.addEventListener("click", () => {

      changeLanguage(button.dataset.language);

    });

  });

  changeLanguage(WeddingSite.config.defaultLanguage);

}


/* =========================================================
   08. RELIGIOUS CONTENT RENDERING
========================================================= */

function renderReligiousContent() {

  Object.entries(quranVerses).forEach(([number, verse]) => {

    const arabicElement = document.querySelector(
      `[data-quran-arabic="${number}"]`
    );

    const englishElement = document.querySelector(
      `[data-quran-english="${number}"]`
    );

    const urduElement = document.querySelector(
      `[data-quran-urdu="${number}"]`
    );

    if (arabicElement) {
      arabicElement.textContent = verse.arabic;
    }

    if (englishElement) {
      englishElement.textContent = verse.english;
    }

    if (urduElement) {
      urduElement.textContent = verse.urdu;
    }

  });


  Object.entries(hadiths).forEach(([number, hadith]) => {

    const arabicElement = document.querySelector(
      `[data-hadith-arabic="${number}"]`
    );

    const englishElement = document.querySelector(
      `[data-hadith-english="${number}"]`
    );

    const urduElement = document.querySelector(
      `[data-hadith-urdu="${number}"]`
    );

    if (arabicElement) {
      arabicElement.textContent = hadith.arabic;
    }

    if (englishElement) {
      englishElement.textContent = hadith.english;
    }

    if (urduElement) {
      urduElement.textContent = hadith.urdu;
    }

  });

}


/* =========================================================
   09. PAKISTAN TIMEZONE COUNTDOWN
========================================================= */

function getPakistanMidnight(dateString) {

  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    return null;
  }

  const [year, month, day] = dateString.split("-").map(Number);

  const target = Date.UTC(year, month - 1, day) -
    WeddingSite.config.timezoneOffset;

  const check = new Date(target + WeddingSite.config.timezoneOffset);

  if (
    check.getUTCFullYear() !== year ||
    check.getUTCMonth() !== month - 1 ||
    check.getUTCDate() !== day
  ) {
    return null;
  }

  return target;

}


function padNumber(number) {

  return String(number).padStart(2, "0");

}


function updateCountdown(card) {

  const dateString = card.dataset.countdownDate;
  const targetTime = getPakistanMidnight(dateString);

  const daysElement = card.querySelector("[data-countdown-days]");
  const hoursElement = card.querySelector("[data-countdown-hours]");
  const minutesElement = card.querySelector("[data-countdown-minutes]");
  const secondsElement = card.querySelector("[data-countdown-seconds]");
  const statusElement = card.querySelector("[data-countdown-status]");

  if (!targetTime) {

    if (statusElement) {
      statusElement.textContent = getTranslation("countdown.unavailable");
    }

    return;

  }

  const remaining = targetTime - Date.now();

  if (remaining <= 0) {

    if (daysElement) daysElement.textContent = "00";
    if (hoursElement) hoursElement.textContent = "00";
    if (minutesElement) minutesElement.textContent = "00";
    if (secondsElement) secondsElement.textContent = "00";

    if (statusElement) {
      statusElement.textContent = getTranslation("countdown.finished");
    }

    return;

  }

  const seconds = Math.floor(remaining / 1000);

  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  if (daysElement) daysElement.textContent = padNumber(days);
  if (hoursElement) hoursElement.textContent = padNumber(hours);
  if (minutesElement) minutesElement.textContent = padNumber(minutes);
  if (secondsElement) secondsElement.textContent = padNumber(remainingSeconds);

  if (statusElement) {
    statusElement.textContent = "";
  }

}


function initializeCountdowns() {

  const countdownCards = document.querySelectorAll("[data-countdown]");

  if (!countdownCards.length) return;

  const updateAllCountdowns = () => {

    countdownCards.forEach(card => {
      updateCountdown(card);
    });

  };

  updateAllCountdowns();

  if (WeddingSite.state.countdownInterval) {
    clearInterval(WeddingSite.state.countdownInterval);
  }

  WeddingSite.state.countdownInterval = setInterval(
    updateAllCountdowns,
    1000
  );

}


/* =========================================================
   10. MOBILE NAVIGATION
========================================================= */

function getNavigationElements() {

  return {
    button: document.getElementById("mobile-menu-toggle"),
    navigation: document.getElementById("main-navigation")
  };

}


function openMobileMenu() {

  const { button, navigation } = getNavigationElements();

  if (!button || !navigation) return;

  navigation.classList.add("is-open");

  button.setAttribute("aria-expanded", "true");
  button.setAttribute("aria-label", "Close navigation menu");

  navigation.setAttribute("aria-hidden", "false");

}


function closeMobileMenu() {

  const { button, navigation } = getNavigationElements();

  if (!button || !navigation) return;

  navigation.classList.remove("is-open");

  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-label", "Open navigation menu");

  navigation.setAttribute("aria-hidden", "true");

}


function toggleMobileMenu() {

  const { button } = getNavigationElements();

  if (!button) return;

  const isOpen = button.getAttribute("aria-expanded") === "true";

  if (isOpen) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }

}


function initializeMobileNavigation() {

  const { button, navigation } = getNavigationElements();

  if (!button || !navigation) return;

  button.addEventListener("click", toggleMobileMenu);

  navigation.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", closeMobileMenu);

  });


  document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
      closeMobileMenu();
    }

  });


  document.addEventListener("click", event => {

    const isMobile = window.matchMedia("(max-width: 760px)").matches;

    if (!isMobile) return;

    const clickedInsideNavigation = navigation.contains(event.target);
    const clickedMenuButton = button.contains(event.target);

    if (!clickedInsideNavigation && !clickedMenuButton) {
      closeMobileMenu();
    }

  });


  window.addEventListener("resize", () => {

    if (window.innerWidth > 760) {
      navigation.classList.remove("is-open");

      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "Open navigation menu");

      navigation.removeAttribute("aria-hidden");
    } else {
      closeMobileMenu();
    }

  });


  if (window.innerWidth <= 760) {
    closeMobileMenu();
  } else {
    navigation.removeAttribute("aria-hidden");
  }

}


/* =========================================================
   11. ACTIVE NAVIGATION
========================================================= */

function initializeActiveNavigation() {

  const sections = document.querySelectorAll(
    "#events, #families, #quran, #hadith"
  );

  const navigationLinks = document.querySelectorAll(
    ".nav-link"
  );

  if (!sections.length || !navigationLinks.length) return;

  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if (!entry.isIntersecting) return;

      const sectionId = entry.target.id;

      navigationLinks.forEach(link => {

        const isCurrent = link.getAttribute("href") === `#${sectionId}`;

        if (isCurrent) {
          link.setAttribute("aria-current", "page");
        } else {
          link.removeAttribute("aria-current");
        }

      });

    });

  }, {
    root: null,
    rootMargin: "-30% 0px -60% 0px",
    threshold: 0
  });


  sections.forEach(section => {
    observer.observe(section);
  });

}


/* =========================================================
   12. BACK TO TOP
========================================================= */

function initializeBackToTop() {

  const button = document.getElementById("back-to-top");

  if (!button) return;

  const updateButtonVisibility = () => {

    button.classList.toggle(
      "is-visible",
      window.scrollY > 450
    );

  };

  window.addEventListener(
    "scroll",
    updateButtonVisibility,
    { passive: true }
  );

  button.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches ? "auto" : "smooth"
    });

  });

  updateButtonVisibility();

}


/* =========================================================
   13. STRUCTURE VALIDATION
========================================================= */

function validateWebsiteStructure() {

  const requiredSections = [
    "events",
    "families",
    "quran",
    "hadith"
  ];

  const missingSections = requiredSections.filter(id => {
    return !document.getElementById(id);
  });

  if (missingSections.length) {
    console.error(
      "Missing website sections:",
      missingSections
    );
  }


  const missingTranslations = [];

  document.querySelectorAll("[data-i18n]").forEach(element => {

    const key = element.dataset.i18n;

    ["en", "ur"].forEach(language => {

      if (!Object.prototype.hasOwnProperty.call(
        translations[language],
        key
      )) {
        missingTranslations.push(`${language}: ${key}`);
      }

    });

  });


  if (missingTranslations.length) {
    console.error(
      "Missing translation keys:",
      missingTranslations
    );
  }


  const expectedQuranVerses = Object.keys(quranVerses).length;
  const expectedHadiths = Object.keys(hadiths).length;

  const actualQuranCards = document.querySelectorAll(
    ".quran-card"
  ).length;

  const actualHadithCards = document.querySelectorAll(
    ".hadith-card"
  ).length;

  if (actualQuranCards !== expectedQuranVerses) {
    console.error(
      "Quran card count mismatch:",
      actualQuranCards,
      expectedQuranVerses
    );
  }

  if (actualHadithCards !== expectedHadiths) {
    console.error(
      "Hadith card count mismatch:",
      actualHadithCards,
      expectedHadiths
    );
  }

}


/* =========================================================
   14. WEBSITE INITIALIZATION
========================================================= */

function initializeWeddingWebsite() {

  renderReligiousContent();

  initializeLanguageSwitcher();

  initializeCountdowns();

  initializeMobileNavigation();

  initializeActiveNavigation();

  initializeBackToTop();

  validateWebsiteStructure();

  console.info(
    "Wedding Website initialized successfully."
  );

}


if (document.readyState === "loading") {

  document.addEventListener(
    "DOMContentLoaded",
    initializeWeddingWebsite,
    { once: true }
  );

} else {

  initializeWeddingWebsite();

}


/* =========================================================
   END OF WEDDING WEBSITE JAVASCRIPT
========================================================= */
