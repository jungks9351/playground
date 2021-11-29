import React from 'react';
import styled from 'styled-components';

const FilmItem = ({ filmData, lastFilm }) => {
  return (
    <FilmItemWrapper ref={lastFilm}>
      <div className="film_img">
        <img src={filmData.image} alt="" />
      </div>
      <div className="film_info">
        <p className="film_title">{filmData.title} </p>
        <p className="film_date">{filmData.release_date}</p>
      </div>
    </FilmItemWrapper>
  );
};

const FilmItemWrapper = styled.li`
  width: 400px;
  height: 400px;
  box-shadow: 1px 5px 15px 1px rgba(0, 0, 0, 0.2);
  .film_img {
    width: 400px;
    height: 300px;
    > img {
      width: 100%;
      height: 100%;
    }
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
