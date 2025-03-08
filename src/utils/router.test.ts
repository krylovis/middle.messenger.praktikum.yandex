import { describe, expect, test } from '@jest/globals';
import { router } from '@/utils/Router';

describe('Проверка роутера', () => {
  test('Страница регистрации', () => {
    router.go('/sign-up');
    expect(window.location.pathname).toEqual('/sign-up');
  });

  test('Главная страница', () => {
    router.go('/messenger');
    expect(window.location.pathname).toEqual('/messenger');
  });

  test('Страница настроек', () => {
    router.go('/settings');
    expect(window.location.pathname).toEqual('/settings');
  });
});
