import {expect} from 'chai';
import {thirdMax} from '../src/ThirdMaximumNumber';

describe('thirdMax Tests', () => {
  it('should return 1', () => {
    const result: number = thirdMax([3, 2, 1]);
    expect(result).to.equal(1);
  });
  it('should return 1', () => {
    const result: number = thirdMax([1, 2]);
    expect(result).to.equal(2);
  });
  it('should return 1', () => {
    const result: number = thirdMax([2, 2, 3, 1]);
    expect(result).to.equal(1);
  });
});
