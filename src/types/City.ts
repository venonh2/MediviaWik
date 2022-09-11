import { Npc } from "./Npc";

export type City = {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
  npcs: Npc[];
};
