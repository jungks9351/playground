import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginPage = () => {
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    const userId = e.target[0].value;
    const userPw = e.target[1].value;

    const res = await axios.get(
      `http://localhost:4000/users?userId=${userId}&userPw=${userPw}`,
    );
    if (!res.data.length) {
      alert('가입되지 않은 회원입니다.');
      return;
    }
    const token = parseInt(Math.random() * 10);

    localStorage.setItem('token', token);
    navigate('/');
  };

  return (
    <LoginWrapper onSubmit={loginUser}>
      <h2>로그인</h2>
      <div className="input-box">
        <input type="text" placeholder="이메일을 입력하세요" />
        <input type="password" placeholder="비밀번호를 입력하세요" />
      </div>
      <button>로그인</button>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.form`
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

export default LoginPage;
