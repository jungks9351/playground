import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilms } from 'redux/modules/films';
import styled from 'styled-components';
import FilmItem from './FilmItem';

const FilmList = () => {
  const dispatch = useDispatch();

  const { filmItems } = useSelector(({ films }) => {
    return {
      filmItems: films.filmItems,
    };
  });

  useEffect(() => {
    dispatch(getFilms());
  }, [dispatch]);

  return (
    <FilmListWrapper>
      {filmItems &&
        filmItems.map((filmData) => {
          return (
            <FilmItem
              key={filmData.id}
              filmImg={filmData.image}
              filmTitle={filmData.title}
              filmDate={filmData.release_date}
            />
          );
        })}
    </FilmListWrapper>
  );
};

const FilmListWrapper = styled.ul`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
`;
export default FilmList;
