// Q&A
/*
Q. The quick brown fox 위 문장을 camelCase(낙타 표기법)로 작성하십시오.
A.theQuickBrownFox
 */

/*
Q. let fruits = ['Apple','Banana','Cherry'];
위 데이터를 활용해 'Banana'를 콘솔 출력하십시오.
A. console.log(fruits[1]);
 */

/*
Q. 불린 데이터(Boolean)에서 거짓을 의미하는 데이터는?
A. false
 */

/*
Q. '값이 의도적으로 비어있음'을 의미하는 데이터는?
A. null
 */

/*
Q. {} 위 데이터의 종류는?
A. Object(객체데이터)
 */

/*
Q. let obj = {abc: 123};
    console.log(obj.xyz);
위 코드를 통해 콘솔 출력될 값(데이터)은?
A. undefined
 */

/*
Q. 값(데이터)을 재할당할 수 없는 변수 선언 키워드는?
A. const
 */

/*
Q. 함수에서 값(데이터)을 반환하기 위해 사용하는 키워드는?
A. return
 */

/*
Q. sum(2,4);
위 함수 호출에서 2,4를 무엇이라 하는가?
A. 인수(Arguments)
 */

/*
Q. function sum(a,b) {
    return a+b;
}
위 함수 선언의 a,b와 같이 함수 호출에서 전달받은 인수를
함수 내부로 전달하기 위한 변수를 무엇이라 하는가?

A. 매개변수(Parameters)
 */

/*
Q. 이름이 없는 함수를 무엇이라 하는가?
익명함수(Anonymous Function)
 */

/*
Q. hello 이름의 함수 표현을 작성하고 호출하시오!
A. const hello = function() {};
hello();
 */

/*
Q. const user = {
    getName: function () {}
}
위 코드의 getName과 같이 함수가 할당된 객체 데이터의 속성(Property)을
무엇이라고 하는가?
A. 메소드(Method)
*/

/*
Q. 조건이 참(true)인 조건문을 작성하시오.
A. if(true) {}
*/

/*
Q. 가져온 JS파일을 HTML 문서 분석 이후에 실행하도록 지시하는
HTML속성(Attribute)은?
A. defer
*/

/*
Q.<div class="box">BOx!!</div>
위 HTML 요소의 내용(COntent)을 콘솔 출력하시오!
A. const boxEl = document.querySelector('box');
console.log(boxEl.textContent);
 */

/*
Q. 값(데이터)을 재할당할 목적의 변수 선언 키워드는?
let
 */

/*
Q. const boxEl =document.querySelector('.box');
위 코드의 boxEl 요소에 클릭(Click)이벤트를 추가해 클릭시 'Hello~'를 
콘솔 출력하십시오.
A. boxEl.addEventListener('click',function () {
    console.log('Hello~');
})
 */

/*
Q. <div>1</div>
    <div>2</div>
    위 2개의 DIV요소에 JS로 Class="hello"를 추가하십시오!

A. const divEls = document.querySelectorAll('div');
    divEls.forEach(function(divEl) {
        divEl.classList.add('hello');
    })
 */

/*
Q. 'HEROPY'.split('').reverse().join('');
위와 같이, 메소드를 이어 작성하는 방법을 무엇이라 하는가?
A. 메소드체이닝(Method Chaining)
 */

/*
Q. const boxEl =document.querySelector('.box');
위 코드의 boxEl 요소에 HTML 클래스 속성의 값으로 'activ'가 포함되어 있으면,
'포함됨ㅃ'을 콘솔출력하십시오.

A. if(boxEl.classList.contains('active')) {
    console.log('포함됨!');
}
*/


