import './popup-container.scss';

export const popupContainerTemplate = `
<section class="popup">
  <div class="popup__container">
    <h2 class="popup__title">{{ title }}</h2>

    {{{ content }}}
  </div>
</section>`;
