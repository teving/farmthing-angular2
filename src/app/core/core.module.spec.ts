import { assert } from 'chai';
import { CoreModule } from './core.module';

describe('CoreModule', () => {
   describe('constructor', () => {
      describe('when already loaded', () => {
         it('should throw an exception', () => {
            const parentModule: any = {};

            const act = () => new CoreModule(parentModule);

            assert.throws(act, Error, 'CoreModule has already been loaded. Import Core modules in the AppModule only.');
         });
      });

      describe('when not already loaded', () => {
         it('should not throw an exception', () => {
            const parentModule: any = null;

            const act = () => new CoreModule(parentModule);

            assert.doesNotThrow(act, Error);
         });
      });
   });
});
