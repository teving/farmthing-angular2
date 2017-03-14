import {assert} from 'chai';
import {ISupplier, supplier} from './supplier.model';
import {location} from './location.model';
import {availableProduce} from './available-produce.model';
import {produce} from './produce.model';
import {amount} from './amount.model';
import {pricePerUnit} from './price-per-unit.model';

describe('supplier.model', () => {
   describe('factory', () => {
      it('should create an ISupplier from the arguments', () => {
         const result = supplier(
                           'My Farm',
                           location(1, 2),
                           [
                              availableProduce(
                                 produce('Apples', 'Green'),
                                 amount(2, 'kg'),
                                 amount(1, 'kg'),
                                 pricePerUnit(1.1, '£', 'kg')
                              ),
                              availableProduce(
                                 produce('Apples', 'Red'),
                                 amount(3, 'kg'),
                                 amount(1.5, 'kg'),
                                 pricePerUnit(2.1, '£', 'kg')
                              )
                           ]
                        );

         const expected = {
            name: 'My Farm',
            location: {
               latitude: 1,
               longitude: 2
            },
            availableProduce: [
               {
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
               },
               {
                  produce: {
                     type: 'Apples',
                     description: 'Red'
                  },
                  amountAvailable: {
                     amount: 3,
                     unit: 'kg'
                  },
                  minimumOrderSize: {
                     amount: 1.5,
                     unit: 'kg'
                  },
                  price: {
                     amount: 2.1,
                     currency: '£',
                     unit: 'kg'
                  }
               }
            ]
         };

         assert.deepEqual(result, expected);
      });
   });
});
