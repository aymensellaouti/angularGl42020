import { RandomStringPipe } from './random-string.pipe';

describe('RandomStringPipe', () => {
  it('create an instance', () => {
    const pipe = new RandomStringPipe();
    expect(pipe).toBeTruthy();
  });
});
