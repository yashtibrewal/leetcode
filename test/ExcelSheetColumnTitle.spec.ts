import {expect} from 'chai';
import {convertToTitle} from '../src/ExcelSheetColumnTitle';

describe('testing convert to title', ()=>{
  it('should return A', ()=>{
    const result = convertToTitle(1);
    expect(result).to.equal('A');
  });
  it('should return AB', ()=>{
    const result = convertToTitle(28);
    expect(result).to.equal('AB');
  });
  it('should return ZY', ()=>{
    const result = convertToTitle(701);
    expect(result).to.equal('ZY');
  });
});
