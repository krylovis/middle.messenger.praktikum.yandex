export const changeAvatarContentTemplate = `
<form class="popup__form" name="new-avatar-form" action="new-avatar-action">

  <label class="popup__input-label" for="input-new-avatar">
    Выбрать файл на компьютере
    <input id="input-new-avatar" class="popup__input" type="file" accept=".jpg, .png" />
  </label>

  {{{ Button }}}
</form>`;
