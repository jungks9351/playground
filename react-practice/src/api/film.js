import axios from 'axios';

export const getFilmInfo = async () => {
  try {
    const res = await axios.get('https://ghibliapi.herokuapp.com/films');
    const filmData = res.data;
    return filmData;
  } catch (err) {
    console.log(err);
  }
};
