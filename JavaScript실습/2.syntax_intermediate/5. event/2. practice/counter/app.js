const btn = document.querySelector('#btn');
const number = document.querySelector('.span');

incbtn.addEventListener('click', function() {
    let count = Number(number.textContent)
    count = count + 1;
    number.textContent = count;
    
    let color;
    if(number.innerHTML > 0) {
        color = "red";
    } else if (number.innerHTML < 0 ) {
        color = "blue";
    } else {
        color = "black";
    }
    number.style.color = color;
});

decbtn.addEventListener('click', function() {
    let count = Number(number.textContent)
    count = count - 1;
    number.textContent = count;

    let color;
    if(number.innerHTML > 0) {
        color = "red";
    } else if (number.innerHTML < 0 ) {
        color = "blue";
    } else {
        color = "black";
    }
    number.style.color = color;
});

resetbtn.addEventListener('click', function() {
    let count = Number(number.textContent)
    count = 0;
    number.textContent = count;

    number.style.color = "black";
});

