const selectFontStyle = document.querySelector('.select-box');

const optionItems = document.querySelector('.option-items');
const optionItem = document.querySelectorAll('.option-item');

// selectFontStyle.addEventListener('click', function() {
//   optionItemsBox.classList.toggle('open');
//   optionItems.classList.toggle('open');
// })

optionItem.forEach(e => {
  e.addEventListener('click', () => {
    const selectedItemText = document.querySelector('.selected-item');
    selectedItemText.innerHTML = e.innerHTML;
    optionItem.forEach(e => e.classList.remove('active'));
    e.classList.add('active');
  })
});


// optionItems.addEventListener('mousemove', () => {
//   optionItem.forEach(e => e.classList.remove('active'))
// })


document.addEventListener('click', e => {
  const optionItemsBox = document.querySelector('.selected-item-box');
  console.log(e);

  if(e.target.matches('.selected-item-box')) {
    optionItemsBox.classList.toggle('open');
    optionItems.classList.toggle('open');
  } else {
    optionItemsBox.classList.remove('open');
    optionItems.classList.remove('open');
  }
})