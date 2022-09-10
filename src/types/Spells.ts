export type Element = {
  Fire;
  Water;
  Wind;
  Chaos;
  Death;
};

export type Spell = {
  _id: string;
  name: string;
  incantation: string;
  imageUrl: string;
  magicLevel: number;
  manaCost: number;
  premium: boolean;
  price: number;
};
