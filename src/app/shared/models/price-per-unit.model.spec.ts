import {assert} from 'chai';
import {IPricePerUnit, pricePerUnit} from './price-per-unit.model';

describe('price-per-unit.model', () => {
   describe('factory', () => {
      it('should create an IPricePerUnit from the arguments', () => {
         const result = pricePerUnit(1.1, '£', 'kg');
         const expected = {
            amount: 1.1,
            currency: '£',
            unit: 'kg'
         };

         assert.deepEqual(result, expected);
      });
   });
});
