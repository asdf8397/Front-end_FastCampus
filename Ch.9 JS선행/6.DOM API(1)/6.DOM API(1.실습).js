let boxEl = document.querySelector('.box');

console.log(boxEl);

// boxEl.addEventListener(1,2); 인수를 2개 넣을수있다 안에 ('click',functions)
boxEl.addEventListener('click',function() {
    console.log('click');
});