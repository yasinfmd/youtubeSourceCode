import { CustomPipe } from './custom.pipe';

describe('CustomPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomPipe();
    expect(pipe).toBeTruthy();
  });
});
