export type TListener = <T>(...args: T[]) => void;
export default class EventBus {
  readonly listeners: Record<string, TListener[]>;

  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: TListener): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string, callback: () => void): void {
		if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event]
    .filter((listener) => listener !== callback);
  }

	emit(event: string, ...args: unknown[]): void {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event].forEach((listener) => {
      listener(...args);
    });
  }
}
