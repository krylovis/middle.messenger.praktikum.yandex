import './input.scss';

export const inputTemplate = `
<input
  id="{{ id }}"
  class="input"
  type="{{ type }}"
  name="{{ name }}"
  placeholder="{{ placeholder }}"
  minlength="2"
  maxlength="30"
  required
>
`;
