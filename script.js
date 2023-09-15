let bulb = document.querySelector('.bulb');
let btn = document.querySelector('button');

let flag = 0;



btn.addEventListener('click', function () {
    if (flag == 0) {
        bulb.style.backgroundColor = 'yellow';
        btn.innerHTML='OFF'
        console.log("on")
        flag = 1;
    }
    else {
        bulb.style.backgroundColor = 'transparent';
        btn.innerHTML='ON'
        console.log('off');
        flag = 0;
    }


    });
