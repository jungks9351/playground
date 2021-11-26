import React from 'react';
import styled from 'styled-components';
import Film from 'components/main/Film';
import CommonHeader from 'components/common/CommonHeader';

const MainPage = () => {
  return (
    <MainWrapper>
      <CommonHeader />
      <Film />
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  width: 100%;
`;
export default MainPage;
