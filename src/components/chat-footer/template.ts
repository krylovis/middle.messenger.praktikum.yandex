import './chat-footer.scss';

export const chatFooterTemplate = `
<div class="chat-footer">
  <div class="chat-footer__menu-container">
    {{{ DropdownMenu }}}
    {{{ ButtonMenu }}}
  </div>

  {{{ FormMessage }}}
</div>`;
