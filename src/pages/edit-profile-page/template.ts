import './edit-profile-page.scss';

export const editProfilePageTemplate = `
<section class="profile-page">
  <div class="profile-page__sidebar">
    {{{ ButtonArrow }}}
  </div>

  <div class="profile-page__content">
    <div class="profile-page__container">
      {{{ ProfileAvatar }}}

      {{{ ProfileForm }}}
    </div>
  </div>

  {{{ PopupChangeAvatar }}}
</section>`;
