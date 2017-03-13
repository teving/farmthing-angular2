export interface IProduce {
   type: String;
   description: String;
}

export function produce(type: String, description: String): IProduce {
   return {
      type,
      description
   };
}
