import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const CommonHeader = () => {
  const navigate = useNavigate();

  const [token, setToken] = useState(false);

  const getToken = () => {
    const getToken = localStorage.getItem('token');
    setToken(getToken);
  };

  const chnageNav = () => {
    const clearToken = localStorage.clear();
    setToken(clearToken);
  };
  useEffect(() => {
    getToken();
  }, [token]);

  return (
    <CommonHeaderWrapper>
      <h1>Popular Movie List</h1>
      {!token ? (
        <nav className="right-nav">
          <button
            onClick={() => {
              navigate('/login');
            }}
          >
            로그인
          </button>
          <button
            onClick={() => {
              navigate('/regist');
            }}
          >
            회원가입
          </button>
        </nav>
      ) : (
        <nav className="right-nav">
          <button onClick={chnageNav}>로그아웃</button>
        </nav>
      )}
    </CommonHeaderWrapper>
  );
};

const CommonHeaderWrapper = styled.header`
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button:first-child {
    margin-right: 15px;
  }
  button {
    padding: 10px;
    background-color: #ffface;
    border: none;
    border-radius: 10px;
    font-size: 14px;
    font-weight: bolder;
    cursor: pointer;
  }
`;

export default CommonHeader;
