// callback 함수 - 기본
function greeting(name) {
    console.log(`Hello + ${name}`);
}

// 함수의 선언부에 작성하는 값들은 인자값이라고 함.
function processUserInput(name, callback) { //인자값(argument)
    callback(name); //greeting('Yoo'); 가 됨.
}

// 함수의 호출부에 작성하는 값들을 파라미터 라고 함
processUserInput('Yoo', greeting); // 동기(synchronous) 콜백

function waitCoupang(pkg, callback) {
    console.log(`쿠팡에서 ${pkg}가 도착했다!`);

    callback();
}

function bringItToNeightbor() {
    console.log('옆집 아주머니에게 전달 완료');
}

waitCoupang('사과', bringItToNeightbor);

const button = document.querySelector('button');


/*
1번:
button.addEventListener('click', callback);

2번:
button.addEventListener('click', function() {
    console.log('button clicked');
});
*/

button.addEventListener('click', () => {
    console.log('button clicked!');
});



