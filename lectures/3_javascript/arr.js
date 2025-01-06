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

// push()
fruits.push("귤");
console.log(fruits);

// forEach()
fruits.forEach(function (item, index) {
  console.log(index, item);
});

// pop()
fruits.pop()
console.log("제거 완료")