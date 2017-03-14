export interface IPricePerUnit {
   amount: Number;
   currency: String;
   unit: String;
}

export function pricePerUnit(amount: Number, currency: String, unit: String): IPricePerUnit {
   return {
      amount,
      currency,
      unit
   };
}
