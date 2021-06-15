const blackmodeBtn = document.querySelector('.blackmode-btn');
const fontList = document.querySelectorAll('li');
const fontListUl = document.querySelector('ul');
const bodyBg = document.querySelector('body');


blackmodeBtn.addEventListener('click', () => {
  bodyBg.classList.toggle('blackmode-bg');
  fontList.forEach(li => {
    li.classList.toggle('blackmode-font')
  })
});

const letterSpacingRange = document.querySelector('#letter-spacing-range');
const rangeValueText = document.querySelector('.range-value-text');

letterSpacingRange.addEventListener('change', () => {
  let letterSpacingValue = letterSpacingRange.value;
  rangeValueText.innerHTML = letterSpacingValue;
  fontList.forEach(li => {
    li.style.letterSpacing = `${letterSpacingValue}px`;
  })
});