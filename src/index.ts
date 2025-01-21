import pages from '@/pages/index';
import authController from '@/utils/controllers/AuthController';
import chatsController from '@/utils/controllers/ChatsController';
import { router } from '@/utils/Router';

for (const [path, page] of Object.entries(pages)) {
  router.use(path, page);
}

router.start();

document.addEventListener('DOMContentLoaded', async () => {
  const {pathname} = window.location;

  await authController.getUser();

  if (pathname === '/messenger') {
    await chatsController.getChats();
  }

  router.go(pathname);
})
