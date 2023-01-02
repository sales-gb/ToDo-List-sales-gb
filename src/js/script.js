const divAddForm = document.querySelector("#add-form-div");
const addInput = document.querySelector("#add-input");

const todoList = document.querySelector(".todo-list");
const divTodoList = document.querySelector("#todo-list-div");

const divEditForm = document.querySelector("#edit-form-div");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-btn");

const tollsBar = document.querySelector("#tollBar");

const searchInput = document.querySelector("#search-input");
const divSearch = document.querySelector("#search");
const eraseBtn = document.querySelector("#erase-btn");

const filterBtn = document.querySelector("#filter-select");
const divFilter = document.querySelector("#filter");

let oldInputValue;

/* Funções */
function saveTodo(text) {
  const tagLi = document.createElement("li");
  const tagP = document.createElement("p");
  const divBtns = document.createElement("div");
  const btnEdit = document.createElement("button");
  const btnCheck = document.createElement("button");
  const btnRemove = document.createElement("button");

  tagLi.classList.add("todo-item");

  divBtns.classList.add("btn-todo");

  btnEdit.classList.add("edit-todo");
  btnEdit.innerHTML = '<i class="fa-solid fa-pencil edit-todo"></i>';

  btnCheck.classList.add("finish-todo");
  btnCheck.innerHTML = '<i class="fa-solid fa-check finish-todo"></i>';

  btnRemove.classList.add("remove-todo");
  btnRemove.innerHTML = '<i class="fa-solid fa-minus remove-todo"></i>';

  tagP.innerText = text;

  divBtns.append(btnEdit, btnCheck, btnRemove);

  tagLi.append(tagP, divBtns);

  todoList.appendChild(tagLi);

  addInput.value = "";
  addInput.focus();
}

function hideForms() {
  divEditForm.classList.toggle("hide");

  divAddForm.classList.toggle("hide");
  divTodoList.classList.toggle("hide");
  divSearch.classList.toggle("hide");
  divFilter.classList.toggle("hide");
}

function updateTodo(text) {
  const todos = document.querySelectorAll(".todo-item");

  todos.forEach((todo) => {
    let todoTitle = todo.querySelector("p");

    if (todoTitle.innerText === oldInputValue) {
      todoTitle.innerText = text;
    }
  });
}

/* Eventos */
divAddForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputValue = addInput.value;

  if (inputValue) {
    saveTodo(inputValue);
  }
});

document.addEventListener("click", (event) => {
  const targetElement = event.target;
  const parentElement = targetElement.closest("li");
  let todoTitle;

  if (parentElement && parentElement.querySelector("p")) {
    todoTitle = parentElement.querySelector("p").innerText || "";
  }

  if (targetElement.classList.contains("finish-todo")) {
    parentElement.classList.toggle("done");
  }

  if (targetElement.classList.contains("remove-todo")) {
    parentElement.remove();
  }

  if (targetElement.classList.contains("edit-todo")) {
    hideForms();

    editInput.value = todoTitle;
    oldInputValue = todoTitle;
  }
});

cancelEditBtn.addEventListener("click", (event) => {
  event.preventDefault();

  hideForms();
});

editForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const editInputValue = editInput.value;

  if (editInputValue) {
    updateTodo(editInputValue);
  }

  hideForms();
});
