import './error-page.scss';

export const errorPageTemplate = `
<section class="error-page">
  <div class="error-page__container">
    <div class="error-page__error-container">
      <span class="error-page__error">{{ error }}</span>
      <span class="error-page__text">{{ text }}</span>
    </div>

    {{{ NavLink }}}
  </div>
</section>`;
