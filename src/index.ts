import * as Pages from '@/pages/index';
import { router } from '@/utils/Router';

router
  .use('/', Pages.loginPage)
  .use('/sign-up', Pages.registerPage)
  .use('/messenger', Pages.mainPage)
  .use('/settings', Pages.editProfilePage)
  .use('/profile', Pages.profilePage)
  .use('/change-password', Pages.changePasswordPage);

document.addEventListener('DOMContentLoaded', () => {
  router.go(window.location.pathname);
})
