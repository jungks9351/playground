export const getMovieInfo = async (filmCount) => {
  try {
    const res = await fetch(`https://ghibliapi.herokuapp.com/films?limit=18`);
    const movieData = await res.json();
    return movieData;
  } catch (err) {
    console.log(err);
  }
};
