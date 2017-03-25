export interface IProduce {
   type: string;
   description: string;
}

export function produce(type: string, description: string): IProduce {
   return {
      type,
      description
   };
}
