"use strict";
// let subject = "html";
// switch (subject) {
//   case "javascript":
//     console.log("javascript 안녕");
//     let result = 1 + 2;
//     console.log(result);
//     break;
//   case "html":
//     console.log("html 안녕");
//     break;
//   case "css":
//     console.log("css 안녕");
//     break;
//   default:
//     console.log("default 수행문 입니다.");
// }

// console.log("switch문 종료");

let score = prompt("수학 점수를 입력해주세요.");
let value = Math.floor(score / 10);
console.log(score / 10);
switch (value) {
  case 10:
  case 9:
    console.log("A학점 입니다.");
    break;
  case 8:
  case 7:
    console.log("B학점 입니다.");
    break;
  case 6:
  case 5:
    console.log("C학점 입니다.");
    break;
  default:
    console.log("D학점 입니다.");
}
/**
 * 수학 점수를 입력받아서
 * 90점 이상이면 "A학점 입니다."
 * 70점 이상이면 "B학점 입니다."
 * 50점 이상이면 "C학점 입니다."
 * 그 외 "D학점 입니다."
 */
