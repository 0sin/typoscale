// 변수선언
const checkboxLists = document.querySelectorAll('.checkbox');
const fontListUl = document.querySelector('.font-list-ul');

// fontsize object
const listObjArray = [];


// 다크모드... 고민해봐야 함
const blackmodeBtn = document.querySelector('.blackmode-btn');
const bodyBg = document.querySelector('body');

blackmodeBtn.addEventListener('click', () => {
  bodyBg.classList.toggle('blackmode-bg');
  fontLists.forEach(li => {
    li.classList.toggle('blackmode-font')
  })
});

const letterSpacingRange = document.querySelector('#letter-spacing-range');
const rangeValueText = document.querySelector('.range-value-text');

letterSpacingRange.addEventListener('change', () => {
  let letterSpacingValue = letterSpacingRange.value;
  rangeValueText.innerHTML = letterSpacingValue;
  const fontLists = document.querySelectorAll('li');
  fontLists.forEach(li => {
    li.style.letterSpacing = `${letterSpacingValue}px`;
  })
});



// 생성자함수 작성
function CreateFontListObj(fontsize) {
  this.fontsize = fontsize,
  this.textString = `Noto Sans KR 노토 산스 ${fontsize}`
}


// 객체에 해당하는 <li> 생성
function createHTMLString(array) {
  const listStringArray = array.map((item, index, arr) => {return `
    <li class="notosanskr size${item.fontsize}">Noto Sans KR 노토 산스 ${item.fontsize}</li>
  `});

  // 콤마제거
  // const listString = listStringArray.toString().replace(/,/g, '');
  const listString = listStringArray.join('');


  // display
  fontListUl.innerHTML = listString;
}


// 오름차순 정렬 비교연산 함수
function compare(key) {
  return (a, b) => (a[key] > b[key]? 1 : (a[key] <b[key]? -1 : 0));
}



// checkbox 클릭 -> <li>태그 생성, 제거
checkboxLists.forEach(el => {
  el.addEventListener('click', function() {
    const condition = el.checked;
    const checkboxNumber = el.id;
  
    if(condition) {
      // 인스턴스 생성
      const listFontsizeItem = new CreateFontListObj(checkboxNumber);

      // 배열에 push
      listObjArray.push(listFontsizeItem);

      // 오름차순 정렬
      listObjArray.sort(compare('fontsize'));

      // <li> 태그 display
      createHTMLString(listObjArray);
    } 
    
    if(!condition) {
      // fontsize에 해당하는 배열 index 찾기
      const arrIndex = listObjArray.findIndex(obj => obj.fontsize === checkboxNumber);

      // 배열에서 <li> 제거
      listObjArray.splice(arrIndex, 1);

      // 제거된 <li> 태그 display
      createHTMLString(listObjArray);
    }
  });
});

