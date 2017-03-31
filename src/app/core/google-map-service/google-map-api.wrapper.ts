export class GoogleMapApiWrapper {
   public createMap(element: Element): google.maps.Map {
      return new google.maps.Map(element);
   }
}
