import {IAmount} from './amount.model';

export interface IProduce {
   type: String;
   description: String;
   amountAvailable: IAmount;
   minimumOrderSize: IAmount;
   price: Number;
}

export function produce(
                  type: String,
                  description: String,
                  amountAvailable: IAmount,
                  minimumOrderSize: IAmount,
                  price: Number): IProduce {
   return {
      type,
      description,
      amountAvailable,
      minimumOrderSize,
      price
   };
}
