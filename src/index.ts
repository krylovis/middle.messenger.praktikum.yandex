import pages from '@/pages/index';
import authController from '@/utils/controllers/AuthController';
import { router } from '@/utils/Router';

for(const [path, page] of Object.entries(pages)) {
  router.use(path, page);
}

router.start();

document.addEventListener('DOMContentLoaded', async () => {
  await authController.getUser();
  router.go(window.location.pathname);
})
