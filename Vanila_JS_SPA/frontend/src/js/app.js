import { init, router } from '../utils/useRouter.js';

const app = (root) => {
  // ROUTE_CHANGE 이벤트 발생시 마다 router 함수가 호출되게 한다.
  init(router);

  router(root);
  // 뒤로가기 처리
  // 뒤로가기, 앞으로 가기 발생 시 popstate 이벤트 발생
  window.addEventListener('popstate', router);
};

export default app;
