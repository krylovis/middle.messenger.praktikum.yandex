import './main-page.scss';

export const mainPageTemplate = `
<section class="main-page">
  <div class="main-page__chat-list-container">
    {{ ChatList }}
  </div>

  <div class="main-page__content main-page__content_type_chat">
    {{ ChatHeader }}
    {{ ChatContent }}
    {{ ChatFooter }}
  </div>
</section>`;
