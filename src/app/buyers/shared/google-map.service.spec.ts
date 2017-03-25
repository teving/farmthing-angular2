import { assert } from 'chai';
import { GoogleMapService } from './google-map.service';

describe('google-map-service', () => {
   function createService() {
      const doc = new DOMParser().parseFromString('<html><body></body></html>', 'text/html');
      return new GoogleMapService(doc);
   }

   describe('getMap', () => {
      it('should give a map with a div container', () => {
         const service = createService();

         const map = service.getMap();

         const container = map.getDiv();
         const result = container.tagName;
         const expected = 'DIV';
         assert.equal(result, expected);
      });

      it('should give a map whose container has the google-map-container class', () => {
         const service = createService();

         const map = service.getMap();

         const container = map.getDiv();
         const result = container.className;
         const expected = 'google-map-container';
         assert.equal(result, expected);
      });

      it('should return the same map instance each time it is called', () => {
         const service = createService();

         const firstMap = service.getMap();
         const secondMap = service.getMap();

         assert.strictEqual(firstMap, secondMap);
      });
   });
});
