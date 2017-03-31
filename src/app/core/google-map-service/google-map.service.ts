import { Injectable } from '@angular/core';
import { GlobalRef } from '../global.provider';
import { GoogleMapApiWrapper } from './google-map-api.wrapper';

@Injectable()
export class GoogleMapService {
   private mapInstance: google.maps.Map;
   private mapContainer: Element;

   constructor(private globalRef: GlobalRef, private apiWrapper: GoogleMapApiWrapper) { }

   public getMap(): google.maps.Map {
      if (!this.mapInstance) {
         this.createMap();
      }

      return this.mapInstance;
   }

   private createMap(): void {
      const container = this.globalRef.getDocument().createElement('div');
      container.className = 'google-map-container';
      this.mapContainer = container;
      this.mapInstance = this.apiWrapper.createMap(container);
   }
}
