/**
 * 1) 추가하기
 * 2) 삭제하기
 * 3) 전체삭제
 * 4) 리스트 보여주기
 */
const $inputBox = document.querySelector("#input-box");
const $addBtn = document.querySelector("#add-btn");
const $todoList = document.querySelector("#todo-list");
const $todoCount = document.querySelector("#todo-count");
const $clearAll = document.querySelector("#clear-all");
let todoList = [];

$inputBox.addEventListener("keyup", function (e) {
  console.log("e.target.value: ", e.target.value);
  if (e.target.value) {
    $addBtn.classList.add("active");
  } else {
    $addBtn.classList.remove("active");
  }
});

$addBtn.addEventListener("click", function () {
  // 로컬스토리지 todo저장
  const todoItem = {
    // Date.now(): 현재 시간을 숫자, 즉 고유한 ID
    id: Date.now(),
    value: $inputBox.value,
  };
  todoList.push(todoItem);
  // "todoList"라는 이름으로 저장
  localStorage.setItem("todoList", JSON.stringify(todoList));
  appendTodoItem(todoItem);

  // 카운트 변경
  updateTodoCount();
  // input box clear
  $inputBox.value = "";
  // 전체삭제 버튼 활성화
  $clearAll.classList.add("active");
});

function appendTodoItem(todoItem) {
  const $li = document.createElement("li");
  const $span = document.createElement("span");
  const $i = document.createElement("i");

  $i.classList.add("fas", "fa-trash");
  $span.classList.add("icon");
  $li.textContent = todoItem.value;
  $li.dataset.id = todoItem.id;

  $span.appendChild($i);
  $span.addEventListener("click", deleteTask);
  $li.appendChild($span);
  $todoList.appendChild($li);
}

// 삭제
function deleteTask(e) {
  const $li = e.currentTarget.parentNode;

  // 로컬스토리지 삭제값 저장
  // deleteId: 사용자가 삭제하려고 클릭한 할 일 항목의 고유 ID.
  const deleteId = parseInt($li.dataset.id);
  // deleteIndex: 배열에서 해당 ID를 가진 항목이 몇 번째인지 찾는 것.
  const deleteIndex = todoList.findIndex((item) => item.id === deleteId);
  todoList.splice(deleteIndex, 1);
  // 삭제값 저장
  // todoList는 배열인데, 배열을 로컬스토리지에 저장하려면 문자열로 변환해야하므로 stringify사용
  localStorage.setItem("todoList", JSON.stringify(todoList));
  console.log("deleteIndex", deleteIndex);

  //  e.currentTarget: 클릭한 쓰레기통 아이콘이에요.
  // .parentNode: 그 아이콘을 감싸고 있는 할 일 항목이에요.
  // .remove(): 그 할 일 항목을 삭제해요.
  $li.remove();
  updateTodoCount();

  // 전체삭제 버튼 비활성화
  const $itemList = $todoList.querySelectorAll("li");
  if ($itemList.length === 0) {
    $clearAll.classList.remove("active");
  }
}

$clearAll.addEventListener("click", function () {
  $todoList.innerHTML = "";
  $todoCount.textContent = 0;
  todoList = [];
  localStorage.removeItem("todoList");
});

function updateTodoCount() {
  $todoCount.textContent = todoList.length;
}

// 새로고침 했을 때 로컬스토리지에 있는 데이터를 불러와 화면에 출력
function showTask() {
  const todoItems = localStorage.getItem("todoList");
  console.log(todoItems);
  if (todoItems) {
    // 문자열을 다시 자바스크립트 객체나 배열로 변환하는 메서드이다.
    // 로컬스토리지에서 가져온 값은 문자열이기 때문에, 이를 다시 자바스크립트 배열로 바꿔야 사용할 수 있다
    // 그러므로 parse를 사용하여 문자열을 배열로 변환.
    todoList = JSON.parse(todoItems);
    for (let todoItem of todoList) {
      appendTodoItem(todoItem);
    }
    $clearAll.classList.add("active");
  }
  updateTodoCount();
}
showTask();
