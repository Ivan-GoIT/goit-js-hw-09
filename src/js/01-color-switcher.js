import '../sass/common.scss';
import '../sass/01-color-switcher.scss';

ref1 = {
  buttonStartEl: document.querySelector('[data-start]'),
  buttonStopEl: document.querySelector('[data-stop]'),
};

let colorChangeInterval = null;

ref1.buttonStartEl.addEventListener('click', evt => {
  colorChangeInterval = onButtonStartClick(evt);
});
ref1.buttonStopEl.addEventListener('click', onButtonStopClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onButtonStartClick(evt) {
  evt.target.setAttribute('disabled', 'disabled');
  return setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onButtonStopClick(
  evt,
  buttonStartEl = ref1.buttonStartEl,
  interval = colorChangeInterval
) {
  buttonStartEl.removeAttribute('disabled');
  clearInterval(colorChangeInterval);
}

