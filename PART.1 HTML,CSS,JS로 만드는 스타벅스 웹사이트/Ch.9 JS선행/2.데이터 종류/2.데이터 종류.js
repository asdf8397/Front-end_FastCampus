// 데이터 종류(자료형)
// String, Number, Boolean, Undefined, Null, Object, Array

// String(문자 데이터)
// 따옴표를 사용합니다

let myName = "Heropy";
// 변수선언 let을 붙이고 시작한다
// let myName = "Herpoy"; let myName을 지정한 변수에 ="Heropy"를 넣어준다

let email = "scv2314@naver.com";
let hello = `Hello ${myName}?!`;
// ``은 백틱기호(보관법)
/*
`${myName}`은 백틱기호를 사용해서 Hello{}?!,,, {}괄호 사이를
채워넣겠다는 것이다. myName은 Heropy가 나오게된다
*/

console.log(myName); //Herpoy
console.log(email); //scv2314@naver.com
console.log(hello); //Hello Heropy?!


// Number(숫자 데이터)
// 정수 및 부동소수점 숫자를 나타냅니다.
let number = 123;
let opacity = 1.57;
let line = "123"

console.log(number); // 123
console.log(opacity); // 1.57
console.log(console); // 문자(123)


// Boolean(블린 데이터)
// true, false 두 가지 값밖에 없는 논리 데이터입니다.
// Boolean 데이터는 참, 거짓 2가지를 가지는 데이터
let checked = true;
let isShow = false;

console.log(checked);
console.log(isShow);


// Undefined
// 값이 할당되지 않은 상태를 나타냅니다.
let undef;
let obj = { abc: 123 };

console.log(undef);
/*
let undef; 변수를 지정했지만 값을 넣지않은 상태를 console.log에서
출력하면 undefined라고 출력된다.
*/

console.log(obj.abc);
console.log(obj)
/* 
let obj = {abc: 123};이라고 변수를 지정한 상태에서 console.log(obj.abc)를
출력하면 let obj = {abc:123};을 지정한 abc의 값 123이 출력된다.
하지만 console.log(obj)를 출력하게되면 {abc:123}의 값이 통째로 출력된다.
*/
console.log(obj.xyz);
/** 
 * let undef;처럼 변수선언해주고 값을 지정해주지 않았을때도 출력할때
 * undefined가 출력됬지만 console.log(obj.xyz)처럼 변수선언을 해주지
 * 않은 것도 출력할땐 undefined가 출력된다.
*/


// Null
// 어떤 값이 의도적으로 비어있음을 의미합니다
let empty = null;

console.log(empty); //null
/*
null과 undefined의 차이 null은 의도적으로 null이라는 빈데이터(공간)을
지정한 것이며 undefined는 아예 지정하지 않아서 데이터가 없다는(공간)도
없다는 것을 가리키는것이다
둘다 비어있다는것 그러나 의도적으로 다르다

null: 지정해서 비어있다
undefined: 지정하지 않아서 비어있다.
*/


// Object(객체 데이터)
// 여러 데이터를 Key:Value 형태로 저장합니다. {}
let user = {
    your_name: 'Heropy',
    age: 85,
    isValid: true
};

console.log(user); // Heropy, 85, true
console.log(user.your_name); // Heropy
console.log(user.age); // 85
console.log(user.isValid); // true

/* let user = {your_name: 'Heropy', age: 85, isValid: true}는 {} 중괄호
안에 데이터들을 넣는 것을 Key:value라고 하며 이렇게 Key:value형태로 저장한
데이터를 let user라는 객체에 넣는것을 Object(객체 데이터)라고 한다.
*/


// Array(배열 데이터)
// 여러 데이터를 순차적으로 저장합니다. []
let fruits = ['Apple', 'Banana', 'Cherry'];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Cherry

/* 
let fruits = ['Apple', 'Banana', 'Cherry']; let fruits의 변수를
[] 대괄호안에 순차적으로 Apple, Banana, Cherry 지정하고
console.log(fruits[0], fruits[1], fruits[2])이렇게 순차적으로 지정해서
출력할때 Apple, Banana, Cherry이렇게 출력하게 만드는 것을 Array(배열 데이터)
라고 한다.
*/



// JS 복습

let URname = "Heropy";
let my_email = "scv2314@naver.com";
let Yohello = `Hello ${URname}`;

console.log(URname);
console.log(my_email);
console.log(Yohello);


// Object객체
let ur_user = {
    my:"Heropy",
    age: 100,
};

console.log(ur_user);
console.log(ur_user.my);
console.log(ur_user.age);

/*
let ur_user의 객체에 담긴 my와 age를 console.log로 출력하면
화면상에는 {my:"Heropy", age: 100}으로 출력된다.
하지만 console.log 각각의 내부 key:value를 출력하려면
console.log(ur_user.my), console.log(ur_user.age)로 출력해야 된다.
*/