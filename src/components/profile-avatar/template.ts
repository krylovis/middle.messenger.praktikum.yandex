import './profile-avatar.scss';

export const profileAvatarTemplate = `
<div class="profile-avatar">
  <button class="profile-avatar__edit-button" type="button" aria-label="Редактировать аватар профиля">
    <img src={{ avatar }} alt="Аватар" class="profile-avatar__avatar" />
  </button>

  <p class="profile-avatar__name">{{ name }}</p>
</div>`;

// {{#if avatar}}
// <img src={{ avatar }} alt="Аватар" class="profile-avatar__avatar" />
// {{else}}<div class="profile-avatar__icon-avatar"></div>
// {{/if}}
