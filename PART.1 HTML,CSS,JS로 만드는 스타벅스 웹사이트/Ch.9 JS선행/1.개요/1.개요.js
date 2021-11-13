console.log('Heroppy!')


    //표기법(javascript)
    /*
    dash-case(kebab-case)
    Snake-case
    camelCase
    PascelCase
    */

    /*
    Dash-case(kebab-case) (HTML, CSS에서 많이 사용됨)
    the-quick-brown-fox-jumps-over-the-lazy-dog
    
    단어와 단어 사이를 꼬챙이를 끼워져있어서 케밥케이스라고 한다
    */
    /*
    snake_case (HTML, CSS에서 사용한다.)
    the_quick_brown_fox_jumps_over_the_lazy_dog
    
    _로 묶여있다면 컴퓨터가 하나의 단어로 읽지만 _(언더바)를 구분해서 인식할수있다
    */
    /*    
    CamelCase (JS에서 사용한다.)
    theQuickBrownFoxJumpsOverTheLazyDog
    
    가장 첫번쨰로 시작하는 단어는 소문자로 시작하고 그 다음부터 오는 
    단어는 대문자로 오는 단어들로 이루어져있다.
    */
    /*
    PascalCase (JS에서 사용한다.)
    theQuickBrownFoxJumpsOverTheLazyDog
    
    CamelCase와 다르게 PascaleCase는 첫번째 글자는 대문자이다
    그 다음 단어들도 대문자이다.
    */
    /*
    Zero-based Numbering: 
    0기반 번호 매기기 
    특수한 경우를 제외하고 0부터 숫자를 시작합니다.
    JS는 숫자를 샐때 숫자 0부터 시작하게 된다.
    */


let fruits =['Apple','Banana','Cherry'];
// let fruits ← 변수선언 ['Apple','Banana','Cherry'];
// js는 숫자를 매길때 0부터 매기게 된다. Java도 같다

console.log(fruits[0]); // 'Apple'
console.log(fruits[1]); // 'Banana'
console.log(fruits[2]); // 'Cherry'

console.log(new Date('2021-01-30').getDay()); // 6, 토요일
console.log(new Date('2021-01-31').getDay()); // 0, 일요일
console.log(new Date('2021-02-01').getDay()); // 1, 월요일
/*
console.log(new Date('2021-01-30').getDay());
는 2021-01-30일이.getDay()몇 일인지 찾을때 사용하는 것이고 new Date는 몇일인지
숫자를 표기해달라고 할때 new Date를 사용하게 된다

2021-01-31, 2021-02-01 또한 같다.
*/
    
// 주석 Comment

// 한줄 메모
/* 한 줄 메모 */

/**
 * 여러 줄
 * 메모1
 * 메모2
 */