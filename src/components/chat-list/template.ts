import './chat-list.scss';

export const chatListTemplate = `
<div class="chat-list">
  <div class="chat-list__header">
    {{{ NavLink }}}
    <input class="chat-list__search-input" type="search" id="search-input" name="search-input" placeholder="Поиск">
    {{{ AddChatBtn }}}
  </div>

  <ul class="chat-list__content">
    {{{ lists }}}
  </ul>
</div>`;
