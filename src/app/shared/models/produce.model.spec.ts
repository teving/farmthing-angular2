import {assert} from 'chai';
import {IProduce, produce} from './produce.model';

describe('produce.model', () => {
   describe('factory', () => {
      it('should create an IProduce from the arguments', () => {
         const result = produce('Apples', 'Green');
         const expected = {
            type: 'Apples',
            description: 'Green'
         };

         assert.deepEqual(result, expected);
      });
   });
});
