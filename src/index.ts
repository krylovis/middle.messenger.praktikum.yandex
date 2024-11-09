import pages from '@/pages/index';
import authController from '@/utils/controllers/UserController';
import { router } from '@/utils/Router';

for(const [path, page] of Object.entries(pages)) {
  router.use(path, page);
}

router.start();

document.addEventListener('DOMContentLoaded', async () => {
  router.go(window.location.pathname);

  await authController.getUser();
})
