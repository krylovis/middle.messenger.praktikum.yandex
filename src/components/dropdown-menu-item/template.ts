import '../dropdown-menu/dropdown-menu.scss';

export const dropdownMenuItemTemplate = `
<li class="dropdown-menu__item{{#if type}} dropdown-menu__item_type_{{type}}{{/if}}">
  <span class="dropdown-menu__icon{{#if type}} dropdown-menu__icon_type_{{type}}{{/if}}"></span>
  {{ text }}
</li>`;
