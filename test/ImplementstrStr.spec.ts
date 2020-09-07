import 'mocha';
import {expect} from 'chai';
import srtSrt from '../src/ImplementstrStr';

describe('testing strstr', ()=>{
  it('should return 0', ()=>{
    const result = srtSrt('', '');
    expect(result).to.equal(0);
  });
  it('should return 2', ()=>{
    const result = srtSrt('hello', 'll');
    expect(result).to.equal(2);
  });
  it('should return -1', ()=>{
    const result = srtSrt('aaaaa', 'bba');
    expect(result).to.equal(-1);
  });
  it('should return 0', ()=>{
    const result = srtSrt('aaaaa', 'aa');
    expect(result).to.equal(0);
  });
  it('should return -1', ()=>{
    const result = srtSrt('', 'aa');
    expect(result).to.equal(-1);
  });
  it('should return -1', ()=>{
    const result = srtSrt('hello brother', 'erx');
    expect(result).to.equal(-1);
  });
});
