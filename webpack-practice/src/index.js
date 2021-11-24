import '../index.css';

const $list = document.getElementById('list');

const items = [1, 2, 3, 4, 5];

items.map((item) => {
  const $li = document.createElement('li');
  $li.textContent = item;
  $list.append($li);
});
