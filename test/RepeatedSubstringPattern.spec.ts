import repeatedSubstringPattern from '../src/RepeatedSubstringPattern';
import { expect } from 'chai';
import 'mocha';

describe('repeated substring pattern', () => {
  it('should return true', () =>{
    const result = repeatedSubstringPattern("abababababababab");
    expect(result).to.equal(true);
  });
  it('should return false', () =>{
    const result = repeatedSubstringPattern("");
    expect(result).to.equal(false);
  });
  it('should return true', () =>{
    const result = repeatedSubstringPattern("abcdabcd");
    expect(result).to.equal(true);
  });
  it('should return false', () =>{
    const result = repeatedSubstringPattern("abababbababababababbbaa");
    expect(result).to.equal(false);
  });
  it('should return false', () =>{
    const result = repeatedSubstringPattern("aba");
    expect(result).to.equal(false);
  });
});