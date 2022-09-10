import { Spell } from "./Spells";

type VocatonStatics = {
  manaPoints: number;
  healthPoints: number;
  capacityPoints: number;
  healthRegeneration: string;
  manaRegeneration: string;
  promotionRegeneration: string;
};

export type Vocation = {
  _id: string;
  name: string;
  backgroundImageUrl: string;
  description: string;
  statistics: VocatonStatics;
  spells: Spell[];
};
