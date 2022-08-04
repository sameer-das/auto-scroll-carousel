function carousel() {
    const carouselSlider = document.querySelector('.carousel_slider');
    const list = document.querySelector('.carousel_list');
    const items = document.querySelectorAll('.carousel_item');
    console.log(list.offsetWidth)
    let list2;

    let width =  list.offsetWidth;
    let x = 0;
    let x2 = width;
    let speed = 1;
    function clone() {
         list2 = list.cloneNode(true);
         carouselSlider.appendChild(list2);
         list2.style.left = `${width}px`
    }

    function moveFirst(){
        x = x - speed;
        if(width >= Math.abs(x)) {
            list.style.left =  `${x}px`;
        }else {
            x = width;
        }
    }

    function moveSecond(){
        x2 = x2 - speed;
        if(list2.offsetWidth >= Math.abs(x2)) {
            list2.style.left =  `${x2}px`;
        }else {
            x2 = width;
        }
    }

    clone();

    let a = setInterval(moveFirst, 20);
    let b = setInterval(moveSecond, 20);
}

carousel();