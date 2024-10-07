import './message-item.scss';

export const messageItemTemplate = `
<li class="message-item{{#if media}} message-item_type_img{{/if}}">
  {{#if media}}
    <img src={{ media }} class="message-item__img">
  {{else}}
    {{ message }}
  {{/if}}

  <div class="message-item__info{{#if media}} message-item__info_type_img{{/if}}">
    <span class="message-item__time">{{ sentedAt }}</span>
    {{#if owner}}<span class="message-item__icon"></span>{{/if}}
  </div>
</li>`;
