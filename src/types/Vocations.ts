import { Spell } from "./Spells";

type VocatonStatics = {
  manaPoints: number;
  lifePoints: number;
  capabilityPoints: number;
  healthRegeneration: string;
  manaRegeneration: string;
  promotionRegeneration: string;
};

export type Vocation = {
  _id: string;
  name: string;
  description: string;
  statistics: VocatonStatics;
  spells: Spell[];
};
