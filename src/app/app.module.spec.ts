import { assert } from 'chai';
import { AppModule } from './app.module';

describe('AppModule', () => {
   describe('constructor', () => {
      it('should not throw', () => {
         const act = () => new AppModule();

         assert.doesNotThrow(act, Error);
      });
   });
});
