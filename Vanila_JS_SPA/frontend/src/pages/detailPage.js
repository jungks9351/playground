const detailPage = (root, movieId) => {
  const state = {
    movieId,
  };

  const render = () => {
    root.innerHTML = `<div class="detail-page">Detail Page</div>`;
  };
  render(root);
};

export default detailPage;
