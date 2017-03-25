export interface ILocation {
   latitude: number;
   longitude: number;
}

export function location(latitude: number, longitude: number): ILocation {
   return {
      latitude,
      longitude
   };
}
