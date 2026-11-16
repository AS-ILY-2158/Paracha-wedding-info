"use strict";

/* =========================================================
   WEDDING PORTAL
   Main JavaScript (Upgraded & Refactored)
   Naik Family & Ahmad Family
   Engineered by Abdullah Shah Paracha
========================================================= */


/* =========================================================
   01. WEBSITE CONFIGURATION & DEFAULT STATE
========================================================= */

const WeddingSite = {

  config: {
    timezoneOffset: 5 * 60 * 60 * 1000, // PKT (UTC+5)
    defaultLanguage: "en",
    adminPasscode: "paracha2027",
    coordinatorWhatsapp: "923445855144",
    expiryTimestampUTC: Date.UTC(2027, 3, 5, 0, 0, 0) - (5 * 60 * 60 * 1000), // 5 April 2027 12:00 AM PKT
    storageKeyEvents: "naik_family_wedding_events_v1"
  },

  state: {
    language: "en",
    activePage: "invitation",
    countdownInterval: null,
    activeAudio: null,
    activeAudioButton: null,
    guestData: {
      name: "",
      attendance: "family",
      event: "all",
      dateDay: "",
      time: "",
      venue: "",
      maps: ""
    },
    events: {
      nikah: {
        date: "2027-03-06",
        hijri: "Expected 27 Ramadan 1448 AH",
        time: "",
        venue: "",
        maps: ""
      },
      baraat: {
        date: "2027-04-03",
        hijri: "Expected 26 Shawwal 1448 AH",
        time: "",
        venue: "",
        maps: ""
      },
      walima: {
        date: "2027-04-04",
        hijri: "Expected 27 Shawwal 1448 AH",
        time: "",
        venue: "",
        maps: ""
      }
    }
  }

};


/* =========================================================
   02. LANGUAGE TRANSLATIONS (EN & URDU)
========================================================= */

