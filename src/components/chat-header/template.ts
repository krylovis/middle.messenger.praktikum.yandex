import './chat-header.scss';

export const chatHeaderTemplate = `
<div class="chat-header">
  {{{ Avatar }}}

  <span class="chat-header__name">
    {{#if chatName}}
      {{chatName}}
    {{else}}
      ...
    {{/if}}
  </span>

  <div class="chat-header__menu-container">
    {{{ DropdownMenu }}}
  </div>
</div>`;
