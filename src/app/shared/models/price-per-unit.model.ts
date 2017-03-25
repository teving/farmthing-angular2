export interface IPricePerUnit {
   amount: number;
   currency: string;
   unit: string;
}

export function pricePerUnit(amount: number, currency: string, unit: string): IPricePerUnit {
   return {
      amount,
      currency,
      unit
   };
}