const translations = {

  en: {
    // Brand & Navigation
    "brand.title": "Naik Family Invitation Card",
    "brand.tagline": "A Sacred Union & Celebration of Togetherness with the Ahmad Family",
    "nav.invitation": "Invitation",
    "nav.eventsFamilies": "Events & Families",
    "nav.quranHadith": "Quran & Hadith",

    // Page Flow Controls
    "flow.toEventsFamilies": "Next Page: Events & Families",
    "flow.backInvitation": "Previous: Invitation Card",
    "flow.toQuranHadith": "Next Page: Quran & Hadith",
    "flow.backEventsFamilies": "Previous: Events & Families",
    "flow.backToStart": "Return to Invitation Card",

    // Invitation Card (Page 1)
    "invite.eyebrow": "CORDIAL INVITATION FROM THE BRIDE'S FAMILY",
    "invite.hostHeading": "Haji Khalid Iqbal & Naik Family",
    "invite.leadText": "Request the honor of your gracious presence & heartfelt prayers on the auspicious wedding celebration uniting",
    "invite.brideFamily": "Naik Family",
    "invite.groomFamily": "Ahmad Family",
    "invite.honoredGuest": "HONORED GUEST",
    "invite.defaultGuest": "Respected Guest & Family",
    "invite.attendanceFamily": "With Family",
    "invite.attendanceIndividual": "Individual Invitation",
    "invite.eventLabel": "OCCASION",
    "invite.dateDayLabel": "DATE & DAY",
    "invite.hijriLabel": "HIJRI DATE",
    "invite.mapsBtn": "Google Maps Location",
    "invite.rsvpYes": "Yes, We Will Attend (InshaAllah)",
    "invite.rsvpNo": "Unable to Attend",
    "invite.rsvpNote": "Your RSVP confirmation is routed directly via WhatsApp to the Host Coordinator (Abdullah Shah Paracha).",

    // Events
    "events.eyebrow": "SAVE THE DATES",
    "events.title": "Wedding Celebrations",
    "events.description": "Three beautiful occasions hosted by Naik Family, uniting with the Ahmad Family.",

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
    "dates.january": "January",
    "dates.february": "February",
    "dates.march": "March",
    "dates.april": "April",
    "dates.may": "May",
    "dates.june": "June",
    "dates.july": "July",
    "dates.august": "August",
    "dates.september": "September",
    "dates.october": "October",
    "dates.november": "November",
    "dates.december": "December",
    "dates.sunday": "Sunday",
    "dates.monday": "Monday",
    "dates.tuesday": "Tuesday",
    "dates.wednesday": "Wednesday",
    "dates.thursday": "Thursday",
    "dates.friday": "Friday",
    "dates.saturday": "Saturday",

    // Common
    "common.time": "TIME",
    "common.venue": "VENUE",
    "common.comingSoon": "Coming Soon",
    "common.countdown": "COUNTDOWN",
    "common.reference": "REFERENCE",

    // Time
    "time.days": "Days",
    "time.hours": "Hours",
    "time.minutes": "Minutes",
    "time.seconds": "Seconds",

    // Families
    "families.eyebrow": "TWO FAMILIES, ONE CELEBRATION",
    "families.title": "The Families",
    "families.description": "Hosted with warmth by the Naik Family in celebration of our sacred union with the Ahmad Family.",
    "families.hostBadge": "★ DISTINGUISHED HOST ★",

    "families.bride.kicker": "THE BRIDE'S FAMILY (HOST)",
    "families.bride.role": "Warmly welcoming you with love and blessings",

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
    "quran.description": "Verses reflecting love, mercy, marriage and family. Listen to authentic Qari recitation and clear English & Urdu translations.",
    "quran.verseLabel": "QURANIC VERSE",

    // Hadith
    "hadith.eyebrow": "PROPHETIC GUIDANCE",
    "hadith.title": "Sayings of the Prophet ﷺ",
    "hadith.description": "Guidance for a blessed marriage and a life of goodness.",
    "hadith.label": "HADITH",

    // Footer
    "footer.message": "May Allah bless this union with love, understanding, patience, and happiness. May both families be united in goodness, and may every step ahead be filled with His mercy and blessings.",

    // Countdown status
    "countdown.finished": "This celebration has begun.",
    "countdown.unavailable": "Date unavailable."
  },

  ur: {
    // Brand & Navigation
    "brand.title": "نائیک فیملی دعوت نامہ",
    "brand.tagline": "احمد فیملی کے ساتھ ایک بابرکت رشتہ اور خوشیوں کا جشن",
    "nav.invitation": "دعوت نامہ",
    "nav.eventsFamilies": "تقریبات اور خاندان",
    "nav.quranHadith": "قرآن و حدیث",

    // Page Flow Controls
    "flow.toEventsFamilies": "اگلا صفحہ: تقریبات اور خاندان",
    "flow.backInvitation": "پچھلا صفحہ: دعوت نامہ",
    "flow.toQuranHadith": "اگلا صفحہ: قرآن و حدیث",
    "flow.backEventsFamilies": "پچھلا صفحہ: تقریبات اور خاندان",
    "flow.backToStart": "دعوت نامہ پر واپس جائیں",

    // Invitation Card (Page 1)
    "invite.eyebrow": "دلہن کے خاندان کی جانب سے پُرخلوص دعوت",
    "invite.hostHeading": "حاجی خالد اقبال اور نائیک فیملی",
    "invite.leadText": "آپ کو اس بابرکت اور پُرمسرت تقریبِ نکاح و شادی میں شرکت اور دعاؤں کی پُرخلوص دعوت دیتے ہیں جو متحد کر رہی ہے",
    "invite.brideFamily": "نائیک فیملی",
    "invite.groomFamily": "احمد فیملی",
    "invite.honoredGuest": "معزز مہمان",
    "invite.defaultGuest": "معزز مہمان معہ فیملی",
    "invite.attendanceFamily": "معہ فیملی",
    "invite.attendanceIndividual": "انفرادی دعوت",
    "invite.eventLabel": "تقریب",
    "invite.dateDayLabel": "تاریخ اور دن",
    "invite.hijriLabel": "ہجری تاریخ",
    "invite.mapsBtn": "گوگل میپس لوکیشن",
    "invite.rsvpYes": "جی ہاں، ان شاء اللہ ضرور شرکت کریں گے",
    "invite.rsvpNo": "معذرت، شرکت ممکن نہیں",
    "invite.rsvpNote": "آپ کی تصدیق براہِ راست واٹس ایپ کے ذریعے میزبان کوآرڈینیٹر (عبداللہ شاہ پراچہ) کو بھیجی جائے گی۔",

    // Events
    "events.eyebrow": "تاریخیں محفوظ رکھیں",
    "events.title": "شادی کی تقریبات",
    "events.description": "نائیک فیملی کی میزبانی میں تین خوبصورت تقریبات، احمد فیملی کے ساتھ خوشیوں کا سفر۔",

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
    "dates.january": "جنوری",
    "dates.february": "فروری",
    "dates.march": "مارچ",
    "dates.april": "اپریل",
    "dates.may": "مئی",
    "dates.june": "جون",
    "dates.july": "جولائی",
    "dates.august": "اگست",
    "dates.september": "ستمبر",
    "dates.october": "اکتوبر",
    "dates.november": "نومبر",
    "dates.december": "دسمبر",
    "dates.sunday": "اتوار",
    "dates.monday": "پیر",
    "dates.tuesday": "منگل",
    "dates.wednesday": "بدھ",
    "dates.thursday": "جمعرات",
    "dates.friday": "جمعہ",
    "dates.saturday": "ہفتہ",

    // Common
    "common.time": "وقت",
    "common.venue": "مقام",
    "common.comingSoon": "بعد میں بتایا جائے گا",
    "common.countdown": "تقریب تک باقی وقت",
    "common.reference": "حوالہ",

    // Time
    "time.days": "دن",
    "time.hours": "گھنٹے",
    "time.minutes": "منٹ",
    "time.seconds": "سیکنڈ",

    // Families
    "families.eyebrow": "دو خاندان، ایک خوشی",
    "families.title": "خاندان",
    "families.description": "نائیک فیملی کی پُرخلوص میزبانی میں احمد فیملی کے ساتھ اس بابرکت رشتے کا جشن۔",
    "families.hostBadge": "★ میزبان خاندان ★",

    "families.bride.kicker": "دلہن کا خاندان (میزبان)",
    "families.bride.role": "محبت اور دعاؤں کے ساتھ خوش آمدید",

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
    "quran.description": "محبت، رحمت، نکاح اور خاندان کے بارے میں قرآنی آیات۔ مستند قاری کی تلاوت اور اردو و انگریزی ترجمہ سماعت فرمائیں۔",
    "quran.verseLabel": "قرآنی آیت",

    // Hadith
    "hadith.eyebrow": "تعلیماتِ نبوی ﷺ",
    "hadith.title": "فرامینِ رسول ﷺ",
    "hadith.description": "بابرکت ازدواجی زندگی اور حسنِ سلوک کے بارے میں رہنمائی۔",
    "hadith.label": "حدیث",

    // Footer
    "footer.message": "اللہ تعالیٰ اس رشتے کو محبت، باہمی سمجھ، صبر اور خوشیوں سے بھر دے۔ دونوں خاندانوں کو خیر و برکت کے ساتھ متحد رکھے اور آنے والا ہر قدم اپنی رحمتوں اور برکتوں سے نوازے۔",

    // Countdown status
    "countdown.finished": "یہ تقریب شروع ہو چکی ہے۔",
    "countdown.unavailable": "تاریخ دستیاب نہیں۔"
  }

};


/* =========================================================
   03. QURAN & HADITH CONTENT + AUTHENTIC AUDIO STREAMS
========================================================= */

