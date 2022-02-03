import { getMovieInfo } from '../api/api.js';
import movieItem from '../components/movieItem.js';

const movieListPage = async (root) => {
  const movieDatas = await getMovieInfo();

  console.log(movieDatas);

  const render = (root) => {
    root.innerHTML = `
    <h2>Movie List</h2>
    <div class="movie-list-page">
      <ul class="movie-list" >
      ${movieDatas.map((data) => movieItem(data))}
      </ul>
    </div>`;
  };
  render(root);
};

export default movieListPage;
