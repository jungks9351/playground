import React from 'react';
import styled from 'styled-components';
import FilmItem from './FilmItem';

const FilmList = () => {
  return (
    <FilmListWrapper>
      <FilmItem />
      <FilmItem />
      <FilmItem />
      <FilmItem />
      <FilmItem />
      <FilmItem />
    </FilmListWrapper>
  );
};

const FilmListWrapper = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
`;
export default FilmList;
