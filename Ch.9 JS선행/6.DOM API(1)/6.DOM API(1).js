// DOM API
// Document Object Model, Application Programming Interface
// JS에서 웹애플리케이션이 동작하기위해 HTML을 제어하는 명령들(번역하면)

let boxEl = document.querySelector('.box');

console.log(boxEl);



// HTML 요소(Element) 1개 검색/찾기
const boxEl = document.querySelector('.box');

// HTML 요소에 적용할 수 있는 메소드!
boxEl.addEventListener();

// 1 - 이벤트(Event, 상황)
boxEl.addEventListener('click', 2);

// 2 - 핸들러(Handler, 실행할 함수)
boxEl.addEventListener('click', function () {
    console.log('click');
});


const boxEl를 선언해주고 document.querySelector('.box');
