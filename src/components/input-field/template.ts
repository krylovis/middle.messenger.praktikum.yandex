import './input-field.scss';

export const inputFieldTemplate = `
<label for="{{ id }}" class="input-field">
  {{{ label }}}

  {{{ Input }}}

  {{{ InputError }}}
</label>
`;
