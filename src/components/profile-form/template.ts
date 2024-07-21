import './profile-form.scss';

export const profileFormTemplate = `
<section class="profile-form">
  <form class="profile-form__content" name="profile-form" action="profile-action">
    {{{ lists }}}

    <div class="profile-form__button-container">
      {{{ SubmitButton }}}

      {{{ NavLinkEdit }}}
      {{{ NavLinkPassword }}}
      {{{ NavLinkLogout }}}
    </div>
  </form>
</section>`;