const quranVerses = {

  1: {
    surahAyah: "030021", // Surah Ar-Rum (30:21) - Mishary Rashid Alafasy EveryAyah CDN
    audioAr: "https://everyayah.com/data/Alafasy_128kbps/030021.mp3",
    audioEn: "https://everyayah.com/data/English/Sahih_Intnl_Ibrahim_Walk_192kbps/030021.mp3",
    audioUr: "https://everyayah.com/data/translations/urdu_shamshad_ali_khan_46kbps/030021.mp3",
    arabic:
      "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ",
    english:
      "And of His signs is that He created for you from yourselves spouses that you may find tranquillity in them; and He placed between you affection and mercy. Indeed, in that are signs for a people who give thought.",
    urdu:
      "اور اس کی نشانیوں میں سے یہ ہے کہ اس نے تمہارے لیے تمہاری ہی جنس سے جوڑے بنائے تاکہ تم ان کے پاس سکون حاصل کرو، اور تمہارے درمیان محبت اور رحمت پیدا کر دی۔ یقیناً اس میں غور و فکر کرنے والوں کے لیے بہت سی نشانیاں ہیں۔"
  },

  2: {
    surahAyah: "024032", // Surah An-Nur (24:32)
    audioAr: "https://everyayah.com/data/Alafasy_128kbps/024032.mp3",
    audioEn: "https://everyayah.com/data/English/Sahih_Intnl_Ibrahim_Walk_192kbps/024032.mp3",
    audioUr: "https://everyayah.com/data/translations/urdu_shamshad_ali_khan_46kbps/024032.mp3",
    arabic:
      "وَأَنْكِحُوا الْأَيَامَىٰ مِنْكُمْ وَالصَّالِحِينَ مِنْ عِبَادِكُمْ وَإِمَائِكُمْ ۚ إِنْ يَكُونُوا فُقَرَاءَ يُغْنِهِمُ اللَّهُ مِنْ فَضْلِهِ ۗ وَاللَّهُ وَاسِعٌ عَلِيمٌ",
    english:
      "Marry off the unmarried among you, as well as the righteous of your male and female slaves. If they are poor, Allah will enrich them out of His bounty. For Allah is All-Bountiful, All-Knowing.",
    urdu:
      "تم میں سے جو لوگ مجرد ہوں، اور تمہارے نیک مرد اور عورت غلاموں میں سے جو نکاح کے قابل ہوں، ان کے نکاح کر دو۔ اگر وہ غریب ہوں تو اللہ اپنے فضل سے انہیں غنی کر دے گا۔ اللہ بڑی وسعت والا، خوب جاننے والا ہے۔"
  },

  3: {
    surahAyah: "004004", // Surah An-Nisa (4:4)
    audioAr: "https://everyayah.com/data/Alafasy_128kbps/004004.mp3",
    audioEn: "https://everyayah.com/data/English/Sahih_Intnl_Ibrahim_Walk_192kbps/004004.mp3",
    audioUr: "https://everyayah.com/data/translations/urdu_shamshad_ali_khan_46kbps/004004.mp3",
    arabic:
      "وَآتُوا النِّسَاءَ صَدُقَاتِهِنَّ نِحْلَةً ۚ فَإِنْ طِبْنَ لَكُمْ عَنْ شَيْءٍ مِنْهُ نَفْسًا فَكُلُوهُ هَنِيئًا مَرِيئًا",
    english:
      "Give women their due dowries graciously. But if they willingly give up some of it to you, then enjoy it with a clear conscience.",
    urdu:
      "اور عورتوں کو ان کے مہر خوشدلی کے ساتھ ادا کرو۔ پھر اگر وہ اپنی خوشی سے اس میں سے کوئی چیز تمہیں چھوڑ دیں تو اسے خوشگواری سے کھاؤ۔"
  },

  4: {
    surahAyah: "004019", // Surah An-Nisa (4:19)
    audioAr: "https://everyayah.com/data/Alafasy_128kbps/004019.mp3",
    audioEn: "https://everyayah.com/data/English/Sahih_Intnl_Ibrahim_Walk_192kbps/004019.mp3",
    audioUr: "https://everyayah.com/data/translations/urdu_shamshad_ali_khan_46kbps/004019.mp3",
    arabic:
      "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا يَحِلُّ لَكُمْ أَنْ تَرِثُوا النِّسَاءَ كَرْهًا ۖ وَلَا تَعْضُلُوهُنَّ لِتَذْهَبُوا بِبَعْضِ مَا آتَيْتُمُوهُنَّ إِلَّا أَنْ يَأْتِينَ بِفَاحِشَةٍ مُبَيِّنَةٍ ۚ وَعَاشِرُوهُنَّ بِالْمَعْرُوفِ ۚ فَإِنْ كَرِهْتُمُوهُنَّ فَعَسَىٰ أَنْ تَكْرَهُوا شَيْئًا وَيَجْعَلَ اللَّهُ فِيهِ خَيْرًا كَثِيرًا",
    english:
      "O believers! It is not permissible for you to inherit women against their will or mistreat them to make them return some of the dowry. Treat them fairly. If you happen to dislike them, you may dislike something in which Allah has placed much good.",
    urdu:
      "اے ایمان والو! تمہارے لیے جائز نہیں کہ تم عورتوں کو زبردستی وراثت میں لے لو، اور نہ انہیں اس لیے تنگ کرو کہ جو کچھ تم نے انہیں دیا ہے اس میں سے کچھ واپس لے لو۔ اور ان کے ساتھ اچھے طریقے سے زندگی بسر کرو۔ اگر تم انہیں ناپسند کرو تو ممکن ہے کہ تم ایک چیز کو ناپسند کرو اور اللہ نے اس میں بہت بھلائی رکھ دی ہو۔"
  },

  5: {
    surahAyah: "025074", // Surah Al-Furqan (25:74)
    audioAr: "https://everyayah.com/data/Alafasy_128kbps/025074.mp3",
    audioEn: "https://everyayah.com/data/English/Sahih_Intnl_Ibrahim_Walk_192kbps/025074.mp3",
    audioUr: "https://everyayah.com/data/translations/urdu_shamshad_ali_khan_46kbps/025074.mp3",
    arabic:
      "وَالَّذِينَ يَقُولُونَ رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
    english:
      "And those who pray, 'Our Lord! Bless us with righteous spouses and offspring who will be the joy of our hearts, and make us models for the righteous.'",
    urdu:
      "اور وہ لوگ دعا کرتے ہیں کہ اے ہمارے رب! ہمیں ہماری بیویوں اور ہماری اولاد کی طرف سے آنکھوں کی ٹھنڈک عطا فرما اور ہمیں پرہیزگاروں کا پیشوا بنا۔"
  }

};


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
   04. IN-PAGE AUDIO RECITATION & TRANSLATION ENGINE
========================================================= */

function stopAllAudioPlayback() {

  if (WeddingSite.state.activeAudio) {
    try {
      WeddingSite.state.activeAudio.pause();
      WeddingSite.state.activeAudio.currentTime = 0;
    } catch (e) {
      // Ignore media cleanup error
    }
    WeddingSite.state.activeAudio = null;
  }

  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }

  if (WeddingSite.state.activeAudioButton) {
    WeddingSite.state.activeAudioButton.classList.remove("is-playing");
    WeddingSite.state.activeAudioButton = null;
  }

  document.querySelectorAll("[data-audio-status]").forEach(el => {
    el.textContent = "";
  });

}


