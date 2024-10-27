import pages from '@/pages/index';
import { router } from '@/utils/Router';

for(const [path, page] of Object.entries(pages)) {
  router.use(path, page);
}

router.start();

document.addEventListener('DOMContentLoaded', () => {
  router.go(window.location.pathname);
})
