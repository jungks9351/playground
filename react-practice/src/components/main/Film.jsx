import React from 'react';
import styled from 'styled-components';
import FilmList from './FilmList';

const Film = () => {
  return (
    <FilmWrapper>
      <h2>FILMS</h2>
      <FilmList />
    </FilmWrapper>
  );
};

const FilmWrapper = styled.div`
  margin: 20px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    font-size: 2rem;
    margin: 20px 30px;
  }
`;
export default Film;
