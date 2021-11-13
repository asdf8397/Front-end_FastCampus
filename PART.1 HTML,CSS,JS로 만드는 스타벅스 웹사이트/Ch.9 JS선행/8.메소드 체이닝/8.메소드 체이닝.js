const a = 'Hello~';
// split: 문자를 인수 기준으로 쪼개서 배열로 변환.
// reverse: 배열을 뒤집기.
// join: 배열을 인수 기준으로 문자로 병합해 반환
const b = a.split('').reverse().join(''); // 메소드 체이닝...

console.log(a); // Hello~
console.log(b); // ~olleH
/*
메소드 체이닝은 const b = a.split('').reverse().join('');처럼 const b를
선언한 변수의 값들 a.split('').reverse().join('')처럼 변수를 지정한 값에
줄줄이 연달아서 값들을 체인처럼 연결되어있는것들 메소드체이닝이라고 한다
*/

/*
console.log(a); Hello~가 나온것은 const a의 변수선언의 값이 'Hello'였고
console.log(a)로 출력하니까 Hello로 나온것이다.
*/

/*
console.log(b); ~olloeH가 나온 것은 const a = 'Hello~' 변수선언 값을 지정
해준 상태에서 const b 의 변수선언의 값에 a.splite('').reverse().join('');
의 값으로 넣으면 const b 변수의 안의 값들이 splite(문자를 쪼개서 배열하고)
.reverse 배열을 뒤집고.join 배열의 인수 기준으로 문자를 병합해서 const b선언
의 값으로 만들어진다
그래서 console.log로 출력하면 ~olleH로 출력이된다.
*/