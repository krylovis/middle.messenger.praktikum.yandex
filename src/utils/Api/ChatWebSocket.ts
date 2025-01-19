import EventBus from "@/utils/EventBus";
import { BASE_WSS_URL, CHAT_ENDPOINT } from "@/utils/constants";

export enum WebSocketEvents {
  open = 'open',
  close = 'close',
  message = 'message',
  error = 'error',
}

export interface IData {
  host: string,
  endpoint: string,
}

export interface ICreateData {
  userId: number | null,
  chatId: number | null,
  token: string,
}

export class ChatWebSocket extends EventBus {
  host;
  endpoint;
  token;
  userId: number | null;
  chatId: number | null;
  socket: WebSocket | null;
  pingIntervalId: number | null;

  handleOpenWS;
  handleCloseWS;
  handleMessageWS;
  handleErrorWS;

  constructor({ host, endpoint }: IData) {
    super();

    this.host = host;
    this.endpoint = endpoint;
    this.token = '';
    this.chatId = null;
    this.userId = null;
    this.socket = null;
    this.pingIntervalId = null;

    this.handleOpenWS = this.openWebSocket.bind(this);
    this.handleCloseWS = this.closeWebSocket.bind(this);
    this.handleMessageWS = this.messageWebSocket.bind(this);
    this.handleErrorWS = this.errorWebSocket.bind(this);
  }

  createWebSocket({ token, userId, chatId }: ICreateData) {
    this.token = token;
    this.chatId = userId;
    this.userId = chatId;

    this.socket = new WebSocket(`
      ${this.host}/${this.endpoint}/${this.userId}/${this.chatId}/${this.token}
    `);

    if (this.socket) {
      this.setEventListeners();
      this.setPingInterval();
    }
  }

  setEventListeners() {
    this.socket?.addEventListener(WebSocketEvents.open, this.handleOpenWS);
    this.socket?.addEventListener(WebSocketEvents.close, this.handleCloseWS);
    this.socket?.addEventListener(WebSocketEvents.message, this.handleMessageWS);
    this.socket?.addEventListener(WebSocketEvents.error, this.handleErrorWS);
  }

  openWebSocket() {
    console.log('Соединение установлено');

    this.getMessages({ offset: '0' });
  }

  closeWebSocket(event: CloseEventInit) {
    if (event.wasClean) {
      console.log('Соединение закрыто чисто');
    } else {
      console.log('Обрыв соединения');
    }

    console.log(`Код: ${event.code} | Причина: ${event.reason}`);
  }

  messageWebSocket(event: CompositionEventInit) {
    console.log('Получены данные', event.data);
  }

  errorWebSocket(event: ErrorEventInit) {
    console.log('Ошибка', event.message);
  }

  public sendMessage({ message }: { message: string }) {
    this.socket?.send(JSON.stringify(
      { content: message, type: 'message', }
    ));
  }

  public getMessages({ offset }: { offset: string }) {
    this.socket?.send(JSON.stringify(
      { content: offset, type: 'get old' }
    ));
  }

  private setPingInterval() {
    this.pingIntervalId = setInterval(() => {
      this.socket?.send(JSON.stringify({ type: 'ping' }));
    }, 1000);
  }
}

export default new ChatWebSocket({ host: BASE_WSS_URL, endpoint: CHAT_ENDPOINT });
