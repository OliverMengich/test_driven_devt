import { expect } from 'chai';
import {getLetterCount} from './letter-count.js';
describe('getLetterCount - basic functionality', () => {
    //specify functionality 
    it('returns an empty object whn passed an empty string',()=>{
        const expected = {};
        const actual = getLetterCount('');
        expect(actual).to.deep.equal(expected);
    })
    it('returns corrent letter count for a word with only one of each letter',()=>{
        const expected = {c: 1, a:1, t:1};
        const actual = getLetterCount('cat');
        expect(actual).to.deep.equal(expected);
    })
    it('returns correct letter count for wors with more than one of certain letters',()=>{
        
        const expected = {m: 1,i: 4,s: 4,p: 2};
        const actual = getLetterCount('mississippi');
        console.log(actual);
        expect(actual).to.deep.equal(expected);
    })
})