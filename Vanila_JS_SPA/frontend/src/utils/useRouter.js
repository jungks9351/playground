import characterPage from '../pages/characterPage.js';
import detailPage from '../pages/detailPage.js';
import movieListPage from '../pages/movieListPage.js';

export const router = () => {
  const pathname = location.pathname;

  const root = document.querySelector('#root');
  root.innerHtml = ``;

  if (pathname === '/') {
    // 영화 목록 페이지 랜더링하기
    movieListPage(root);
  } else if (pathname.indexOf('/movies/') === 0) {
    const [, , movieId] = pathname.split('/');
    // 영화 상세 페이지 랜더링하기
    detailPage(root, movieId);
  } else if (pathname === '/characters') {
    // 캐릭터 페이지 랜더링하기
    characterPage(root);
  }
};

// 커스텀 이벤트를 이용한 페이지 이동 처리
const ROUTE_CHANGE_EVENT = 'ROUTE_CHANGE';

export const init = (onRouteChange) => {
  window.addEventListener(ROUTE_CHANGE_EVENT, () => {
    onRouteChange();
  });
};

export const routeChange = (url, params) => {
  history.pushState(null, null, url);
  window.dispatchEvent(new CustomEvent(ROUTE_CHANGE_EVENT, params));
};
