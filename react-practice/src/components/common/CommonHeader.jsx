import React from 'react';
import styled from 'styled-components';

const CommonHeader = () => {
  return (
    <HeaderWrapper>
      <h1>スタジオジブリ</h1>
      <h1>STUDIO GHIBLI</h1>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  width: 80%;
  height: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    color: #000;
    font-size: 3rem;
  }
`;

export default CommonHeader;
