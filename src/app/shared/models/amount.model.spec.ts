import {assert} from 'chai';
import {IAmount, amount} from './amount.model';

describe('amount.model', () => {
   describe('factory', () => {
      it('should create an IAmount from the arguments', () => {
         const result = amount(1, 'kg');
         const expected = {amount: 1, unit: 'kg'};
         
         assert.deepEqual(result, expected);
      });
   });
});
