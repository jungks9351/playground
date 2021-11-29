import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilms } from 'redux/modules/films';
import styled from 'styled-components';
import FilmItem from './FilmItem';

const FilmList = () => {
  const dispatch = useDispatch();
  const lastFilm = useRef(null);
  const [filmCount, setFilmCount] = useState(9);

  const { filmItems, loading } = useSelector(({ films }) => {
    return {
      filmItems: films.filmItems,
      loading: films.loading,
    };
  });

  useEffect(() => {
    dispatch(getFilms(filmCount));
  }, [dispatch, filmCount]);

  useEffect(() => {
    const options = {
      root: null,
      rootmargin: '0px',
      threshold: 0.5,
    };
    const handleIntersection = (entries, observer) => {
      if (entries[0].isIntersecting) {
        setFilmCount(filmCount + 9);
        dispatch(getFilms(filmCount));
      }
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (lastFilm.current) {
      observer.observe(lastFilm.current);
    }

    return () => observer.disconnect();
  }, [dispatch, loading, filmCount]);
  return (
    <FilmListWrapper>
      {filmItems &&
        filmItems.map((filmData, index) =>
          index + 1 === filmItems.length ? (
            <FilmItem
              key={filmData.id}
              filmImg={filmData.image}
              filmTitle={filmData.title}
              filmDate={filmData.release_date}
              lastFilm={
                !loading && filmItems.length < 21 && lastFilm ? lastFilm : null
              }
            />
          ) : (
            <FilmItem
              key={filmData.id}
              filmImg={filmData.image}
              filmTitle={filmData.title}
              filmDate={filmData.release_date}
            />
          ),
        )}
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
