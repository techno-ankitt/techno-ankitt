// year update
document.getElementById('year').textContent = new Date().getFullYear();

// smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// contact form demo
function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  alert('Thanks! Your message was captured (demo). Replace handleSubmit to POST to a server.');
  form.reset();
  return false;
}

// active nav highlight on scroll
const navLinks = document.querySelectorAll('.main-nav .nav-link');
const sections = Array.from(navLinks).map(a => document.querySelector(a.getAttribute('href')));
function updateActive() {
  const offset = window.scrollY + 120;
  for (let i = 0; i < sections.length; i++) {
    const sec = sections[i];
    if (!sec) continue;
    const top = sec.offsetTop;
    const bottom = top + sec.offsetHeight;
    navLinks[i].classList.toggle('active', offset >= top && offset < bottom);
  }
}
window.addEventListener('scroll', updateActive);
updateActive();

// -----------------------------
// About section Read More
// -----------------------------
const aboutBtn = document.getElementById("readMoreBtn");
const aboutMore = document.getElementById("moreText");
if (aboutBtn) {
  aboutBtn.addEventListener("click", () => {
    const isVisible = aboutMore.style.display === "inline";
    aboutMore.style.display = isVisible ? "none" : "inline";
    aboutBtn.textContent = isVisible ? "Read More" : "Read Less";
  });
}

// -----------------------------
// Skills section Read More buttons
// -----------------------------
document.querySelectorAll(".service-card").forEach(card => {
  const btn = card.querySelector(".readMoreBtn");
  const more = card.querySelector(".moreText");

  if (btn && more) {
    btn.addEventListener("click", () => {
      const isVisible = more.style.display === "inline";
      more.style.display = isVisible ? "none" : "inline";
      btn.textContent = isVisible ? "Read More" : "Read Less";
    });
  }
});

// -----------------------------
// SMOOTH REVERSE-LOOP TYPEWRITER ANIMATION
// -----------------------------
const typingText = document.getElementById("typing-text");
const words = [
  "B.Tech CSE Student (Data Science)",
  "Python & Java Developer",
  "Machine Learning Enthusiast",
  "Data Analytics Learner"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  if (!typingText) return;

  const currentWord = words[wordIndex];

  if (isDeleting) {
    // Letter-by-letter backspace (Reverse Motion)
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    // Letter-by-letter typing (Forward Motion)
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  // Dynamic typing speed control
  let typeSpeed = isDeleting ? 30 : 60; // Deleting is slightly faster

  if (!isDeleting && charIndex === currentWord.length) {
    // Pause for 2 seconds once full word is typed
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    // Word fully deleted: Move to next word
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typeSpeed = 300; // Brief pause before typing next word
  }

  setTimeout(typeEffect, typeSpeed);
}

// Start animation on DOM load
document.addEventListener("DOMContentLoaded", typeEffect);
