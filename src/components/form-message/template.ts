import './form-message.scss';

export const formMessageTemplate = `
<form class="form-message" name="{{ formName }}" action="{{ formAction }}">
  {{{ lists }}}
  {{{ SubmitButton }}}
</form>`;
