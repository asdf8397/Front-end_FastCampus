// 조건문
// 조건문: 조건의 결과(truthy, falsy)에 따라 다른 코드를 실행하는 구문(if, else)

let isShow = true;
let checked = false;

if(isShow) {
    console.log('Show!'); // Show
}
/*
if라는 조건이 있고 if(isShow) {console.log('Show!');}는 조건구문이다.
(isShow)괄호안에 들어있는것은 조건이고, (isShow)안에 들어있는 조건이 참이면
console.log를 출력했을때는 show가 나온다

위에서 선언한 let isShow = true; let isShow의 값이 true(참)이므로
밑의 if문의 조건에서 괄호(isShow)의 값이 true가 들어갔고
조건구문 {}안에 true값이 있으니 출력했을때 Show가 출력되어 나온다.
*/

if (checked) {
    console.log('Checked!');
}

/*
if (checked) {console.log('Checked!');}

여기의 if문에서 선언한 (checked)는 위의 선언한 let checked = false; 이므로
if()안에 checked(false)의 값이 들어가고 이하 console.log로 시작되는 {}의
조건구문에서 false이므로 출력되지 않는다.
*/

// if문의 true일때 else는
let aShow = true;

if (aShow) {
    console.log('Show!');
} else {
    console.log('Hide?');
}
/*
let aShow = true;로 선언한 aShow가 true이므로 if문의 ()에 들어가서
console.log('show!');에 의해서 출력될땐 show!로 출력된다.
그리고 이하 else{console.log('Hide?');}구문은 무시한다
*/

// if문의 false일때 else는
let bShow = false;

if (bShow) {
    console.log('Show!');
} else {
    console.log('Hidden?');
}
/*
let bShow = false;로 선언한 bShow를 if문의 ()안에 bShow를 넣고
console.log('show');로 돌리면 출력되지 않는다 왜냐? false이므로
이때 else {console.log('Hidden?);}에 의해서 Hidden?이 출력된다.

여기서 추가 참고하자면 if문에서 false일때 else는 if문에서 false이므로 출력되지
않으므로 다른(else)가 console.log를 통해서 출력되게 하는것이다.
그것이 Hidden?이다
*/