import {assert} from 'chai';
import {produce} from './produce.model';
import {amount} from './amount.model';
import {pricePerUnit} from './price-per-unit.model';
import {IAvailableProduce, availableProduce} from './available-produce.model';

describe('available-produce.model', () => {
   describe('factory', () => {
      it('should create an IAvailableProduce from the arguments', () => {
         const result = availableProduce(
                           produce('Apples', 'Green'),
                           amount(2, 'kg'),
                           amount(1, 'kg'),
                           pricePerUnit(1.1, '£', 'kg'));
         const expected = {
            produce: {
               type: 'Apples',
               description: 'Green'
            },
            amountAvailable: {
               amount: 2,
               unit: 'kg'
            },
            minimumOrderSize: {
               amount: 1,
               unit: 'kg'
            },
            price: {
               amount: 1.1,
               currency: '£',
               unit: 'kg'
            }
         };

         assert.deepEqual(result, expected);
      });
   });
});
