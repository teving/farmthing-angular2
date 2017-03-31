import { assert } from 'chai';

import { GoogleMapApiWrapper } from './google-map-api.wrapper';

describe('GoogleMapApiWrapper', () => {
   describe('createMap', () => {
      it('should create a new google.maps.Map object', () => {
            const target = new GoogleMapApiWrapper();

            const element = document.createElement('div');
            const result = target.createMap(element);
            const expected = google.maps.Map;

            assert.instanceOf(result, expected);
      });

      it('should create a map with the given element', () => {
         const target = new GoogleMapApiWrapper();

         const element = document.createElement('div');
         const map = target.createMap(element);
         const result = map.getDiv();

         assert.deepEqual(element, result);
      });
   });
});
