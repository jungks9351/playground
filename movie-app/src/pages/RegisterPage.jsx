import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

const RegisterPage = () => {
  const [userInfo, setUserInfo] = useState({
    userId: '',
    userPw: '',
  });

  const checkId = (userId) => {
    const regexr =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    return regexr.test(userId);
  };
  const checkPw = (userPw) => {
    const regexr = /[`~!@#$%^&*|\\\'\";:\/?]/gi;

    return regexr.test(userPw);
  };

  const registUser = async (e) => {
    e.preventDefault();
    const userId = e.target[0].value;
    const userPw = e.target[1].value;

    if (!checkId(userId)) {
      alert('아이디는 이메일 형식으로 작성해주세요');
      return;
    } else if (!checkPw(userPw)) {
      alert('비밀번호는 특수문자를 포함하여 작성해주세요');
      return;
    }
    setUserInfo({ ...userInfo, userId, userPw });

    await axios.post('http://localhost:4000/users', userInfo);
  };

  return (
    <RegisterWrapper onSubmit={registUser}>
      <h2>회원가입</h2>
      <div className="input-box">
        <input type="text" name="userId" placeholder="이메일을 입력하세요" />
        <input
          type="password"
          name="userPw"
          placeholder="비밀번호를 입력하세요"
        />
      </div>
      <button>회원가입</button>
    </RegisterWrapper>
  );
};

const RegisterWrapper = styled.form`
  width: 500px;
  height: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .input-box {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .input-box > input {
    margin-bottom: 20px;
    width: 200px;
  }
`;
export default RegisterPage;
