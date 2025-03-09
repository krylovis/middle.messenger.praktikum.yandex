import EventBus from "@/utils/EventBus";
import { BASE_WSS_URL, CHAT_ENDPOINT } from "@/utils/constants";
import store, { Store} from '@/utils/Store';

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

export type IMessage = Record<string, string>;
export type TTimeout = ReturnType<typeof setTimeout>;

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
  pingIntervalId: TTimeout | null;

  store: Store;

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

    this.store = store;

    this.handleOpenWS = this.openWebSocket.bind(this);
    this.handleCloseWS = this.closeWebSocket.bind(this);
    this.handleMessageWS = this.messageWebSocket.bind(this);
    this.handleErrorWS = this.errorWebSocket.bind(this);
  }

  createWebSocket({ token, userId, chatId }: ICreateData) {
    this.closeConnect();

    this.token = token;
    this.chatId = chatId;
    this.userId = userId;

    this.socket = new WebSocket(`
      ${this.host}/${this.endpoint}/${this.userId}/${this.chatId}/${this.token}
    `);

    if (this.socket) {
      this.setEventListeners();
      this.setPingInterval();
    }
  }

  public closeConnect() {
    if (this.socket) {
      this.socket.close();
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

    this.clearPingInterval();
    console.log(`Код: ${event.code} | Причина: ${event.reason}`);
  }

  messageWebSocket(event: MessageEvent) {
    if (event?.data) {
      const data = JSON.parse(event.data);
      console.log('Получены данные', data);

      if (Array.isArray(data)) {
        this.store.set('messagesList', data);
      } else if (data.type === 'message') {
        this.store.setMessage(data);
      } else {
        //
      }
    }
  }

  errorWebSocket(event: ErrorEventInit) {
    console.log('Ошибка', event.message);
  }

  public sendMessage({ message }: IMessage) {
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
    this.pingIntervalId = (setInterval(() => {
      this.socket?.send(JSON.stringify({ type: 'ping', content: '' }));
    }, 3000));
  }

  private clearPingInterval() {
    if (this.pingIntervalId) {
      clearInterval(this.pingIntervalId as TTimeout);
    }
  }
}

export default new ChatWebSocket({ host: BASE_WSS_URL, endpoint: CHAT_ENDPOINT });
