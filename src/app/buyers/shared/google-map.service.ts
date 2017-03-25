import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class GoogleMapService {
   private mapInstance: google.maps.Map;
   private mapContainer: Element;

   constructor(@Inject(DOCUMENT) private document: Document) {}

   public getMap(): google.maps.Map {
      if (!this.mapInstance) {
         const container = document.createElement('div');
         container.className = 'google-map-container';
         this.mapContainer = container;
         this.mapInstance = new google.maps.Map(container);
      }

      return this.mapInstance;
   }
}
