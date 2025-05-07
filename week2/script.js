// 투두 데이터를 저장할 배열. 초기화 시 localStorage에서 데이터 읽어오기
let todos = JSON.parse(localStorage.getItem("todos")) || [];

const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// localStorage에 투두 데이터 저장 함수
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// 투두 항목을 렌더링하는 함수
function renderTodos() {
  // 기존 리스트 초기화
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.dataset.id = todo.id;

    // 완료 상태에 따른 클래스 추가
    if (todo.completed) {
      li.classList.add("completed");
    }

    // 투두 텍스트
    const span = document.createElement("span");
    span.textContent = todo.task;
    // 완료 상태 토글 이벤트
    span.addEventListener("click", () => {
      todo.completed = !todo.completed;
      saveTodos();
      renderTodos();
    });
    li.appendChild(span);

    // 삭제 버튼
    const delButton = document.createElement("button");
    delButton.textContent = "삭제";
    delButton.className = "delete";
    delButton.addEventListener("click", () => {
      // 클릭한 투두 삭제
      todos = todos.filter((item) => item.id !== todo.id);
      saveTodos();
      renderTodos();
    });
    li.appendChild(delButton);

    todoList.appendChild(li);
  });
}

// 폼 제출 시 새로운 투두 추가
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = todoInput.value.trim();
  if (task !== "") {
    // 고유 ID 생성 (타임스탬프 사용)
    const newTodo = {
      id: Date.now(),
      task: task,
      completed: false,
    };
    todos.push(newTodo);
    saveTodos();
    renderTodos();
    todoInput.value = "";
  }
});

// 페이지 로드 시 투두 렌더링
renderTodos();
