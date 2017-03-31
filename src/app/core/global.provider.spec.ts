import { assert } from 'chai';

import { GlobalRef } from './global.provider';

describe('GlobalRef', () => {
   describe('getWindow', () => {
      it('should return the global window object', () => {
         const target = new GlobalRef();

         const result = target.getWindow();
         const expected = window;

         assert.deepEqual(expected, result);
      });
   });

   describe('getDocument', () => {
      it('should return the global document object', () => {
         const target = new GlobalRef();

         const result = target.getDocument();
         const expected = document;

         assert.deepEqual(expected, result);
      });
   });
});
