import './dropdown-menu.scss';

export const dropdownMenuTemplate = `
<div class="dropdown-menu__container">
    {{{ ButtonMenu }}}

    <ul class="dropdown-menu{{#if type}} dropdown-menu_type_{{type}}{{/if}}">
      {{{ lists }}}
    </ul>
</div>`;
