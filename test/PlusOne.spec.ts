import {expect} from 'chai';
import plusOne from '../src/PlusOne';

describe('testing PlusOne', () => {
  it('should return [1,2,4]', () => {
    const result = plusOne([1, 2, 3]);
    expect(result).deep.equal([1, 2, 4]);
  });
  it('should return [4,3,2,1]', () => {
    const result = plusOne([4, 3, 2, 1]);
    expect(result).deep.equal([4, 3, 2, 2]);
  });
  it('should return [0]', () => {
    const result = plusOne([0]);
    expect(result).deep.equal([1]);
  });
  it('should return [1,0,0,0]', () => {
    const result = plusOne([9, 9, 9]);
    expect(result).deep.equal([1, 0, 0, 0]);
  });
});
