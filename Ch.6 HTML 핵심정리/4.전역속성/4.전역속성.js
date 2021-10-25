const els = document.querySelectorAll('div') // js는 ('div')를 지정해줌으로써 div를 지정한 곳을 읽는다
els.forEach(el => {
    console.log(el.dataset.fruitName) // div를 지정해준곳에 fruit-name을 읽어라고 하는 명령문이다.
})