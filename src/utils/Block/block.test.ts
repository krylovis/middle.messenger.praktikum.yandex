import Block, { IData } from '../Block';
import { describe, expect } from '@jest/globals';

class TitleComponent extends Block<IData> {
  constructor(props: IData) {
    super({ ...props })
  }

  render() {
    return '<h1 class="title-component">{{ title }}</h1>';
  }
}

const titleComponent = new TitleComponent({ title: 'Заголовок' });

describe('Проверка класса Block', () => {

  test('Компонент TitleComponent', () => {
    expect(titleComponent?.getContent()?.innerHTML).toEqual('Заголовок');
    });
});
