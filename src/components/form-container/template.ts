import './form-container.scss';

export const formContainerTemplate = `
<section class="form-container">
  <h1 class="form-container__title">{{{ formTitle }}}</h1>

  <form class="form-container__content" name="{{ formName }}" action="{{ formAction }}">
    {{{ lists }}}

    <div class="form-container__button-container">
      {{{ SubmitButton }}}
      {{{ NavLink }}}
    </div>
  </form>
</section>
`;