function speakNaturalFallback(text, langCode, button, statusEl) {

  if (!("speechSynthesis" in window)) {
    if (statusEl) statusEl.textContent = "Audio unavailable on this browser.";
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = langCode;
  utterance.rate = 0.92;
  utterance.pitch = 1.0;
  utterance.volume = 1.0;

  const voices = window.speechSynthesis.getVoices();
  const prefix = langCode.split("-")[0].toLowerCase();
  const preferredVoice =
    voices.find(v => v.lang.toLowerCase().startsWith(prefix) && /natural|google|microsoft|neural/i.test(v.name)) ||
    voices.find(v => v.lang.toLowerCase().startsWith(prefix)) ||
    (prefix === "ur" ? voices.find(v => v.lang.toLowerCase().startsWith("hi")) : null);

  if (preferredVoice) {
    utterance.voice = preferredVoice;
  }

  button.classList.add("is-playing");
  WeddingSite.state.activeAudioButton = button;
  if (statusEl) statusEl.textContent = "Playing...";

  utterance.onend = () => {
    button.classList.remove("is-playing");
    if (WeddingSite.state.activeAudioButton === button) {
      WeddingSite.state.activeAudioButton = null;
    }
    if (statusEl) statusEl.textContent = "";
  };

  utterance.onerror = () => {
    button.classList.remove("is-playing");
    if (statusEl) statusEl.textContent = "";
  };

  window.speechSynthesis.speak(utterance);

}


function handleInPageAudioClick(button) {

  const type = button.dataset.audioType;
  const id = button.dataset.audioId;
  const lang = button.dataset.audioLang;
  const cardKey = `${type}-${id}`;
  const statusEl = document.querySelector(`[data-audio-status="${cardKey}"]`);

  const wasPlayingThis = button.classList.contains("is-playing");
  stopAllAudioPlayback();

  if (wasPlayingThis) {
    return;
  }

  if (type === "quran") {
    const verse = quranVerses[id];
    if (!verse) return;

    const streamUrl =
      lang === "ar" ? verse.audioAr :
      lang === "en" ? verse.audioEn :
      verse.audioUr;

    const fallbackText =
      lang === "ar" ? verse.arabic :
      lang === "en" ? verse.english :
      verse.urdu;

    const fallbackLocale =
      lang === "ar" ? "ar-SA" :
      lang === "en" ? "en-US" :
      "ur-PK";

    const audio = new Audio(streamUrl);
    audio.volume = 1.0;
    audio.preload = "auto";

    button.classList.add("is-playing");
    WeddingSite.state.activeAudio = audio;
    WeddingSite.state.activeAudioButton = button;
    if (statusEl) {
      statusEl.textContent = lang === "ar" ? "Reciting (Mishary Alafasy)..." : "Playing Translation...";
    }

    audio.addEventListener("ended", () => {
      button.classList.remove("is-playing");
      WeddingSite.state.activeAudio = null;
      WeddingSite.state.activeAudioButton = null;
      if (statusEl) statusEl.textContent = "";
    });

    audio.addEventListener("error", () => {
      WeddingSite.state.activeAudio = null;
      speakNaturalFallback(fallbackText, fallbackLocale, button, statusEl);
    });

    audio.play().catch(() => {
      WeddingSite.state.activeAudio = null;
      speakNaturalFallback(fallbackText, fallbackLocale, button, statusEl);
    });

  } else if (type === "hadith") {
    const item = hadiths[id];
    if (!item) return;

    const text =
      lang === "ar" ? item.arabic :
      lang === "en" ? item.english :
      item.urdu;

    const locale =
      lang === "ar" ? "ar-SA" :
      lang === "en" ? "en-US" :
      "ur-PK";

    speakNaturalFallback(text, locale, button, statusEl);
  }

}


function initializeInPageAudio() {

  if ("speechSynthesis" in window) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.getVoices();
    };
  }

  document.querySelectorAll(".audio-btn").forEach(button => {
    button.addEventListener("click", () => {
      handleInPageAudioClick(button);
    });
  });

}
/* =========================================================
   05. SAFE TRANSLATION & LANGUAGE DIRECTION
========================================================= */

function getTranslation(key, language = WeddingSite.state.language) {

  const dictionary = translations[language];

  if (!dictionary || !Object.prototype.hasOwnProperty.call(dictionary, key)) {
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

  // Re-apply dynamic guest & live event overrides after static i18n text updates
  applyLiveEventDataToDOM();
  applyGuestPersonalizationToCard();

}


function setLanguageDirection(language) {

  const isUrdu = language === "ur";

  document.documentElement.lang = isUrdu ? "ur" : "en";
  document.documentElement.dir = isUrdu ? "rtl" : "ltr";

  document.body.classList.toggle("urdu-language", isUrdu);
  document.body.classList.toggle("english-language", !isUrdu);

}


function updateLanguageButtons(language) {

  document.querySelectorAll("[data-language]").forEach(button => {

    const isActive = button.dataset.language === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));

  });

}


