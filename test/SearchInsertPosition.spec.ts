import {expect} from 'chai';
import searchInsert from '../src/SearchInsertPosition';

describe('SearchInsertPosition Tests', () => {
  it('should return 2', () => {
    const result: number = searchInsert([1, 3, 5, 6], 5);
    expect(result).to.equal(2);
  });

  it('should return 1', () => {
    const result: number = searchInsert([1, 3, 5, 6], 2);
    expect(result).to.equal(1);
  });

  it('should return 4', () => {
    const result: number = searchInsert([1, 3, 5, 6], 7);
    expect(result).to.equal(4);
  });

  it('should return 0', () => {
    const result: number = searchInsert([1, 3, 5, 6], 0);
    expect(result).to.equal(0);
  });

  it('should return 0', () => {
    const result: number = searchInsert([], 0);
    expect(result).to.equal(0);
  });
});
