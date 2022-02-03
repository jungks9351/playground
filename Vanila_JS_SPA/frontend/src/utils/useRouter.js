import characterPage from '../pages/characterPage.js';
import detailPage from '../pages/detailPage.js';
import movieListPage from '../pages/movieListPage.js';

const pathname = location.pathname;

const router = (root) => {
  root.innerHtml = ``;

  if (pathname === '/') {
    // 영화 목록 페이지 랜더링하기
    movieListPage(root);
  } else if (pathname.indexOf('/movies/') === 0) {
    const [, , movieId] = pathname.split('/');
    // 영화 상세 페이지 랜더링하기
    detailPage(root);
  } else if (pathname === '/characters') {
    // 캐릭터 페이지 랜더링하기
    characterPage(root);
  }
};

export default router;
