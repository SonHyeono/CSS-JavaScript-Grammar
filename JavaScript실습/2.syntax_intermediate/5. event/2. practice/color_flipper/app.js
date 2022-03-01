const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

// ? addEventListener 사용해서 button을 click했을 때 button clicked!가 출력되도록
// arrow fn 활용, callback 함수 파라미터 부분에 직접 작성

btn.addEventListener('click', () => {
    //console.log('button clicked!');
    const a = 5;
    const [r, g, b] = getRandomNumber(0, 255); // rgb 범위 0 ~ 255

    const rgbColor = `rgba(${r}, ${g}, ${b})`;

    document.body.style.backgroundColor = rgbColor;
    color.textContent = rgbColor;
    color.style.color = rgbColor;
});

// rgb 랜덤값 추출 함수
function getRandomNumber(min, max) { //최대값, 최소값을 포함하는 랜덤값 추출
    // 무언의 랜덤값 추출 코드
    let randomRGBArray = [];
    for (let i = 0; i < 3; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        //console.log(randomNumber);
        randomRGBArray.push(randomNumber);
    }
    
    return randomRGBArray;
} 
