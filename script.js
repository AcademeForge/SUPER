// FAQ
document.querySelectorAll(".faq").forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

// NORMAL POPUP
function openPopup(title, text) {
  const popup = document.getElementById("popup");
  const popupTitle = document.getElementById("popupTitle");
  const popupText = document.getElementById("popupText");

  popup.classList.remove("hidden");
  popup.classList.add("flex");

  popupTitle.innerText = title;
  popupText.innerText = text;

  document.body.style.overflow = "hidden";
}

// COURSE POPUP
function openCourse(title, duration, fees, syllabus, faculty) {
  const popup = document.getElementById("popup");
  const popupTitle = document.getElementById("popupTitle");
  const popupText = document.getElementById("popupText");

  popup.classList.remove("hidden");
  popup.classList.add("flex");

  popupTitle.innerText = title;

  popupText.innerHTML = `
    <div class="space-y-5">

      <div class="bg-gray-100 p-5 rounded-2xl">
        <h3 class="font-bold text-red-700 mb-2">Duration</h3>
        <p>${duration}</p>
      </div>

      <div class="bg-gray-100 p-5 rounded-2xl">
        <h3 class="font-bold text-red-700 mb-2">Fees</h3>
        <p>${fees}</p>
      </div>

      <div class="bg-gray-100 p-5 rounded-2xl">
        <h3 class="font-bold text-red-700 mb-2">Syllabus</h3>
        <p>${syllabus}</p>
      </div>

      <div class="bg-gray-100 p-5 rounded-2xl">
        <h3 class="font-bold text-red-700 mb-2">Faculty & Facilities</h3>
        <p>${faculty}</p>
      </div>

    </div>
  `;

  document.body.style.overflow = "hidden";
}

// VISION POPUP
function openVisionPopup() {
  openPopup(
    "Our Vision",
    `At AcademeForge, we believe that education should do more than prepare students for exams — it should prepare them for life, creativity, technology, and the rapidly changing digital world.

AcademeForge was created with a vision to bridge this gap.

Our mission is to build a modern learning ecosystem where students can discover practical skills, explore their creativity, develop confidence, and learn how to use technology and artificial intelligence in meaningful and productive ways.

We envision AcademeForge as a platform where learning feels inspiring, modern, and connected to the real world.

Through courses in Video & Media Editing, Creative & Graphic Design, Coding & Logic Building, Freelancing & Digital Monetization, AI Productivity, and future digital skills, we aim to give students access to the kind of education that schools often fail to provide.

Artificial Intelligence is transforming the future of education, careers, businesses, and creativity. Rather than fearing this change, we want students to learn how to adapt to it, grow with it, and use it responsibly.

AcademeForge is not just an edtech platform or an online course website. It is a movement toward practical, modern, future-focused education.

We imagine a future where students do not wait for opportunities — they create them.`
  );
}

// ABOUT POPUP
function openAboutPopup() {
  openPopup(
    "About AcademeForge",
    `AcademeForge is a modern student-focused learning platform founded in India with a vision to transform the way students learn, grow, and prepare for the future.

Built around the idea of “Learning Beyond the Classroom,” AcademeForge focuses on practical skills, digital creativity, AI-powered learning, and real-world knowledge that traditional education often fails to provide.

The journey of AcademeForge began in January 2024, when it was initially started as a small Telegram community dedicated to helping Class 10 students solve doubts, participate in live quizzes, engage in discussions, and support each other academically.

AcademeForge was founded by Devraj Kumar, who started the platform at the age of just 17 while studying in Class 10.

Today, AcademeForge is powered by a small but passionate team:

• Devraj Kumar — Founder
• Mandeep Harsh — Co-Founder
• Palak Kumari Jha — Moderator
• Ayush Raj — Moderator

At AcademeForge, we focus on teaching future-ready skills such as:

• Video & Media Editing
• Creative & Graphic Design
• Coding Basics & Logic Building
• Freelancing & Digital Monetization
• AI-Powered Productivity & Digital Skills

Our Motto:
“Learn Skills Schools Never Taught.”`
  );
}

// CLOSE POPUP
function closePopup() {
  const popup = document.getElementById("popup");

  popup.classList.add("hidden");
  popup.classList.remove("flex");

  document.body.style.overflow = "auto";
}

// Close popup when clicking outside popup box
document.addEventListener("click", function(event) {
  const popup = document.getElementById("popup");

  if (event.target === popup) {
    closePopup();
  }
});

// Optional: Disable right click and some inspect shortcuts
document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});

document.addEventListener("keydown", function(event) {
  const key = event.key.toUpperCase();

  if (
    event.keyCode === 123 ||
    (event.ctrlKey && event.shiftKey && ["I", "J", "C"].includes(key)) ||
    (event.ctrlKey && key === "U")
  ) {
    event.preventDefault();
  }
});