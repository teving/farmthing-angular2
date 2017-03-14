export interface ILocation {
   latitude: Number;
   longitude: Number;
}

export function location(latitude: Number, longitude: Number): ILocation {
   return {
      latitude,
      longitude
   };
}
