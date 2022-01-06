import React from 'react';
import styled from 'styled-components';

const CommonHeader = () => {
  return (
    <CommonHeaderWrapper>
      <h1>Movie List</h1>
      <nav>
        <button>로그인</button>
        <button>회원가입</button>
      </nav>
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
  }
`;

export default CommonHeader;