function changeLanguage(language) {

  if (!Object.prototype.hasOwnProperty.call(translations, language)) {
    return;
  }

  WeddingSite.state.language = language;

  setLanguageDirection(language);
  applyTextTranslations(language);
  updateLanguageButtons(language);

  closeMobileMenu();

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
   06. RELIGIOUS CONTENT RENDERING
========================================================= */

function renderReligiousContent() {

  Object.entries(quranVerses).forEach(([number, verse]) => {

    const arabicElement = document.querySelector(`[data-quran-arabic="${number}"]`);
    const englishElement = document.querySelector(`[data-quran-english="${number}"]`);
    const urduElement = document.querySelector(`[data-quran-urdu="${number}"]`);

    if (arabicElement) arabicElement.textContent = verse.arabic;
    if (englishElement) englishElement.textContent = verse.english;
    if (urduElement) urduElement.textContent = verse.urdu;

  });

  Object.entries(hadiths).forEach(([number, hadith]) => {

    const arabicElement = document.querySelector(`[data-hadith-arabic="${number}"]`);
    const englishElement = document.querySelector(`[data-hadith-english="${number}"]`);
    const urduElement = document.querySelector(`[data-hadith-urdu="${number}"]`);

    if (arabicElement) arabicElement.textContent = hadith.arabic;
    if (englishElement) englishElement.textContent = hadith.english;
    if (urduElement) urduElement.textContent = hadith.urdu;

  });

}


/* =========================================================
   07. TRUE 3-PAGE ARCHITECTURE & BRIDAL TRANSITIONS
========================================================= */

function switchPortalPage(targetPageKey, updateHash = true) {

  const validPages = ["invitation", "events-families", "quran-hadith"];
  const pageKey = validPages.includes(targetPageKey) ? targetPageKey : "invitation";

  WeddingSite.state.activePage = pageKey;
  stopAllAudioPlayback();

  document.querySelectorAll(".portal-page").forEach(pageEl => {
    const isMatch = pageEl.dataset.page === pageKey;
    if (isMatch) {
      pageEl.hidden = false;
      // Retrigger luxurious bridal animation cleanly
      pageEl.style.animation = "none";
      void pageEl.offsetWidth;
      pageEl.style.animation = "";
    } else {
      pageEl.hidden = true;
    }
  });

  document.querySelectorAll(".main-navigation .nav-link").forEach(link => {
    const isMatch = link.dataset.pageTarget === pageKey;
    link.classList.toggle("is-active", isMatch);
    if (isMatch) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  closeMobileMenu();

  if (updateHash) {
    const preservedSearch = window.location.search || "";
    history.replaceState(null, "", `${preservedSearch}#page-${pageKey}`);
  }

  window.scrollTo({
    top: 0,
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
  });

}


function initializeThreePageNavigation() {

  document.querySelectorAll("[data-page-target]").forEach(trigger => {
    trigger.addEventListener("click", event => {
      event.preventDefault();
      const target = trigger.dataset.pageTarget;
      switchPortalPage(target, true);
    });
  });

  const hash = window.location.hash.replace("#page-", "").replace("#", "");
  if (hash === "events-families" || hash === "events" || hash === "families") {
    switchPortalPage("events-families", false);
  } else if (hash === "quran-hadith" || hash === "quran" || hash === "hadith") {
    switchPortalPage("quran-hadith", false);
  } else {
    switchPortalPage("invitation", false);
  }

}


/* =========================================================
   08. LIVE EVENT CONTENT STORAGE & DYNAMIC DOM SYNC
========================================================= */

function loadSavedEventData() {

  try {
    const raw = localStorage.getItem(WeddingSite.config.storageKeyEvents);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    ["nikah", "baraat", "walima"].forEach(key => {
      if (parsed && parsed[key]) {
        WeddingSite.state.events[key] = {
          ...WeddingSite.state.events[key],
          ...parsed[key]
        };
      }
    });
  } catch (e) {
    // Fallback to defaults if storage is restricted
  }

}


function saveEventDataToStorage() {

  try {
    localStorage.setItem(
      WeddingSite.config.storageKeyEvents,
      JSON.stringify(WeddingSite.state.events)
    );
  } catch (e) {
    // Ignore storage quota errors
  }

}


function formatDateDisplayParts(dateStr) {

  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return null;
  const [y, m, d] = dateStr.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  if (isNaN(dt.getTime())) return null;

  const monthKeys = [
    "dates.january", "dates.february", "dates.march", "dates.april",
    "dates.may", "dates.june", "dates.july", "dates.august",
    "dates.september", "dates.october", "dates.november", "dates.december"
  ];
  const weekdayKeys = [
    "dates.sunday", "dates.monday", "dates.tuesday", "dates.wednesday",
    "dates.thursday", "dates.friday", "dates.saturday"
  ];

  return {
    day: String(d).padStart(2, "0"),
    month: getTranslation(monthKeys[dt.getUTCMonth()]),
    year: String(y),
    weekday: getTranslation(weekdayKeys[dt.getUTCDay()])
  };

}


function applyLiveEventDataToDOM() {

  const comingSoonText = getTranslation("common.comingSoon");

  ["nikah", "baraat", "walima"].forEach(key => {
    const ev = WeddingSite.state.events[key];
    const card = document.querySelector(`.event-card[data-event-key="${key}"]`);
    if (!card || !ev) return;

    card.dataset.countdownDate = ev.date;

    const parts = formatDateDisplayParts(ev.date);
    if (parts) {
      const dayEl = card.querySelector(`[data-event-day="${key}"]`);
      const monthEl = card.querySelector(`[data-event-month="${key}"]`);
      const yearEl = card.querySelector(`[data-event-year="${key}"]`);
      const weekdayEl = card.querySelector(`[data-event-weekday="${key}"]`);

      if (dayEl) dayEl.textContent = parts.day;
      if (monthEl) monthEl.textContent = parts.month;
      if (yearEl) yearEl.textContent = parts.year;
      if (weekdayEl) weekdayEl.textContent = parts.weekday;
    }

    const hijriEl = card.querySelector(`[data-event-hijri="${key}"]`);
    if (hijriEl && ev.hijri) hijriEl.textContent = ev.hijri;

    const timeEl = card.querySelector(`[data-event-time="${key}"]`);
    if (timeEl) timeEl.textContent = ev.time.trim() ? ev.time.trim() : comingSoonText;

    const venueEl = card.querySelector(`[data-event-venue="${key}"]`);
    if (venueEl) venueEl.textContent = ev.venue.trim() ? ev.venue.trim() : comingSoonText;

    const mapPill = card.querySelector(`[data-event-map="${key}"]`);
    if (mapPill) {
      if (ev.maps && ev.maps.trim()) {
        mapPill.href = ev.maps.trim();
        mapPill.hidden = false;
      } else {
        mapPill.href = "#";
        mapPill.hidden = true;
      }
    }
  });

}


/* =========================================================
   09. GUEST URL PERSONALIZATION & RSVP WHATSAPP AUTOMATION
========================================================= */

function parseGuestUrlParameters() {

  const params = new URLSearchParams(window.location.search);

  WeddingSite.state.guestData = {
    name: (params.get("guest") || "").trim(),
    attendance: (params.get("att") || "family").trim().toLowerCase(),
    event: (params.get("event") || "all").trim().toLowerCase(),
    dateDay: (params.get("date") || "").trim(),
    time: (params.get("time") || "").trim(),
    venue: (params.get("venue") || "").trim(),
    maps: (params.get("maps") || "").trim()
  };

}


function getEventSummaryDetails(eventCode) {

  const ev = WeddingSite.state.events;
  const comingSoon = getTranslation("common.comingSoon");

  const mapByCode = {
    nikah: {
      title: "Nikah Ceremony",
      date: "Saturday, 06 March 2027",
      hijri: ev.nikah.hijri || "Expected 27 Ramadan 1448 AH",
      time: ev.nikah.time || comingSoon,
      venue: ev.nikah.venue || comingSoon,
      maps: ev.nikah.maps || ""
    },
    baraat: {
      title: "Baraat Celebration",
      date: "Saturday, 03 April 2027",
      hijri: ev.baraat.hijri || "Expected 26 Shawwal 1448 AH",
      time: ev.baraat.time || comingSoon,
      venue: ev.baraat.venue || comingSoon,
      maps: ev.baraat.maps || ""
    },
    walima: {
      title: "Walima Reception",
      date: "Sunday, 04 April 2027",
      hijri: ev.walima.hijri || "Expected 27 Shawwal 1448 AH",
      time: ev.walima.time || comingSoon,
      venue: ev.walima.venue || comingSoon,
      maps: ev.walima.maps || ""
    },
    "baraat-walima": {
      title: "Baraat & Walima Celebrations",
      date: "Saturday 03 April & Sunday 04 April 2027",
      hijri: "26 & 27 Shawwal 1448 AH",
      time: ev.baraat.time || ev.walima.time || comingSoon,
      venue: ev.baraat.venue || ev.walima.venue || comingSoon,
      maps: ev.baraat.maps || ev.walima.maps || ""
    },
    all: {
      title: "Nikah, Baraat & Walima",
      date: "06 March, 03 April & 04 April 2027",
      hijri: "27 Ramadan & 26–27 Shawwal 1448 AH",
      time: ev.baraat.time || ev.nikah.time || ev.walima.time || comingSoon,
      venue: ev.baraat.venue || ev.nikah.venue || ev.walima.venue || comingSoon,
      maps: ev.baraat.maps || ev.nikah.maps || ev.walima.maps || ""
    }
  };

  return mapByCode[eventCode] || mapByCode.all;

}


function applyGuestPersonalizationToCard() {

  const g = WeddingSite.state.guestData;
  const info = getEventSummaryDetails(g.event);

  const guestNameEl = document.getElementById("invite-guest-name");
  const attBadgeEl = document.getElementById("invite-attendance-badge");
  const eventBadgeEl = document.getElementById("invite-event-badge");

  const detailEventEl = document.getElementById("invite-detail-event");
  const detailDateEl = document.getElementById("invite-detail-date");
  const detailHijriEl = document.getElementById("invite-detail-hijri");
  const detailTimeEl = document.getElementById("invite-detail-time");
  const detailVenueEl = document.getElementById("invite-detail-venue");
  const mapsBtnEl = document.getElementById("invite-maps-btn");

  const isIndividual = g.attendance === "individual";

  if (guestNameEl) {
    if (g.name) {
      guestNameEl.textContent = isIndividual ? g.name : `${g.name} & Family`;
    } else {
      guestNameEl.textContent = getTranslation("invite.defaultGuest");
    }
  }

  if (attBadgeEl) {
    attBadgeEl.textContent = isIndividual
      ? getTranslation("invite.attendanceIndividual")
      : getTranslation("invite.attendanceFamily");
  }

  if (eventBadgeEl) {
    eventBadgeEl.textContent = info.title;
  }

  if (detailEventEl) detailEventEl.textContent = info.title;
  if (detailDateEl) detailDateEl.textContent = g.dateDay || info.date;
  if (detailHijriEl) detailHijriEl.textContent = info.hijri;
  if (detailTimeEl) detailTimeEl.textContent = g.time || info.time;
  if (detailVenueEl) detailVenueEl.textContent = g.venue || info.venue;

  const finalMapUrl = g.maps || info.maps;
  if (mapsBtnEl) {
    if (finalMapUrl) {
      mapsBtnEl.href = finalMapUrl;
      mapsBtnEl.dataset.hasMap = "true";
    } else {
      mapsBtnEl.href = "#page-events-families";
      mapsBtnEl.dataset.hasMap = "false";
    }
  }

}


function initializeInvitationActions() {

  const mapsBtn = document.getElementById("invite-maps-btn");
  const yesBtn = document.getElementById("btn-rsvp-attend");
  const noBtn = document.getElementById("btn-rsvp-decline");
  const feedbackEl = document.getElementById("invite-rsvp-feedback");

  if (mapsBtn) {
    mapsBtn.addEventListener("click", event => {
      if (mapsBtn.dataset.hasMap !== "true") {
        event.preventDefault();
        if (feedbackEl) {
          feedbackEl.textContent = "Venue Google Maps Pin will be updated shortly by Naik Family.";
        }
      }
    });
  }

  const sendRsvpToCoordinator = (willAttend) => {
    const g = WeddingSite.state.guestData;
    const info = getEventSummaryDetails(g.event);
    const guestLabel = g.name || "Respected Guest";
    const attendanceLabel = g.attendance === "individual" ? "Individual" : "With Family";
    const statusText = willAttend
      ? "YES, We Will Attend (InshaAllah)"
      : "UNABLE to Attend (Sending Warm Duas)";

    const whatsappMessage =
      `Assalam-o-Alaikum Abdullah Shah Paracha,\n\n` +
      `*NAIK FAMILY WEDDING RSVP*\n` +
      `• *Guest Name:* ${guestLabel}\n` +
      `• *Attendance Type:* ${attendanceLabel}\n` +
      `• *Invited Occasion:* ${info.title}\n` +
      `• *RSVP Response:* ${statusText}\n\n` +
      `JazakAllah Khair!`;

    const waUrl = `https://wa.me/${WeddingSite.config.coordinatorWhatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

    if (feedbackEl) {
      feedbackEl.textContent = "Opening WhatsApp to send your RSVP confirmation to Abdullah Shah Paracha (+92 344 5855144)...";
    }

    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  if (yesBtn) {
    yesBtn.addEventListener("click", () => sendRsvpToCoordinator(true));
  }

  if (noBtn) {
    noBtn.addEventListener("click", () => sendRsvpToCoordinator(false));
  }

}


/* =========================================================
   10. HIDDEN ADMIN PANEL & WHATSAPP INVITATION GENERATOR
========================================================= */

function initializeHiddenAdminPanel() {

  const trigger = document.getElementById("secret-admin-trigger");
  const modal = document.getElementById("admin-modal");
  const closeBtn = document.getElementById("admin-close-btn");
  const authGate = document.getElementById("admin-auth-gate");
  const loginForm = document.getElementById("admin-login-form");
  const passwordInput = document.getElementById("admin-password-input");
  const authError = document.getElementById("admin-auth-error");
  const dashboard = document.getElementById("admin-dashboard");

  if (!trigger || !modal) return;

  const openAdminModal = () => {
    modal.hidden = false;
    if (!authGate.hidden && passwordInput) {
      passwordInput.value = "";
      passwordInput.focus();
    }
  };

  const closeAdminModal = () => {
    modal.hidden = true;
    if (authError) authError.textContent = "";
  };

  // Secret double-click trigger on Footer Monogram
  trigger.addEventListener("dblclick", openAdminModal);

  if (closeBtn) {
    closeBtn.addEventListener("click", closeAdminModal);
  }

  modal.addEventListener("click", event => {
    if (event.target === modal) {
      closeAdminModal();
    }
  });

  // Passcode Authentication (paracha2027)
  if (loginForm) {
    loginForm.addEventListener("submit", event => {
      event.preventDefault();
      const entered = (passwordInput.value || "").trim();
      if (entered === WeddingSite.config.adminPasscode) {
        authGate.hidden = true;
        dashboard.hidden = false;
        authError.textContent = "";
        populateEventEditorInputs();
      } else {
        authError.textContent = "Incorrect passcode. Access denied.";
        passwordInput.value = "";
        passwordInput.focus();
      }
    });
  }

  // Admin Tab Switching
  document.querySelectorAll("[data-admin-tab]").forEach(tabBtn => {
    tabBtn.addEventListener("click", () => {
      const targetTab = tabBtn.dataset.adminTab;
      document.querySelectorAll("[data-admin-tab]").forEach(btn => {
        const active = btn.dataset.adminTab === targetTab;
        btn.classList.toggle("is-active", active);
        btn.setAttribute("aria-selected", String(active));
      });
      document.querySelectorAll(".admin-tab-panel").forEach(panel => {
        panel.hidden = panel.id !== `tab-${targetTab}`;
      });
    });
  });

  // Tab 1: Personalized Guest Link Generator
  const genForm = document.getElementById("guest-generator-form");
  const popupBox = document.getElementById("generated-link-popup");
  const urlOutput = document.getElementById("generated-url-output");
  const summarySpan = document.getElementById("popup-guest-summary");
  const copyBtn = document.getElementById("btn-copy-generated-link");
  const waSendBtn = document.getElementById("btn-send-whatsapp-invite");
  const copyToast = document.getElementById("copy-toast-msg");

  if (genForm) {
    genForm.addEventListener("submit", event => {
      event.preventDefault();

      const guestName = document.getElementById("gen-guest-name").value.trim();
      const rawPhone = document.getElementById("gen-whatsapp").value.trim();
      const attendance = document.getElementById("gen-attendance").value;
      const eventSel = document.getElementById("gen-event").value;
      const dateDay = document.getElementById("gen-date-day").value.trim();
      const timeVal = document.getElementById("gen-time").value.trim();
      const venueVal = document.getElementById("gen-venue").value.trim();
      const mapsVal = document.getElementById("gen-maps").value.trim();

      if (!guestName) return;

      const baseUrl = `${window.location.origin}${window.location.pathname}`;
      const query = new URLSearchParams();
      query.set("guest", guestName);
      query.set("att", attendance);
      query.set("event", eventSel);
      if (dateDay) query.set("date", dateDay);
      if (timeVal) query.set("time", timeVal);
      if (venueVal) query.set("venue", venueVal);
      if (mapsVal) query.set("maps", mapsVal);

      const finalInviteUrl = `${baseUrl}?${query.toString()}#page-invitation`;
      const eventInfo = getEventSummaryDetails(eventSel);
      const attDisplay = attendance === "individual" ? "Individual" : "With Family";

      if (urlOutput) urlOutput.value = finalInviteUrl;
      if (summarySpan) summarySpan.textContent = `${guestName} (${attDisplay} • ${eventInfo.title})`;
      if (copyToast) copyToast.textContent = "";

      const inviteMsg =
        `بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\n\n` +
        `Assalam-o-Alaikum *${guestName}*,\n\n` +
        `*Haji Khalid Iqbal & Naik Family* cordially invite you (${attDisplay}) to grace the auspicious wedding celebrations uniting *Naik Family & Ahmad Family*.\n\n` +
        `• *Occasion:* ${eventInfo.title}\n` +
        `• *Date:* ${dateDay || eventInfo.date}\n` +
        `• *Time:* ${timeVal || eventInfo.time}\n` +
        `• *Venue:* ${venueVal || eventInfo.venue}\n\n` +
        `View your personalized Royal Digital Invitation Card & confirm RSVP here:\n${finalInviteUrl}\n\n` +
        `مؤدبانہ التماس: حاجی خالد اقبال اور نائیک فیملی آپ کی شرکت اور دعاؤں کے منتظر ہیں۔`;

      const cleanDigits = rawPhone.replace(/[^\d]/g, "");
      const waTarget = cleanDigits
        ? `https://wa.me/${cleanDigits}?text=${encodeURIComponent(inviteMsg)}`
        : `https://wa.me/?text=${encodeURIComponent(inviteMsg)}`;

      if (waSendBtn) waSendBtn.href = waTarget;
      if (popupBox) popupBox.hidden = false;
    });
  }

  if (copyBtn && urlOutput) {
    copyBtn.addEventListener("click", () => {
      urlOutput.select();
      urlOutput.setSelectionRange(0, 99999);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(urlOutput.value).then(() => {
          if (copyToast) copyToast.textContent = "✓ Personalized invitation link copied to clipboard!";
        }).catch(() => {
          document.execCommand("copy");
          if (copyToast) copyToast.textContent = "✓ Personalized invitation link copied!";
        });
      } else {
        document.execCommand("copy");
        if (copyToast) copyToast.textContent = "✓ Personalized invitation link copied!";
      }
    });
  }

  // Tab 2: Live Event & Venue Content Editor
  const editorForm = document.getElementById("live-content-editor-form");
  const resetBtn = document.getElementById("btn-reset-events");
  const saveMsg = document.getElementById("editor-save-msg");

  function populateEventEditorInputs() {
    ["nikah", "baraat", "walima"].forEach(key => {
      const ev = WeddingSite.state.events[key];
      const dEl = document.getElementById(`edit-${key}-date`);
      const hEl = document.getElementById(`edit-${key}-hijri`);
      const tEl = document.getElementById(`edit-${key}-time`);
      const vEl = document.getElementById(`edit-${key}-venue`);
      const mEl = document.getElementById(`edit-${key}-maps`);

      if (dEl) dEl.value = ev.date || "";
      if (hEl) hEl.value = ev.hijri || "";
      if (tEl) tEl.value = ev.time || "";
      if (vEl) vEl.value = ev.venue || "";
      if (mEl) mEl.value = ev.maps || "";
    });
  }

  if (editorForm) {
    editorForm.addEventListener("submit", event => {
      event.preventDefault();

      ["nikah", "baraat", "walima"].forEach(key => {
        WeddingSite.state.events[key] = {
          date: document.getElementById(`edit-${key}-date`).value.trim() || WeddingSite.state.events[key].date,
          hijri: document.getElementById(`edit-${key}-hijri`).value.trim(),
          time: document.getElementById(`edit-${key}-time`).value.trim(),
          venue: document.getElementById(`edit-${key}-venue`).value.trim(),
          maps: document.getElementById(`edit-${key}-maps`).value.trim()
        };
      });

      saveEventDataToStorage();
      applyLiveEventDataToDOM();
      applyGuestPersonalizationToCard();
      initializeCountdowns();

      if (saveMsg) {
        saveMsg.textContent = "✓ All event timings, venues, dates, and Google Maps pins published live!";
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      localStorage.removeItem(WeddingSite.config.storageKeyEvents);
      WeddingSite.state.events = {
        nikah: { date: "2027-03-06", hijri: "Expected 27 Ramadan 1448 AH", time: "", venue: "", maps: "" },
        baraat: { date: "2027-04-03", hijri: "Expected 26 Shawwal 1448 AH", time: "", venue: "", maps: "" },
        walima: { date: "2027-04-04", hijri: "Expected 27 Shawwal 1448 AH", time: "", venue: "", maps: "" }
      };
      populateEventEditorInputs();
      applyLiveEventDataToDOM();
      applyGuestPersonalizationToCard();
      initializeCountdowns();
      if (saveMsg) {
        saveMsg.textContent = "✓ Reset to default event schedule.";
      }
    });
  }

}


/* =========================================================
   11. PAKISTAN TIMEZONE COUNTDOWN
========================================================= */

function getPakistanMidnight(dateString) {

  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    return null;
  }

  const [year, month, day] = dateString.split("-").map(Number);

  const target = Date.UTC(year, month - 1, day) - WeddingSite.config.timezoneOffset;
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
  if (statusElement) statusElement.textContent = "";

}


