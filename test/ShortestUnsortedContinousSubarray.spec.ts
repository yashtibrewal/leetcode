import {expect} from 'chai';
import {findUnsortedSubarray} from '../src/ShortestUnsortedContinousSubarray';

describe('testing findUnsortedSubarray', ()=>{
  it('should return 5', ()=>{
    const result = findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]);
    expect(result).to.equal(5);
  });
  it('should return 0 ', ()=>{
    const result = findUnsortedSubarray([1, 2, 3, 4]);
    expect(result).to.equal(0);
  });
  it('should return 2 ', ()=>{
    const result = findUnsortedSubarray([4, 3]);
    expect(result).to.equal(2);
  });
});
