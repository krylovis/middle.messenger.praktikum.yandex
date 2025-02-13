import './avatar.scss';
import defaultAvatar from '../../../static/images/default.png';

export const avatarTemplate = `
<div class="avatar">
  {{#if avatar}}
    <img src="https://ya-praktikum.tech/api/v2/resources{{avatar}}" alt="Аватар" class="avatar__image" />
  {{else}}
    <img src="${defaultAvatar}" alt="Аватар" class="avatar__image" />
  {{/if}}
</div>`;
