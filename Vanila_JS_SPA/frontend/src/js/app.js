import detailPage from '../pages/detailPage.js';
import characterPage from '../pages/characterPage.js';
import movieListPage from '../pages/movieListPage.js';

const app = (root) => {
  // 변수 생성
  const pathname = location.pathname;

  // router 함수 생성
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
  router(root);
};

export default app;
