import {IAmount} from './amount.model';

export interface IAvailableProduce {
   type: String;
   description: String;
   amountAvailable: IAmount;
   minimumOrderSize: IAmount;
   price: Number;
}

export function availableProduce(
                     type: String,
                     description: String,
                     amountAvailable: IAmount,
                     minimumOrderSize: IAmount,
                     price: Number): IAvailableProduce {
   return {
      type,
      description,
      amountAvailable,
      minimumOrderSize,
      price
   };
}
