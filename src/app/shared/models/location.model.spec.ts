import {assert} from 'chai';
import {ILocation, location} from './location.model';

describe('location.model', () => {
   describe('factory', () => {
      it('should create an ILocation from the arguments', () => {
         const result = location(1, 2);
         const expected = {
            latitude: 1,
            longitude: 2
         };

         assert.deepEqual(result, expected);
      });
   });
});
