import './chat-footer.scss';

export const chatFooterTemplate = `
<div class="chat-footer">
  <div class="chat-footer__menu-container">
    {{{ DropdownMenu }}}

    <button class="chat-footer__menu"></button>
  </div>

  <form class="chat-footer__message-form" name="new-message-form" action="new-message-action">
    <input id="message-input" class="chat-footer__message-input" name="message" type="text" placeholder="Сообщение" />
    <button class="chat-footer__submit" type="submit" aria-label="message"></button>
  </form>
</div>`;
