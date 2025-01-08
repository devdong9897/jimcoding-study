let person = {
  fullname: "짐코딩",
  age: 20,
  printThis: function () {
    console.log(this);
    console.log(this === person);
  },
};

// person.printThis()
let printThis = person.printThis;
printThis();
