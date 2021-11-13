// 함수: 특정 동작(기능)을 수행하는 일부 코드를 집합(부분) Function이라고 한다.

// 함수 선언
function helloFunc() {
    // 실행 코드
    console.log(1234);
}

/*
function 함수를 사용하겠다고 시작할때 function이라고 써주고
function 뒤에 helloFunc(){}은 함수를 선언하는것이고 중괄호{}안에 들어가는
console.log(1234)는 함수를 선언한곳에 코드를 넣어준것
*/

// 함수 호출
helloFunc(); // 1234

/*
helloFunc();은 function helloFunc() {console.log(1234)}를 호출해줄때
사용하게 된다.
*/

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

function returnFunc() {
    return 123;
}

let a = returnFunc();

console.log(a); // 123

/*
function returnFunc() {return 123;}은 지정해준 function함수 returnFunc()
선언 안에 return 123; ,,, 123을 return을 해주고 123은 returnFunc()에 
들어가게 된다. 이는 let a = returnFunc();에서 returnFunc()에 123이 들어가게
되고 let a 선언해준 a가 123이 된다. 이는 밑의 console.log(a)를 지정했을때
console.log()의 괄호안에 a가 123이 되고 123이 출력된다.
*/

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 함수선언
function sum(a, b) { // a와 b는 매개변수(Parameters)
    return a+b;
}

// 재사용
let a = sum(1,2); // 1과 2는 인수(Arguments)
let b = sum(7, 12);
let c = sum(2, 4);

console.log(a, b, c); // 3, 19, 6

// 매개변수와 인수를 구분할것

/*  
function sum(a, b) {return a+b;}은 sum(a,b)를 선언해준 함수 function에서
{return a+b}를 해주면 a+b는 return되서 밖으로 나온다 여기서
let a = sum(1,2), let b = sum(7, 12), let c = sum(2, 4);에 return된
a+b가 적용된다 let a = 3, let b = 19, let c = 6이되고
console.log(a, b, c);는 3, 19, 6으로 적히게 된다.   
*/


// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ


// 기명함수 익명함수 중요함 **** 앞으로 배울 hoisting에서 중요하게 사용됨


// 기명(이름이 있는)함수
// 함수 선언!
function hello() {
    console.log('Hello~');
}

/*
function뒤에 hello()와 같은 선언이 있으면 기명함수
function함수에 hello() {}한것을 함수를 선언한다고 말한다.
*/


// 익명(이름이 없는)함수
// 함수 표현!
let world = function () {
    console.log('world~');
}
/*
익명함수는 데이터로 사용되며 let world = function() {}에서 
let world ← 여기에 선언해서 사용하기도 한다.
이름이 없는 익명함수에서 let world = function() {}에서 function을 world에
익명하는것을 함수를 표현한다라고한다.
*/


// 함수 호출!
hello(); // Hello~
/*
hello();는 function hello() {console.log('Hello~')}를 기명한것이기때문에
hello();를 호출했을때 Hello;가 나온다.
*/
world(); // world~
/*
world();는 let world = function () {console.log('world');}에서 function
안에 들어가는 {console.lg('world~');}가 let world에 함수표현(지명)되어있기
때문에 world();를 호출했을때 나오는것
*/

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 객체 데이터
const heropy = {
    name : 'HEROPY',
    age: 85,
    // 메소드(Method)
    getName : function () {
        return this.name;
    }
};
/*
const heropy = {
    name : 'HEROPY',
    age: 85,
    // 메소드(Method)
    getName : function () {
        return this.name;
    }
};

const heropy를 선언한 {}중괄호 안에 name age getName : function 여러가지의
속성들이 있다 근데 여기서 name과 age는 속성이 맞는데 getName은 안에 function
함수가 들어있다 여기서 선언한 heropy안에 getName과 같은 function함수를 가지고
있는 속성을 메소드라고 한다.
*/

const hisName = heropy.getName();
console.log(hisName); // HEROPY
// 혹은
console.log(heropy.getName()); // HEROPY

/*
const heropy = {
    name : 'HEROPY',
    age: 85,
    // 메소드(Method)
    getName : function () {
        return this.name;
    }
};

const heropy 변수의 내용의 값들중에 getName: function() {return this.name}
은 heropy변수의 안에 값들중에 name: 'Heropy'인 값을 return 해줄때 this.name
이라고 설정하고 getName: function() {return this.name}의 값에 따라서
const heropy변수의 안에 name: 'Heropy'은 getName에 담겨서 return된다 
............... 그리고
const hisName = heropy.getName(); ← const hisName을 지정해준 변수에
= heropy.getName()에 담겨진 HEROPY가 담겨지게 되고 hisName에 HEROPY가 담겨진다
그리고 console.log(hisName);에 의해서 실행
아니면 처음에 getName에 담겨진 Heropy를 바로 console.log(heropy.getName());
에 담아서 실행할수있다.
*/

// 중요하다
/*
추가설명 const heropy지정한 변수 속에 function 메소드가 들어가있는데 이부분을
구분해서 정리하는 것 (중요한 부분이다.)
*/