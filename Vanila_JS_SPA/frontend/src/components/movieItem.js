const movieItem = (movieData) => {
  if (!movieData) return;

  return `<li class="movie-item" id=${movieData.id}>
  <div class="movie-img">
  <img src="https://image.tmdb.org/t/p/w500/${movieData.image}"/>
</div>
<div class="movie-info">
  <p class="moive-title">${movieData.title} </p>
  <p class="movie-date">${movieData.release_date}</p>
</div></li>`;
};

export default movieItem;
