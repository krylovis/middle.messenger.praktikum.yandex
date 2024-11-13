import defaultAvatar from '../../../static/images/default.png';
import './profile-avatar.scss';

export const profileAvatarTemplate = `
<div class="profile-avatar">
  {{#if isEditAvatar}}
  <button class="profile-avatar__edit-button" type="button" aria-label="Редактировать аватар профиля">
    {{#if avatar}}
      <img src={{ avatar }} alt="Аватар" class="profile-avatar__avatar" />
    {{else}}
      <img src="${defaultAvatar}" alt="Аватар" class="profile-avatar__avatar" />
    {{/if}}
  </button>
  {{else}}
    {{#if avatar}}
      <img src={{ avatar }} alt="Аватар" class="profile-avatar__avatar" />
    {{else}}
      <img src="${defaultAvatar}" alt="Аватар" class="profile-avatar__avatar" />
    {{/if}}

    <p class="profile-avatar__name">{{ name }}</p>
  {{/if}}
</div>`;
