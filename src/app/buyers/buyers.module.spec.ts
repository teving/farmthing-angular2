import { assert } from 'chai';
import { BuyersModule } from './buyers.module';

describe('BuyersModule', () => {
   describe('constructor', () => {
      it('should not throw', () => {
         const act = () => new BuyersModule();

         assert.doesNotThrow(act, Error);
      });
   });
});
