import './chat-item.scss';

export const chatItemTemplate = `
<li class="chat-item">
  <span class="chat-item__line"></span>

  <div class="chat-item__container">
    {{{ Avatar }}}

    <div class="chat-item__content">
      <div class="chat-item__header">
        <p class="chat-item__name">{{ title }}</p>
        {{#if time}}<span class="chat-item__updated">{{ time }}</span>{{/if}}
      </div>

      <div class="chat-item__body">
        {{#if lastMessage}}<p class="chat-item__message">{{ lastMessage }}</p>{{/if}}
        {{#if unreadCount}}<div class="chat-item__counter">{{ unreadCount }}</div>{{/if}}
      </div>
    </div>
  </div>
</li>`;
