import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MainPage = () => {
  const navigate = useNavigate();

  const moveDetailPage = () => {
    navigate('/detail');
  };

  const moveLoginPage = () => {
    navigate('/login');
  };

  const moveRegisterPage = () => {
    navigate('/regist');
  };

  return (
    <>
      <header style={{ textAlign: 'center' }}>
        <h2>react-router-dom</h2>
        <h3>라우팅 처리 연습</h3>
      </header>
      <MainWrapper>
        <button onClick={moveDetailPage}>detail</button>
        <button onClick={moveLoginPage}>login</button>
        <button onClick={moveRegisterPage}>register</button>
      </MainWrapper>
    </>
  );
};

const MainWrapper = styled.section`
  margin: 0 auto;
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  button {
    background-color: #ffface;
    width: 100px;
    font-size: 24px;
    font-weight: bolder;
    border: none;
    border-radius: 50px;
    cursor: pointer;
  }
`;

export default MainPage;