function initializeCountdowns() {

  const countdownCards = document.querySelectorAll("[data-countdown]");
  if (!countdownCards.length) return;

  const updateAllCountdowns = () => {
    countdownCards.forEach(card => updateCountdown(card));
  };

  updateAllCountdowns();

  if (WeddingSite.state.countdownInterval) {
    clearInterval(WeddingSite.state.countdownInterval);
  }

  WeddingSite.state.countdownInterval = setInterval(updateAllCountdowns, 1000);

}


/* =========================================================
   12. MOBILE NAVIGATION & BACK TO TOP
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

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeMobileMenu();
      const adminModal = document.getElementById("admin-modal");
      if (adminModal && !adminModal.hidden) {
        adminModal.hidden = true;
      }
    }
  });

  document.addEventListener("click", event => {
    const isMobile = window.matchMedia("(max-width: 760px)").matches;
    if (!isMobile) return;
    if (!navigation.contains(event.target) && !button.contains(event.target)) {
      closeMobileMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      navigation.classList.remove("is-open");
      button.setAttribute("aria-expanded", "false");
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


function initializeBackToTop() {

  const button = document.getElementById("back-to-top");
  if (!button) return;

  const updateButtonVisibility = () => {
    button.classList.toggle("is-visible", window.scrollY > 380);
  };

  window.addEventListener("scroll", updateButtonVisibility, { passive: true });

  button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
    });
  });

  updateButtonVisibility();

}


/* =========================================================
   13. AUTO-EXPIRY CLOSURE (5 APRIL 2027 12:00 AM PKT)
   & ANTI-TAMPERING / ANTI-COPY SECURITY
========================================================= */

