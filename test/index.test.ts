import { test, expect } from '@jest/globals';

function hello(name) {
  return `Hello ${name}`;
};

test('test', () => {
  expect(hello('jest')).toBe('Hello jest');
});
