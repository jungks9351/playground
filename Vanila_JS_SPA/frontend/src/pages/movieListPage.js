import { getMovieInfo } from '../api/api.js';
import movieItem from '../components/movieItem.js';

const movieListPage = async (root) => {
  const movieDatas = await getMovieInfo();

  const movieItems = movieDatas.map((data) => movieItem(data));

  const render = (root) => {
    root.innerHTML = `
    <div class="movie-list-page">
    <h2>Movie List</h2>
      <ul class="movie-list" >
      ${movieItems.join('')}
      </ul>
    </div>`;
  };
  render(root);
};

export default movieListPage;
