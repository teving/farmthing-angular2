import { assert } from 'chai';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
   describe('constructor', () => {
      it('should not throw', () => {
         const act = () => new AppComponent();

         assert.doesNotThrow(act, Error);
      });
   });
});
