import './profile-avatar.scss';

export const profileAvatarTemplate = `
<div class="profile-avatar">
  {{#if isEditAvatar}}
  <button class="profile-avatar__edit-button" type="button" aria-label="Редактировать аватар профиля">
    <img src={{ avatar }} alt="Аватар" class="profile-avatar__avatar profile-avatar__avatar_type_edit" />
  </button>
  {{else}}
    <img src={{ avatar }} alt="Аватар" class="profile-avatar__avatar" />
  {{/if}}

  <p class="profile-avatar__name">{{ name }}</p>
</div>`;
