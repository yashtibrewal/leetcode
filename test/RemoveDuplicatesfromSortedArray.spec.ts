import 'mocha';
import {expect} from 'chai';
import removeDuplicates from '../src/RemoveDuplicatesfromSortedArray';

describe('test for removeDuplicates', ()=>{
  it('should return 0', ()=>{
    const result = removeDuplicates([]);
    expect(result).to.equal(0);
  });
  it('should return expected array', ()=>{
    const arr = [0, 1, 1, 1, 2, 2, 3, 3];
    const result = removeDuplicates(arr);
    expect(result).to.equal(4);
    expect(arr).deep.equal([0, 1, 2, 3, 2, 2, 3, 3]);
  });
  it('should return expected array', ()=>{
    const arr = [0, 1, 1, 1, 2, 2, 3, 3, 7, 20, 22];
    const result = removeDuplicates(arr);
    expect(result).to.equal(7);
    expect(arr).deep.equal([0, 1, 2, 3, 7, 20, 22, 3, 7, 20, 22]);
  });
});
