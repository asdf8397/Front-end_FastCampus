// DOM API
// Document Object Model, Application Programming Interface
// JS에서 웹애플리케이션이 동작하기위해 HTML을 제어하는 명령들(번역하면)

let boxEl = document.querySelector('.box');

console.log(boxEl);

/*
let boxEl = document.querySelector('box');
let boxEl 선언곳에 document.querySelector('box');는 HTML상의 Box글자를
지칭해서 그 Box를 담을때 let boxEl에 담을때 document.querySelector('box');
를 사용해서 담는다 'box'는 HTML상의 글자를 지칭하는것
참고 HTML상의 BOX이니까 담을때도 '.box'이런식으로 담아야된다
*/


// // HTML 요소(Element) 1개 검색/찾기
const boxEl = document.querySelector('.box');

// // HTML 요소에 적용할 수 있는 메소드!
boxEl.addEventListener();

// // 1 - 이벤트(Event, 상황)
boxEl.addEventListener('click', 2);
/**
 * ('click',2);에서 click은 이벤트 클릭했을때 , 2번에 의해서 console에
 * 적히게된다 이는 function의 코드로 연결
 */

// // 2 - 핸들러(Handler, 실행할 함수)
boxEl.addEventListener('click', function () {
    console.log('click');
});


/*
const boxEl를 선언해주고 document.querySelector('.box');를 지정
document.querySelector('.box');를 const boxEl을 지정해준 변수에 넣어준다(지정)
boxEl.addEventListener('click', function () {console.log('click')});
boxEl을 지정한 변수의 뒤에 addEventListener()를 지정해준다 이는 HTML이 지정한
화면에서 BOX를 마우스가 클릭하게되면 function() {console.log('click')};
function함수에 의해서 콘솔(console)에 click이라고 적히게 된다는 코드이다.
*/

// 참고 
/*
document.querySelector에서 querySelector는 HTML을 찾알때 querySelector
를 사용하게 되고 querySelector('.box');라고 지정하면 HTML에서 Box를 찾으면
찾은 Box를 가지고 지정한 변수에게 반환(들어가게 된다)하게 된다
*/


// HTML 요소(Element) 검색/찾기
const boxEl = document.querySelector('.box');

// 요소의 클래스 정보 객체 활용!
boxEl.classList.add('active');
let isContains = boxEl.classList.contains('active');
console.log(isContains); // true

boxEl.classList.remove('active');
let onContains = boxEl.classList.contains('active');
console.log(onContains); // false

const boxEl = document.querySelector('.box');

/*
classlist는 엘리먼트 클래스 목록에 접근할 수있게하는 방식
쉽게 말해서 const boxEl = document.querySelector('.box');를 boxEl로
선언하고 '.box'로 지정했지만 여기에 boxEl에 active를 넣어줄때 classlist.add
classlist.remove, classlist.item, classlist.toggle, classlist.Contains
classlist.replace식으로 사용한다.
*/

/*
const boxEl = document.querySelector('.box');로 선언한 boxEl에
boxEl.classList.add('active');를 넣어주고 (.add)
let isContains = boxEl.classList.contains('active');를 해주면
↑
active를 포함한 문자코드를 isContains의 변수선언에 넣어준다
console.log(isContains); 변수선언한 isContains을 출력하기위해서
console.log(isContains);해주면
console의 결과값은 true
*/

/*
const boxEl = document.querySelector('.box');를 선언한 boxEl에 
boxEl.classList.remove('active'); 문자 active를 remove삭제해준다고 지정하고
변수선언 onContains를 해줬을때 결과값 console은 false이다
let onContains = boxEl.classList.contains('active');에서 contains가 
포함하고있다라고 나타내는 하지만 문자 'active'는 remove된 상태이다
그래서 결과값은 false없는 상태로 나타난다
*/


// 참고
// contains는 포함하고있다는 코드다
// let isContais 변수에 contains('active');를 포함한다는 코드