import { TestMiddleware } from './test.middleware';

describe('TestMiddleware', () => {
  it('should be defined', () => {
    expect(new TestMiddleware()).toBeDefined();
  });
});
