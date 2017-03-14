import {ILocation} from './location.model';
import {IAvailableProduce} from './available-produce.model';

export interface ISupplier {
   name: String;
   location: ILocation;
   availableProduce: IAvailableProduce[];
}

export function supplier(name: String, location: ILocation, availableProduce: IAvailableProduce[]): ISupplier {
   return {
      name,
      location,
      availableProduce
   };
}
