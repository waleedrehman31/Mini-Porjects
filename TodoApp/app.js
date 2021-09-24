const form = document.querySelector("form");
const todoInput = document.getElementById("todo");
const todoEl = document.getElementById("display-todo");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const todo = todoInput.value;
  if (todo.length < 1) {
    alert("please enter the todo");
  } else {
    console.log(todo);
    saveTodo(todo);
    document.form.todo.value = "";
  }
});

function displayTodo() {
  const todos = JSON.parse(localStorage.getItem("todos"));
  console.log(todos);
  todos.forEach((todo) => {
    todoEl.innerHTML += ` 
    <li class="todo-list-item">
      <p class="main-todo">${todo}</p>
      <button class="button done-button">Done</button>
      <button class="button delete-button">Delete</button>
    </li>`;
  });
}
displayTodo();

function saveTodo(todo) {
  let todos = [];
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function removeTodos(todo) {
  let todos = [];
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}
