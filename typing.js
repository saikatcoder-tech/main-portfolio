const typedText = document.querySelector(".typing-text");
const words = [" a Frontend Developer", " an Engineer", " a Problem Solver"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const current = words[wordIndex];
  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typedText.textContent = current.slice(0, charIndex);

  let typingSpeed = isDeleting ? 80 : 120;

  if (!isDeleting && charIndex === current.length) {
    typingSpeed = 1000; // pause after full word
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length; // next word
    typingSpeed = 500; // pause before typing new word
  }

  setTimeout(typeEffect, typingSpeed);
}

typeEffect();
