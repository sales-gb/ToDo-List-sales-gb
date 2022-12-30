const addForm = document.querySelector("#add-form");
const addInput = document.querySelector("#add-input");
const todoList = document.querySelector(".toDo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-btn");
const searchInput = document.querySelector("#search-input");
const eraseBtn = document.querySelector("#erase-btn");
const filterBtn = document.querySelector("#filter-select");
const tollBar = document.querySelector("#tollBar");

/* Funções */
function saveTodo(text) {
  const tagLi = document.createElement("li");
  const tagP = document.createElement("p");
  const divBtns = document.createElement("div");
  const btnEdit = document.createElement("button");
  const btnCheck = document.createElement("button");
  const btnRemove = document.createElement("button");

  tagLi.classList.add("toDo-item");

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
  editForm.classList.toggle("hide");

  addForm.classList.toggle("hide");
  todoList.classList.toggle("hide");
  tollBar.classList.toggle("hide");
}

/* Eventos */
addForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputValue = addInput.value;

  if (inputValue) {
    saveTodo(inputValue);
  }
});

document.addEventListener("click", (event) => {
  const targetElement = event.target;
  const parentElement = targetElement.closest("li");

  if (targetElement.classList.contains("finish-todo")) {
    parentElement.classList.toggle("done");
  }

  if (targetElement.classList.contains("remove-todo")) {
    parentElement.remove();
  }

  if (targetElement.classList.contains("edit-todo")) {
    // console.log("editou");
    hideForms();
  }
});