function checkPortalAutoExpiry() {

  const expiredScreen = document.getElementById("portal-expired-screen");
  if (!expiredScreen) return false;

  if (Date.now() >= WeddingSite.config.expiryTimestampUTC) {
    expiredScreen.hidden = false;
    stopAllAudioPlayback();
    document.body.style.overflow = "hidden";
    return true;
  }

  return false;

}


function initializeSecurityProtections() {

  // 1. Dynamic Subtle Diagonal Watermark
  const watermarkEl = document.getElementById("security-watermark");
  if (watermarkEl) {
    const guestTag = WeddingSite.state.guestData.name || "PRIVATE GUEST";
    const svgText = encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="360" height="220">` +
      `<text x="20" y="110" fill="#172c25" font-family="Georgia, serif" font-size="14" transform="rotate(-24 180 110)">` +
      `NAIK FAMILY INVITATION • ${guestTag.toUpperCase()}` +
      `</text></svg>`
    );
    watermarkEl.style.backgroundImage = `url("data:image/svg+xml,${svgText}")`;
  }

  // 2. Disable Right-Click Context Menu
  document.addEventListener("contextmenu", event => {
    event.preventDefault();
  });

  // 3. Disable Copy, Cut, Drag-and-Drop
  ["copy", "cut", "dragstart", "selectstart"].forEach(evtName => {
    document.addEventListener(evtName, event => {
      const tag = (event.target && event.target.tagName) || "";
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      event.preventDefault();
    });
  });

  // 4. Block DevTools, Source View, Save, Print & Screenshot Shortcuts
  document.addEventListener("keydown", event => {
    const key = (event.key || "").toUpperCase();
    const ctrlOrMeta = event.ctrlKey || event.metaKey;

    if (
      key === "F12" ||
      key === "PRINTSCREEN" ||
      (ctrlOrMeta && event.shiftKey && ["I", "J", "C", "S"].includes(key)) ||
      (ctrlOrMeta && ["U", "S", "P", "C"].includes(key))
    ) {
      event.preventDefault();
      event.stopPropagation();
    }
  });

  // 5. Privacy Blur Shield on Window Blur / Tab Switch / Screenshot Focus Loss
  const shieldEl = document.getElementById("privacy-shield");
  if (shieldEl) {
    const activateShield = () => shieldEl.classList.add("is-active");
    const deactivateShield = () => shieldEl.classList.remove("is-active");

    window.addEventListener("blur", activateShield);
    window.addEventListener("focus", deactivateShield);
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        activateShield();
      } else {
        deactivateShield();
      }
    });
  }

}


/* =========================================================
   14. WEBSITE INITIALIZATION
========================================================= */

function initializeWeddingWebsite() {

  // Enforce 5 April 2027 12:00 AM PKT Auto-Expiry immediately & every 30s
  if (checkPortalAutoExpiry()) return;
  setInterval(checkPortalAutoExpiry, 30000);

  loadSavedEventData();
  parseGuestUrlParameters();

  renderReligiousContent();
  applyLiveEventDataToDOM();
  applyGuestPersonalizationToCard();

  initializeLanguageSwitcher();
  initializeThreePageNavigation();
  initializeInPageAudio();
  initializeInvitationActions();
  initializeHiddenAdminPanel();
  initializeCountdowns();
  initializeMobileNavigation();
  initializeBackToTop();
  initializeSecurityProtections();

}


if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeWeddingWebsite, { once: true });
} else {
  initializeWeddingWebsite();
}


/* =========================================================
   END OF WEDDING PORTAL JAVASCRIPT
========================================================= */
