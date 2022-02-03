import detailPage from '../pages/detailPage';
import mainPage from '../pages/mainPage';

const routes = {
  '/': mainPage(),
  '/detail': detailPage(),
};

export const initRoute = (el) => {
  render(el, routes['/']);
};

export const render = (el, route) => {
  el.innerHTML = route;
};
