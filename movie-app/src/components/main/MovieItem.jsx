import React from 'react';
import styled from 'styled-components';

const MovieItem = ({ data }) => {
  const { title, backdrop_path: imgUrl } = data;
  return (
    <MovieItemWrapper>
      <img src={`https://image.tmdb.org/t/p/w500/${imgUrl}`} alt="영화포스터" />
      <p>{title}</p>
    </MovieItemWrapper>
  );
};

const MovieItemWrapper = styled.li`
  width: 400px;
  padding: 30px;
  img {
    width: 100%;
  }
`;

export default MovieItem;
