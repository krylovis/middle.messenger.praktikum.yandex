import './button-with-icon.scss';

export const buttonWithIconTemplate = `
<button
  class="button-with-icon {{#if iconName}} button-with-icon_type_{{ iconName }}{{/if}}"
  style="{{#if buttonSize}}width: {{ buttonSize }}px; height: {{ buttonSize }}px;{{/if}}"
  {{#if title}} title="{{ title }}"{{/if}}
  type="{{ type }}">
</button>`;
