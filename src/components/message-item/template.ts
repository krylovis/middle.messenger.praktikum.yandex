import './message-item.scss';

export const messageItemTemplate = `
<li class="message-item">
  {{ message }}
  <div class="message-item__info">
    <span class="message-item__time">{{ sentedAt }}</span>
    {{#if owner}}<span class="message-item__icon"></span>{{/if}}
  </div>
</li>`;
