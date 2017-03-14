import {IProduce} from './produce.model';
import {IAmount} from './amount.model';
import {IPricePerUnit} from './price-per-unit.model';

export interface IAvailableProduce {
   produce: IProduce;
   amountAvailable: IAmount;
   minimumOrderSize: IAmount;
   price: IPricePerUnit;
}

export function availableProduce(
                     produce: IProduce,
                     amountAvailable: IAmount,
                     minimumOrderSize: IAmount,
                     price: IPricePerUnit): IAvailableProduce {
   return {
      produce,
      amountAvailable,
      minimumOrderSize,
      price
   };
}
