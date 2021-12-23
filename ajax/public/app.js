// XMLHttpRequset 요청 방식

const $list = document.querySelector('.list');

const $addUserName = document.getElementById('inputUserName');
const $addUserAge = document.getElementById('inputUserAge');
const $addUserBtn = document.getElementById('addUserBtn');

const $chageUserId = document.getElementById('chageUserId');
const $changeUserName = document.getElementById('changeUserName');
const $changeUserAge = document.getElementById('changeUserAge');
const $changeUserBtn = document.getElementById('changeUserBtn');

const $deleteUserBtn = document.getElementById('deleteUserBtn');

// GET 메소드 요청

const getUsers = () => {
  useXMLHttpRequest('GET', '');
};

// 그리는 함수

const render = (users) => {
  // 다시 그리게 하기 위해 비워준다
  $list.innerHTML = ``;

  users.forEach((user) => {
    const { id, name, age } = user;

    $list.innerHTML += `
    <li class="item">
    <p id=${id} class="userId">id : ${id}</p>
    <p id=name${id}>name : ${name}</p>
    <p id=age${id}>age : ${age}</p>
    </li>`;
  });
};

// window가 로딩됐을 때 함수

window.onload = () => {
  getUsers();
};

// 추가 버튼을 눌렀을 때 추가 해줘
// POST 메소드 요청

$addUserBtn.onclick = () => {
  const userName = $addUserName.value;
  const userAge = $addUserAge.value;

  const payload = {
    name: userName,
    age: userAge,
  };
  useXMLHttpRequest('POST', '', payload);

  // user을 추가하면 다시 그려주어야 한다. 추가 된 만큼
  getUsers();
};

// 수정 버튼을 클릭 했을 때
// 없는 아이디면 존재하지 않다 알람
// 데이터 베이스 수정
// 있는 아이디면 수정 완료 알람
// 수정 완료되면 다시 그려준다.
// PATCH 메소드 요청

$changeUserBtn.onclick = () => {
  const value = validateUser();

  if (!value) return;

  const beforeName = document
    .getElementById(`name${value}`)
    .textContent.split(': ')[1];
  const beforeAge = document
    .getElementById(`age${value}`)
    .textContent.split(': ')[1];

  const changeName = $changeUserName.value;
  const changeAge = $changeUserAge.value;

  const payload = {
    name: changeName ? changeName : beforeName,
    age: changeAge ? changeAge : beforeAge,
  };

  useXMLHttpRequest('PATCH', `/${value}`, payload);

  alert('수정 완료');
  getUsers();
};

// 유저 정보를 삭제
// DELET 메소드 요청

$deleteUserBtn.onclick = () => {
  const value = validateUser();

  if (!value) return;

  useXMLHttpRequest('DELETE', `/${value}`);

  getUsers();
};

// PATCH DELETE 에 중복되는 로직을 함수화 하자
// 유저 정보 존재 여부 함수를 생성하자

const validateUser = () => {
  const $idList = document.querySelectorAll('.userId');
  const value = $chageUserId.value;

  const id = [...$idList].map((idItem) => {
    return idItem.id;
  });

  if (!id.includes(value)) {
    alert('존해하지 않는 아이디 입니다.');
    return null;
  } else {
    return value;
  }
};

// fetch 요청 방식

const useXMLHttpRequest = (method, url, payload) => {
  const xhr = new XMLHttpRequest();

  xhr.open(method, `http://localhost:3000/users${url}`);

  if (payload) {
    console.log(payload);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(payload));
  } else if (method === 'GET') {
    xhr.send();
    xhr.onload = () => {
      try {
        const res = xhr.response;
        const users = JSON.parse(res);
        render(users);
      } catch (err) {
        console.log(err);
      }
    };
  } else {
    xhr.send();
  }
};
