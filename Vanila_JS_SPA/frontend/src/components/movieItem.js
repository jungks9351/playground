const movieItem = (movieData) => {
  return `<li class="movie-item" id=${movieData.id}>
  <div className="movie-img">
  <img src="https://image.tmdb.org/t/p/w500/${movieData.image}"/>
</div>
<div className="">
  <p className="moive-title">${movieData.title} </p>
  <p className="movie-date">${movieData.release_date}</p>
</div></li>`;
};

export default movieItem;
