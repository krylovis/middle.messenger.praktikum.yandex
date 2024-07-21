import './profile-page.scss';

export const profilePageTemplate = `
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
</section>`;
