import {ToArrayPipe} from './to-array.pipe';

describe('ToArrayPipe', () => {
  it('create an instance', () => {
    const pipe = new ToArrayPipe();
    expect(pipe).toBeTruthy();
  });

  it('should create an array from a string', () => {
    const pipe = new ToArrayPipe();
    const testString = 'this, is, a, test, string';
    expect(pipe.transform(testString)).toEqual(['this', 'is', 'a', 'test', 'string']);
  });
});
