import { expect } from 'chai';
import removeElement from '../src/RemoveElement';

describe('tests for remove elements in array', ()=>{
    let result;
    it('should return 0', ()=>{
        result = removeElement([],4);
        expect(result).to.equal(0);
    });
    it('should return the expected array length', ()=>{
        const arr = [10,10,2,41,2,4]
        result = removeElement(arr,10);
        expect(result).to.equal(4);
        expect(arr).deep.equal([2,41,2,4,2,4]);
    });
    it('should return the expected array length', ()=>{
        const arr = [10,10,2,41,2,4,10,17]
        result = removeElement(arr,10);
        expect(result).to.equal(5);
        expect(arr).deep.equal([2,41,2,4,17,4,10,17]);
    });
});