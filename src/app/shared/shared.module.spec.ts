import { assert } from 'chai';
import { SharedModule } from './shared.module';

describe('SharedModule', () => {
   describe('constructor', () => {
      it('should not throw', () => {
         const act = () => new SharedModule();

         assert.doesNotThrow(act, Error);
      });
   });
});
