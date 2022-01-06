import axios from 'axios';

export const getPopularMovies = async () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR`,
    );
    const { results: popularMovieData } = res.data;

    return popularMovieData;
  } catch (err) {
    console.log(err);
  }
};
