import {ILocation} from './location.model';
import {IAvailableProduce} from './available-produce.model';

export interface ISupplier {
   name: string;
   location: ILocation;
   availableProduce: IAvailableProduce[];
}

export function supplier(name: string, location: ILocation, availableProduce: IAvailableProduce[]): ISupplier {
   return {
      name,
      location,
      availableProduce
   };
}
