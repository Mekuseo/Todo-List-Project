const background = document.querySelector('.background-image');
const blurNumber = document.querySelector('.blurr-number');

let initial = 0;

let readNumber = setInterval(blur, 10)

function mapRange(oldValue, oldMin, oldMax, newMin, newMax) {
  return (oldValue - oldMin) * (newMax - newMin) / (oldMax - oldMin) + newMin;
}
function blur() {
  initial++;
  if (initial > 99) {
    clearInterval(readNumber);
  }

  blurNumber.innerHTML = `${initial}%`;

  background.style.filter = `blur(${mapRange(initial, 0, 100, 30, 0)}px)`;
}
