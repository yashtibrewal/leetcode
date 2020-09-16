import {expect} from 'chai';
import {canPlaceFlowers} from '../src/CanPlaceFlowers';


describe('testing can place flowers', ()=>{
  it('should return true', ()=>{
    const result = canPlaceFlowers([1, 0, 0, 0, 1], 1);
    expect(result).to.equals(true);
  });
  it('should return false', ()=>{
    const result = canPlaceFlowers([1, 0, 0, 0, 1], 2);
    expect(result).to.equals(false);
  });
  it('should return false', ()=>{
    const result = canPlaceFlowers([1, 0, 0, 1, 1], 1);
    expect(result).to.equals(false);
  });
  it('should return true', ()=>{
    const result = canPlaceFlowers([0, 1, 0, 1, 0, 0], 1);
    expect(result).to.equals(true);
  });
});
