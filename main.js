// 0. 폰트 아이템 객체 생성

// 생성자 함수
function CreateFontListObj(fontSize) {
  this.fontStyle = 'Noto Sans KR',
  this.fontSize = fontSize,
  this.fontWeight = 400,
  this.fontLetterSpace = 1,
  this.color = '#000000',
  this.text = 'Noto Sans KR 노토 산스'
}

// 배열
const fontListArr = [];


// 1. 함수
// 1) 오름차순 정렬 비교연산 함수
function compare(key) {
  return (a, b) => (a[key] > b[key]? 1 : (a[key] <b[key]? -1 : 0));
}

// 2) <li> HTML 생성
function createHTMLString(array) {
  const listOl = document.querySelector('.font-preview-items');
  const listStringArray = array.map((item, index, arr) => {
    return `
    <li class="font-preview-item" style="font-size: ${item.fontSize}px">
      <div class="font-text" style="font-family: ${item.fontStyle}, serif">
        <div class="text-p">${item.text} 한글 폰트 지원</div>
      </div>
      <div class="font-size">${item.fontSize}</div>
    </li>
  `});

  // 콤마제거
  const listString = listStringArray.join('');

  // display
  listOl.innerHTML = listString;
}

// 3) Preview Text


// 4) 체크-배열 업데이트
const checkArr = function() {
  const checkboxs = document.querySelectorAll('.fscb');

  checkboxs.forEach(el => {
    if(el.checked) {
      const fontSize = el.id;
      const listItem = new CreateFontListObj(fontSize);
      fontListArr.push(listItem);
    }
  })

  // 오름차순 정렬
  fontListArr.sort(compare('fontSize'));
  // 내림차순 정렬
  // fontListArr.reverse();

  // <li> HTML 생성
  createHTMLString(fontListArr);
}

// 4) Change Font style 
const changeFontStyle = function(fontStyle) {
  fontListArr.forEach(e => {
    e.fontStyle = fontStyle;
    e.text = fontStyle;
  })
};







// 2. 클릭 이벤트
document.addEventListener('click', e => {
  const optionItemsButton = document.querySelector('.selected-item-button');
  const optionItems = document.querySelector('.option-items');
  const optionItem = document.querySelectorAll('.option-item');
  const selectedItem = document.querySelector('.selected-item');
  const toggleIcon = document.querySelector('.toggle-icon-img');

  // 1) 셀렉트 박스 클릭-오픈
  if(e.target.closest('.selected-item-button')) { //화살표 추가하기
    optionItemsButton.classList.toggle('open');
    optionItems.classList.toggle('open');
    toggleIcon.classList.toggle('open');
  } else {
    optionItemsButton.classList.remove('open');
    optionItems.classList.remove('open');
    toggleIcon.classList.remove('open');
  }

  // 옵션 아이템 선택-아이템 텍스트 전달
  if(e.target.matches('.option-item')) {
    const selectItem = e.target;
    selectedItem.textContent = selectItem.textContent.trim();
    optionItem.forEach(el => el.classList.remove('active'));
    selectItem.classList.add('active');
  }





  
  // 2) sidenav 클릭-active
  const sideNav = document.querySelector('.sidenav')
  const header = document.querySelector('#header')
  const main = document.querySelector('#main')

  if(e.target.closest('.detail-controls-button')) {
    sideNav.classList.add('active');
    header.classList.add('filter-blur');
    main.classList.add('filter-blur');
  }
  if(e.target.closest('.sidenav-close-button')) {
    sideNav.classList.remove('active');
    header.classList.remove('filter-blur');
    main.classList.remove('filter-blur');
  }
  



  // 3) Checkbox 클릭
  if(e.target.matches('.fscb')) {
    const checkedCondition = e.target.checked;
    const currentCheckedFontSize = e.target.getAttribute('id');

    // 3-1) 리스트 추가
    if(checkedCondition) {
      // 객체 생성
      const checkedItem = new CreateFontListObj(currentCheckedFontSize);

      // 배열 push
      fontListArr.push(checkedItem);

      // 오름차순 정렬
      fontListArr.sort(compare('fontSize'));

      // <li> HTML 생성
      createHTMLString(fontListArr);
    } 
    
    // 3-2) 리스트 제거
    else if(!checkedCondition) {
      // fontsize에 해당하는 배열 index 찾기
      const arrIndex = fontListArr.findIndex(obj => obj.fontSize === currentCheckedFontSize);

      // 배열에서 <li> 제거
      fontListArr.splice(arrIndex, 1);

      // 제거된 <li> 태그 display
      createHTMLString(fontListArr);
    }
  }



  // 4) Select font style
  if(e.target.matches('.option-item')) {
    const fontStyle = e.target.innerText;
    changeFontStyle(fontStyle);
    createHTMLString(fontListArr);

    /*
    switch(fontStyle) {
      case 'Roboto':
        changeFontStyle(fontStyle);
        createHTMLString(fontListArr);
        break;

      default:
        console.log('roboto 아님')
    }

    */
  }
  

})


document.querySelector('.preview-input').addEventListener('keyup', e => {
  const previewInputValue = document.querySelector('.preview-input').value;
  const previewTextItem = document.querySelectorAll('.text-p');
  previewTextItem.forEach(e => {
    e.innerText = previewInputValue;
  })
  return previewInputValue;
});







// 사이트 로드하자마자 fontsize list 생성
// 체크상황 판단해서 객체 생성
const windowRoadInit = (function() {

  checkArr()

})();
