"use strict";

// 1) 배열 생성
const fruits = ["사과", "바나나", "딸기", "사과", "바나나", "파인애플 "];
// const fruits = new Array("사과", "바나나", "딸기");
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
fruits[2] = "포도";
console.log(fruits[2]);

// 2) 자주 사용하는 배열 API
// length
console.log("fruits.length ", fruits.length);
console.log("마지막 값: ", fruits[fruits.length - 1]);

// push() : 맨뒤부터 값을 추가
fruits.push("귤");
console.log(fruits);

// forEach()
fruits.forEach(function (item, index) {
  console.log(index, item);
});

// pop() : 맨뒤 아이템 제거
// fruits.pop();
// let removedItem = fruits.pop();
// console.log("removedItem", removedItem);
// console.log("제거 완료", fruits);

// shift() : 맨앞 아이템 제거
// fruits.shift();
// fruits.shift();
// console.log(fruits);

// unshift() : 맨앞부터 값을 추가
fruits.unshift("수박");
console.log(fruits);

// indexOf()
let index = fruits.indexOf("토마토");
console.log("index", index);

// splice() : 특정 인덱스 값 제거
// 제거하고 싶은 인덱스, 제거 갯수
const findIndex = fruits.indexOf("파인애플");
console.log("findIndex", findIndex);
fruits.splice(findIndex, 1);
console.log(fruits);
