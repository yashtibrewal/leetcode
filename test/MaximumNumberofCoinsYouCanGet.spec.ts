import maxCoins from '../src/MaximumNumberofCoinsYouCanGet';
import {expect} from 'chai';

describe('testing maxCoins', () => {
  it('should return 9', () => {
    const result = maxCoins( [2, 4, 1, 2, 7, 8]);
    expect(result).to.equal(9);
  });
  it('should return 4', () => {
    const result = maxCoins([2, 4, 5]);
    expect(result).to.equal(4);
  });
  it('should return 18', () => {
    const result = maxCoins( [9, 8, 7, 6, 5, 1, 2, 3, 4]);
    expect(result).to.equal(18);
  });
});
