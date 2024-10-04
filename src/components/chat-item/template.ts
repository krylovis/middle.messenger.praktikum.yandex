import './chat-item.scss';

export const chatItemTemplate = `
<li class="chat-item">
  <span class="chat-item__line"></span>

  <div class="chat-item__container">
    {{{ Avatar }}}

    <div class="chat-item__content">
      <div class="chat-item__header">
        <p class="chat-item__name">{{ name }}</p>
        <span class="chat-item__updated">{{ updatedAt }}</span>
      </div>

      <div class="chat-item__body">
        <p class="chat-item__message">{{ message }}</p>
        <div class="chat-item__counter">{{ unread }}</div>
      </div>
    </div>
  </div>
</li>`;
