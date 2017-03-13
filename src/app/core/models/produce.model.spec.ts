import {assert} from 'chai';
import {amount} from './amount.model';
import {IProduce, produce} from './produce.model';

describe('produce.model', () => {
   describe('factory', () => {
      it('should create an IProduce from the arguments', () => {
         const result = produce('Apples', 'Green', amount(2, 'kg'), amount(1, 'kg'), 1.1);
         const expected = {
            type: 'Apples',
            description: 'Green',
            amountAvailable: {
               amount: 2,
               unit: 'kg'
            },
            minimumOrderSize: {
               amount: 1,
               unit: 'kg'
            },
            price: 1.1
         };
         
         assert.deepEqual(result, expected);
      });
   });
});
