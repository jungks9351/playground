import router from '../utils/useRouter.js';

const app = (root) => {
  // 변수 생성
  const pathname = location.pathname;

  router(root);
};

export default app;
