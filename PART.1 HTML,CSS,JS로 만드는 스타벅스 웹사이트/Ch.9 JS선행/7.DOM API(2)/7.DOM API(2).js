let boxEl = document.querySelector('.box');

console.log(boxEl);

boxEl.addEventListener('click', function(){
    console.log('click!!');
    boxEl.classList.add('active');
    console.log(boxEl.classList.contains('active')
    );
    boxEl.classList.remove('active');
    console.log(boxEl.classList.contains('active')
    );
});


/*
let boxEl = document.querySelector('.box');를
지정하면 box가 들어가는데 여기에 boxEl.classList.add('active');의 active를
추가하면 console안에는 box와 active가 들어있다
그러면 console.log(boxEl.classList.contains('active'));하면 true값이 나온다.
*/


/*
boxEl.classList.remove('active');는 boxEl설정한 변수의 안에 box와 active가
들어있는데 active를 삭제한다(remove)를 사용해준것이고
console.log(boxEl.classList.contains('active')) 하면 false나온다
*/


// 참고
/*
classList.add는 boxEl로 변수선언한 곳에 기본 box를 넣어줬지만 active까지
추가해줄때 classList.add 사용함
*/
// contains포함하고있다

