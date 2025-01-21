import './chat-content.scss';

export const chatContentTemplate = `
<div class="chat-content">
  {{#if lists.length}}
    <ul class="chat-content__message-list">
      {{{ lists }}}
    </ul>
  {{ else }}
    <p class="chat-content__empty-text">
      Выберите чат чтобы отправить сообщение
    </p>
  {{/if}}
</div>`;
