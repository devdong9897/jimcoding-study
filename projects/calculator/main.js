const $numberButtons = document.querySelectorAll("[data-number]");
const $operationButtons = document.querySelectorAll("[data-operation]");
const $allClearButton = document.querySelector("[data-all-clear]");
const $deleteButton = document.querySelector("[data-delete]");
const $equalsButton = document.querySelector("[data-equals]");
const $previousDisplay = document.querySelector("[data-previous-operand]");
const $currentDisplay = document.querySelector("[data-current-operand]");

let currentNumberStr = "";
let previousNumberStr = "";
let operation = null;

function getDisplayNumber(numberStr) {
  let floatNumber = parseFloat(numberStr);
  if (isNaN(floatNumber)) {
    return;
  }
  // .toLocaleString(): 주로 숫자에 천 단위 쉼표(,)를 추가.
  let displayNumber = floatNumber.toLocaleString("en", {
    maximumSignificantDigits: 10,
  });
  return displayNumber;
}
function updateDisplay() {
  $currentDisplay.textContent = getDisplayNumber(currentNumberStr);
  if (operation) {
    $previousDisplay.textContent =
      getDisplayNumber(previousNumberStr) + " " + operation;
  } else {
    $previousDisplay.textContent = " ";
  }
}

$numberButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    console.log(e.target.textContent);
    // numberStr: 사용자가 클릭한 숫자값
    let numberStr = e.target.textContent;
    // .소수점이 하나만 나오게 하는 예외처리
    if (numberStr === "." && currentNumberStr.includes(".")) {
      return;
    }
    currentNumberStr = currentNumberStr + numberStr;
    // currentNumberStr: 지금까지 입력된 숫자값
    // parseFloat(): 문자열을 숫자로 바꾸는 함수.
    // 표시하기
    updateDisplay();
  });
});

$operationButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    console.log(e.target.textContent);
    previousNumberStr = currentNumberStr;
    currentNumberStr = "";
    operation = e.target.textContent;
    // 표시하기
    updateDisplay();
  });
});

function compute() {
  let prev = parseFloat(previousNumberStr);
  let curr = parseFloat(currentNumberStr);
  if (isNaN(prev) || isNaN(curr)) {
    return;
  }
  let result = null;
  switch (operation) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "*":
      result = prev * curr;
      break;
    case "÷":
      result = prev / curr;
      break;
  }
  currentNumberStr = result;
  operation = null;
  previousNumberStr = "";
}
$equalsButton.addEventListener("click", function () {
  compute();
  updateDisplay();
});

function clear() {
  currentNumberStr = "";
  previousNumberStr = "";
  operation = null;
}

$allClearButton.addEventListener("click", function () {
  clear();
  updateDisplay();
});

$deleteButton.addEventListener("click", function () {
  console.log("equals~~~");
});
