// 변수: 데이터를 저장하고 참조(사용)하는 데이터의 이름
// 변수의 종류: let, const

// 재사용이 가능
// 변수 선언!
let a = 2;
let b = 5;
/*
let a, b 등으로 변수를 지정해서 console.log(더하고, 빼고, 곱하고, 나누고)
할때 사용가능하다.
*/

console.log(a + b); // 7
console.log(a - b); // -3
console.log(a * b); // 10
console.log(a / b); // 0.4


// 값(데이터)의 재할당 가능!
let a = 12;
console.log(a); // 12

a = 999;
console.log(a); // 999

// let 변수선언 재할당 가능
/* 
let a = 12;를 변수 선언하고 12를 할당하지만 변수인 a를 a=999로 다시 할당 할
수 있음
*/

// 값(데이터)의 재할당 불가!
const a = 12;
console.log(a); // 12

a = 999;
console.log(a); // TypeError: Assignment to constant variable

/*
let은 변수 선언하고 값을 지정하고,,, 다시 기존의 선언한 변수에 다른 값을
재할당 할 수 있지만 const는 변수를 선언한 후 지정된 값에서 또 다른 값을
지정할수없음((const)재할당 할 수 없음)
*/



// 예약어: 특별한 의미를 가지고 있어, 변수나 함수 이름 등으로 사용할 수 없는 단어
let this = 'Hello!'; // SyntaxError
let if = 123; // SyntaxError
let break = true; // SyntaxError

/*
this, if, break 등은 JS에서 예약어로 되어있다. 그래서 변수선언으로
사용 할 수 없음 (예약어 엄청 많음 그래서 SyntaxError가 나타남)
*/