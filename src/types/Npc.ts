import { ItemType } from "./MenuItem";

type Item = {
  imageUrl?: string;
  name?: string;
  price?: number;
  itemType: ItemType; // [] aqui estou indo para clubs
  weapomProperties?: {};
  ringProperties?: {};
  ammunitionProperties?: {};
  backbackProperties?: {};
};

export type Npc = {
  _id: string;
  name: string;
  imageUrl: string;
  occupation: string;
  notes?: string;
  isAsellerNpc?: boolean;
  items?: Item[];
};
