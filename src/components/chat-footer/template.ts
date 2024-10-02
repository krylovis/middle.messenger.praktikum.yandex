import './chat-footer.scss';

export const chatFooterTemplate = `
<div class="chat-footer">
  <div class="chat-footer__menu-container">
    {{{ DropdownMenu }}}

    <button class="chat-footer__menu"></button>
  </div>

  {{{ FormMessage }}}
</div>`;
