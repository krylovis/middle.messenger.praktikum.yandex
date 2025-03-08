import { authApi } from './AuthApi';
import { describe, expect } from '@jest/globals';

describe('Проверка authApi', () => {
  it('authApi', async () => {
    await expect(authApi.getUser()).rejects.toThrow('Ошибка сервера: Unauthorized');
  });
});
