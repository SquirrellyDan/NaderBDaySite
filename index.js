// index.js

//import JSConfetti from 'js-confetti'
// don't need above, got js-confetti from CDN download -> script tag in HTML

const jsConfetti = new JSConfetti()

function confettify() {
  jsConfetti.addConfetti()
}

// Confetti on page load
confettify()

// Confetti on click body (anywhere)
document.defaultView.addEventListener("click", confettify)
