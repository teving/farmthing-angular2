import {assert} from 'chai';
import {amount} from './amount.model';
import {IAvailableProduce, availableProduce} from './available-produce.model';

describe('available-produce.model', () => {
   describe('factory', () => {
      it('should create an IAvailableProduce from the arguments', () => {
         const result = availableProduce('Apples', 'Green', amount(2, 'kg'), amount(1, 'kg'), 1.1);
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
