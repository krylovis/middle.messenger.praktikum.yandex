import './main-page.scss';

export const mainPageTemplate = `
<section class="main-page">
  <div class="main-page__chat-list-container">
    {{{ ChatList }}}
  </div>

  <div class="main-page__content{{#if currentChat}} main-page__content_type_chat{{/if}}">
    {{#if currentChat}}
      {{{ ChatHeader }}}
      {{{ ChatContent }}}
      {{{ ChatFooter }}}
    {{else}}
      <p class="main-page__empty-text">
        Выберите чат чтобы отправить сообщение
      </p>
    {{/if}}
  </div>

  {{{ PopupAddChat }}}
  {{{ PopupAddUser }}}
  {{{ PopupRemoveUser }}}
</section>`;
