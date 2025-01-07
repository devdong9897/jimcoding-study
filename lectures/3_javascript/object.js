// "use strict";

// // 객체 리터럴 문법
// // const person = {
// //   name: "짐코딩",
// //   age: 30,
// // };
// // person.job = "개발자";
// // // 객체 생성자 문법
// // const person = new Object();
// // person.name = "짐코딩";
// // person.age = 30;

// // const person = {
// //   name: ["Bob", "Smith"],
// //   age: 32,
// //   gender: "male",
// //   interests: ["music", "health"],
// //   hello: function () {
// //     alert("Hello");
// //   },
// //   greeting: function () {
// //     alert("Hi");
// //   },
// //   hobby: {
// //     name: "programing",
// //     alert: function () {
// //       alert("programing");
// //     },
// //   },
// // };

// // // console.log(person.name[0]);
// // console.log(person.name[1]);
// // // person.hello();
// // console.log(person.hobby.name)
// // console.log(person.hobby.alert())
// // person["name"][0] = "값변경";
// // console.log(person["name"][0]);
// // console.log(person["name"][1]);
// // // person["hello"]();
// // console.log(person["hobby"]["name"]);
// // person["hobby"]["alert"]();
// // delete person.name;
// // delete person["age"];
// // console.log(person);

// function printPerson({ name, age, hobby }) {
//   console.log(
//     `제 이름은 ${name}이며, 나이는 ${age}살 입니다. 그리고 취미는 ${hobby}입니다.`
//   );
//   function createPerson(name, age, hobby) {
//     return {
//       name,
//       age,
//       hobby,
//     };
//   }
// }
// const person = createPerson("김길동", 1, "아무거나");
// console.log(person);
// printPerson(person);
// // const person = {
// //   name: "짐코딩",
// //   age: 10,
// //   hobby: "헬스",
// // };
// // printPerson(person);

// // const { name, age, hobby } = person;
// // console.log(name, age, hobby);

// let username = "짐코딩";
// console.log(username);
// changeName(username);
// console.log(username);

// function changeName(name) {
//   name = "홍길동";
//   console.log(name);
// }
// console.log("---------------");
// const person1 = {
//   name: "짐코딩",
//   age: 25,
// };
// if ("name" in person1) {
//   console.log("존재합니다");
// } else {
//   console.log("존재하지 않습니다.");
// }
// let person2 = { ...person1 };
// let person2 = Object.assign({}, person1);
// person2.name = "홍길동";
// console.log(person1);
// console.log(person2);

// console.log(person2);
// console.log(person);
// changePersonName(person);
// console.log(person);
// function changePersonName(people) {
//   people.name = "홍길동";
//   people.age = 40;
// }

const person = {
  name: "짐코딩",
};
console.log(person.hasOwnProperty("name")); // true
console.log(Object.hasOwn(person, "name")); // true
