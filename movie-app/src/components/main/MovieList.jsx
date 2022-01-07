import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getPopularMovies } from '../../api/movie';
import MovieItem from './MovieItem';

const MovieList = () => {
  const [movieDatas, setMovieDatas] = useState();

  const getMovieData = async () => {
    const popularMovieDatas = await getPopularMovies();
    setMovieDatas(popularMovieDatas);
  };
  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <MovieListWrapper>
      {movieDatas &&
        movieDatas.map((data) => {
          const { id } = data;
          return <MovieItem key={id} data={data} />;
        })}
    </MovieListWrapper>
  );
};

const MovieListWrapper = styled.ul`
  margin: 0 auto;
  padding: 0 20px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
export default MovieList;
