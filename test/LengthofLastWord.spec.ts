import {expect} from 'chai';
import lengthOfLastWord from '../src/LengthofLastWord';

describe('testing lengthOfLastWord', () => {
  it('should return 0', () => {
    const result = lengthOfLastWord('HelloWorld');
    expect(result).to.equal(10);
  });
  it('should return 5', () => {
    const result = lengthOfLastWord('Hello World');
    expect(result).to.equal(5);
  });
  it('should return 3', () => {
    const result = lengthOfLastWord('Hello World     l ase');
    expect(result).to.equal(3);
  });
  it('should return 8', () => {
    const result = lengthOfLastWord('I am a rockstar');
    expect(result).to.equal(8);
  });
  it('should return 0', () => {
    const result = lengthOfLastWord('     ');
    expect(result).to.equal(0);
  });
});
