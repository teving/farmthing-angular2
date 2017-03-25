export interface IAmount {
   amount: number;
   unit: string;
}

export function amount(amount: number, unit: string): IAmount {
   return {
      amount,
      unit
   };
}
