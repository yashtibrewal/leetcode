import {expect} from 'chai';
import {countAndSay, toFrequency, toCount}
  from '../src/CountandSay';

describe('testing CountandSay', () => {
  it('should return 1', () => {
    const result = countAndSay(1);
    expect(result).to.equal('1');
  });
  it('should return 1211', () => {
    const result = countAndSay(4);
    expect(result).to.equal('1211');
  });
  it('should return 1211', () => {
    const result = countAndSay(4);
    expect(result).to.equal('1211');
  });
  it('should return 13211311123113112211', () => {
    const result = countAndSay(10);
    expect(result).to.equal('13211311123113112211');
  });
  it('should return 31131211131221', () => {
    const result = countAndSay(9);
    expect(result).to.equal('31131211131221');
  });
});

describe('testing sub function: toFrequency', () => {
  it('should return expected result', () => {
    const result = toFrequency('1');
    expect(result).deep.equal([{num: 1, str: '1'}]);
  });
  it('should return expected result', () => {
    const result = toFrequency('11');
    expect(result).deep.equal([{num: 2, str: '1'}]);
  });
  it('should return expected result', () => {
    const result = toFrequency('2222');
    expect(result).deep.equal([{num: 4, str: '2'}]);
  });
  it('should return expected result', () => {
    const result = toFrequency('145');
    expect(result).deep.equal([{num: 1, str: '1'},
      {num: 1, str: '4'}, {num: 1, str: '5'}]);
  });
});

describe('testing sub function: toCount', () => {
  it('should return 11', () => {
    const result = toCount([{num: 1, str: '1'}]);
    expect(result).to.equal('11');
  });
  it('should return 21', () => {
    const result = toCount([{num: 2, str: '1'}]);
    expect(result).to.equal('21');
  });
  it('should return 42', () => {
    const result = toCount([{num: 4, str: '2'}]);
    expect(result).to.equal('42');
  });
  it('should return 111415', () => {
    const result = toCount([{num: 1, str: '1'},
      {num: 1, str: '4'}, {num: 1, str: '5'}]);
    expect(result).to.equal('111415');
  });
});
