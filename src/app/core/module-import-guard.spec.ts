import { assert } from 'chai';
import { throwIfAlreadyLoaded } from './module-import-guard';

describe('module-import-guard', () => {
   describe('throwIfAlreadyLoaded', () => {
      it('should not throw if the parent module is null', () => {
         const act = () => throwIfAlreadyLoaded(null, 'moduleName');
         assert.doesNotThrow(act, Error);
      });

      it('should throw an Error with the module name if the parent module is not null', () => {
         const act = () => throwIfAlreadyLoaded({}, 'myModule');
         assert.throws(act, Error, 'myModule has already been loaded. Import Core modules in the AppModule only.');
      });
   });
});
