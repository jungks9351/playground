import axios from 'axios';

export const getFilmInfo = async () => {
  try {
    const res = await axios.get(
      'https://ghibliapi.herokuapp.com/films?limit=9',
    );
    const filmData = res.data;
    return filmData;
  } catch (err) {
    console.log(err);
  }
};
