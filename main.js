// const selectFontStyle = document.querySelector('.select-box');


// const optionItem = document.querySelectorAll('.option-item');

// selectFontStyle.addEventListener('click', function() {
//   optionItemsButton.classList.toggle('open');
//   optionItems.classList.toggle('open');
// })

// optionItem.forEach(e => {
//   e.addEventListener('click', () => {
//     const selectedItemText = document.querySelector('.selected-item');
//     selectedItemText.innerHTML = e.innerHTML;
//     optionItem.forEach(e => e.classList.remove('active'));
//     e.classList.add('active');
//   })
// });


// optionItems.addEventListener('mousemove', () => {
//   optionItem.forEach(e => e.classList.remove('active'))
// })



// 1. 셀렉트 클릭 이벤트
document.addEventListener('click', e => {
  const optionItemsButton = document.querySelector('.selected-item-button');
  const optionItems = document.querySelector('.option-items');
  const optionItem = document.querySelectorAll('.option-item');
  const selectedItem = document.querySelector('.selected-item');

  // 셀렉트 박스 클릭-오픈
  if(e.target.matches('.selected-item')) { //화살표 추가하기
    optionItemsButton.classList.toggle('open');
    optionItems.classList.toggle('open');
  } else {
    optionItemsButton.classList.remove('open');
    optionItems.classList.remove('open');
  }

  // 옵션 아이템 선택-아이템 텍스트 전달
  if(e.target.matches('.option-item')) {
    const selectItem = e.target;
    selectedItem.textContent = selectItem.textContent.trim();
    // optionItem.forEach(el => console.log(el));
    optionItem.forEach(el => el.classList.remove('active'));
    selectItem.classList.add('active');
  }
})