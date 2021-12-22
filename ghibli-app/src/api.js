import axios from 'axios';

export const getFilmInfo = async (filmCount) => {
  try {
    const res = await axios.get(
      `https://ghibliapi.herokuapp.com/films?limit=10`
    );
    const filmData = res.data;
    return filmData;
  } catch (err) {
    console.log(err);
  }
};
