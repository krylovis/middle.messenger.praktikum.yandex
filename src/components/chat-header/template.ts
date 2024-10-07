import './chat-header.scss';

export const chatHeaderTemplate = `
<div class="chat-header">
  {{{ Avatar }}}
  <span class="chat-header__name">Опоссум</span>

  <div class="chat-header__menu-container">
    {{{ DropdownMenu }}}

    <button class="chat-header__menu"></button>
  </div>
</div>`;
