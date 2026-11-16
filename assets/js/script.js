"use strict";

/* =========================================================
   WEDDING WEBSITE - MAIN JAVASCRIPT
   Naik Family & Ahmad Family
========================================================= */

const ExpiryConfig = {
  expiryDate: new Date("2027-04-08T00:00:00").getTime()
};

/* 1. Auto Expiry (8 April 2027) */
function checkWebsiteExpiry() {
  if (Date.now() > ExpiryConfig.expiryDate) {
    document.body.innerHTML = `
      <div style="display:flex; justify-content:center; align-items:center; height:100vh; background:#101e19; color:#f8f5ee; text-align:center; padding:20px; font-family:serif;">
        <div>
          <h1 style="font-size:36px; color:#b99a5b; margin-bottom:15px;">Celebrations Concluded</h1>
          <p style="font-size:18px;">Shadi ki tamam taqreebaat khair-o-afiyat se mukammal ho chuki hain. Aapki shirkat aur duaon ka tah-e-dil se shukriya.</p>
        </div>
      </div>
    `;
  }
}

/* 2. Tab Navigation Switcher */
function switchTab(tabId) {
  document.querySelectorAll(".page-tab-content").forEach(tab => {
    tab.classList.remove("active-tab");
  });
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.remove("active");
  });

  const targetTab = document.getElementById(tabId);
  if (targetTab) {
    targetTab.classList.add("active-tab");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Activate matching buttons
  document.querySelectorAll(`.tab-btn`).forEach(btn => {
    if (btn.getAttribute("onclick")?.includes(tabId)) {
      btn.classList.add("active");
    }
  });
}

/* 3. Audio Speech (TTS) */
function playAudioText(text, langCode) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = langCode === 'ar' ? 'ar-SA' : (langCode === 'ur' ? 'ur-PK' : 'en-US');
    window.speechSynthesis.speak(utterance);
  } else {
    alert("Audio speech is not supported by your browser.");
  }
}

/* 4. RSVP WhatsApp Integration */
function confirmAttendanceRSVP() {
  const guestName = document.getElementById("card-guest-name").innerText;
  const message = encodeURIComponent(`Assalam-o-Alaikum! Main ${guestName} hoon aur main inshaAllah shadi ki taqreebaat mein zaroor shirkat karunga/karungi.`);
  window.open(`https://wa.me/923000000000?text=${message}`, '_blank');
}

/* 5. Hidden Admin Panel & Link Generator */
function openAdminPanel() {
  document.getElementById("adminModal").style.display = "flex";
}

function closeAdminPanel() {
  document.getElementById("adminModal").style.display = "none";
  document.getElementById("adminPass").value = "";
  document.getElementById("adminForm").style.display = "none";
}

function checkAdminPassword(val) {
  if (val === "paracha2027") {
    document.getElementById("adminForm").style.display = "block";
  } else {
    document.getElementById("adminForm").style.display = "none";
  }
}

function generateGuestLink() {
  const name = document.getElementById("guestNameInput").value || "Respected Guest";
  const event = document.getElementById("eventSelect").value;
  const baseUrl = window.location.href.split('?')[0];
  const uniqueLink = `${baseUrl}?guest=${encodeURIComponent(name)}&event=${encodeURIComponent(event)}`;
  
  const output = document.getElementById("generatedLinkOutput");
  output.innerHTML = `
    <p style="margin-bottom:8px;"><b>Generated Link:</b></p>
    <input type="text" value="${uniqueLink}" readonly style="width:100%; padding:6px; font-size:11px;" />
    <button onclick="sendOnWhatsApp('${uniqueLink}', '${name}')" style="margin-top:8px; background:#25D366; color:white; border:none; padding:10px 15px; border-radius:4px; cursor:pointer; width:100%; font-weight:bold;">📲 Send on WhatsApp</button>
  `;
}

function sendOnWhatsApp(link, name) {
  const text = encodeURIComponent(`Assalam-o-Alaikum ${name}! Aapko Naik & Ahmad Family ki shadi mein dawat di jati hai. Neeche diye gaye link par click karke apna invitation card dekhiye:\n\n${link}`);
  window.open(`https://wa.me/?text=${text}`, '_blank');
}

/* 6. Load Personalized Guest on Startup */
function loadPersonalizedInvitation() {
  const urlParams = new URLSearchParams(window.location.search);
  const guestParam = urlParams.get('guest');
  const eventParam = urlParams.get('event');

  if (guestParam) {
    document.getElementById("card-guest-name").innerText = decodeURIComponent(guestParam);
  }
  if (eventParam) {
    document.getElementById("card-event-details").innerText = `Invited for: ${decodeURIComponent(eventParam)}`;
  }
}

/* 7. Security Protection */
document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("copy", e => {
  e.preventDefault();
  alert("Copyright Protected © 2027 Abdullah Shah Paracha");
});

/* Initialize */
document.addEventListener("DOMContentLoaded", () => {
  checkWebsiteExpiry();
  loadPersonalizedInvitation();
});
