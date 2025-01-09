const $numberButtons = document.querySelectorAll("[data-number]");
const $operationButtons = document.querySelectorAll("[data-operation]");
const $allClearButtons = document.querySelector("[data-all-clear]");
const $deleteButtons = document.querySelector("[data-delete]");
const $equalsButtons = document.querySelector("[data-equals]");
const $previousDisplay = document.querySelector("[data-previous-operand]");
const $currentDisplay = document.querySelector("[data-current-operand]");

let currentNumberStr = "";

function updateDisplay() {
  let floatNumber = parseFloat(currentNumberStr);
  let displayNumber = floatNumber.toLocaleString("en", {
    maximumFractionDigits: 10,
  });
  $currentDisplay.textContent = displayNumber;
}
$numberButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    console.log(e.target.textContent);
    let numberStr = e.target.textContent;
    // 점은 한번만 나오게 하는 예외처리
    if (numberStr === "." && currentNumberStr.includes(".")) {
      return;
    }
    currentNumberStr = currentNumberStr + numberStr;

    // 표시하기
    updateDisplay();
  });
});
$operationButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    console.log(e.target.textContent);
  });
});

$allClearButtons.addEventListener("click", function () {
  console.log("all-clear");
});

$deleteButtons.addEventListener("click", function () {
  console.log("delete~");
});

$equalsButtons.addEventListener("click", function () {
  console.log("equals~");
});
