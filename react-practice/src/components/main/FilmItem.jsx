import React from 'react';
import styled from 'styled-components';

const FilmItem = ({ filmImg, filmTitle, filmDate, lastFilm }) => {
  return (
    <FilmItemWrapper ref={lastFilm}>
      <img src={filmImg} alt="" className="film_img" />
      <div className="film_info">
        <p className="film_title">{filmTitle} </p>
        <p className="film_date">{filmDate}</p>
      </div>
    </FilmItemWrapper>
  );
};

const FilmItemWrapper = styled.li`
  width: 300px;
  height: 400px;
  box-shadow: 1px 5px 15px 1px rgba(0, 0, 0, 0.2);
  .film_img {
    width: 300px;
    height: 300px;
  }
  .film_info {
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    .film_title {
      font-size: 1.4rem;
      font-weight: bolder;
    }
  }
`;
export default FilmItem;
