// DOM

const $inputTodo = document.getElementById('inputTodo');
const $addBtn = document.getElementById('addBtn');

const $todoList = document.getElementById('todoList');

// fetch
window.onload = () => {
  getTodos();
};

const getTodos = async () => {
  $todoList.innerHTML = '';

  const res = await fetch('http://localhost:4000/todos', { method: 'GET' });

  const todos = await res.json();

  todos.map((todo) => {
    const { id, todoText, checked } = todo;

    $todoList.innerHTML += `<li id="todoItem" class="todo-item">
      <input type="checkbox" id=${id} ${checked ? 'checked' : ''}  />
      <div id="todo" class="todo">${todoText}</div>
      <span><button id=${id} class="btn">X</button></span>
    </li>
      `;
  });
};

$addBtn.onclick = async () => {
  const payload = { todoText: $inputTodo.value, checked: false };

  await fetch('http://localhost:4000/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  getTodos();
};

// NodeList 유사배열
// 이터러블 배열은 까써 사용할 수 있다.
// console.log($todoItem);

// [...$todoItem].map((item) => {
//   console.log(item);
// });

// 이벤트 위임
// 없는 데 이벤트를 어떻게 줘
// 이벤트 위임을 받아서 써야지

$todoList.onclick = async (e) => {
  if (!e.target.classList.contains('btn')) return;
  const id = e.target.id;
  await fetch(`http://localhost:4000/todos/${id}`, { method: 'DELETE' });
  getTodos();
};

$todoList.onchange = async (e) => {
  const id = e.target.id;
  const checked = e.target.checked;
  const payload = { checked };
  await fetch(`http://localhost:4000/todos/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  getTodos();
};
