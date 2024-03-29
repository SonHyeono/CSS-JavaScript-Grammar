// 기본 반복문 문법(고전적인 방식)
for (let index = 0; index < 5; index++) {
    console.log(`${index} 번 반복`);
}

const rainbow = 'rainbow';
for (let index = 0; index < rainbow.length; index++) {
    console.log(rainbow[index]);
}

const foods = ['apple', 'orange-cookie', 'avocado', 'plum', 'kiwi'];
let favorite = 'My favorite food is ';
const para = document.querySelector('p');
console.dir(para);

const len = foods.length;
for (let index = 0; index < len; index++) {
    // favorite += foods[index];   

    if (index === len -1) {
        favorite += 'and ' + foods[index] + '.';
    } else {
        favorite += foods[index] + ', ';
    }
}

para.textContent = favorite;

// Array.prototype.forEach()
console.log(Array.isArray(foods)); // 배열 타입인지 확인.
const fruits = ['apple', 'banana', 'coconut'];
fruits.forEach(fruit => console.log(fruit));

// for in & for of
let cookie = { // enumerable
    'product_name': 'HERSHEY',
    'product_vendor': 'costco',
    'product_id': 'c1',
};

console.log(cookie['product_name']);


for(const key in cookie) {// 객체의 각 key에 대한 임시 변수를 세팅
    // console.log(key + ": " + cookie[key]);
    console.log(`${key} : ${cookie[key]}`);
}

const scores = [33, 52, 21, 15, 28]; // iterable

for (const index of scores) { // iterable
    console.log(index);
}

console.log('iterable on for in / of');
for(const item in scores) {
    console.log(`${item} : ${scores[item]}`);
}

for(const item of scores) {
    console.log(item);
}