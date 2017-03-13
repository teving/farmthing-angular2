export interface IAmount {
   amount: Number;
   unit: String;
}

export function amount(amount: Number, unit: String): IAmount {
   return {
      amount,
      unit
   };
}
