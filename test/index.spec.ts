import { expect } from 'chai';

function hello(name: string) {
  return `Hello ${name}`;
};

describe('test', () => {
  it('should return string correctly', () => {
    expect(hello("mocha"), "Hello mocha");
  });
});
