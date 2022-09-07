import { MenuItem } from "./MenuItem";

export type FeaturedMenu = {
  _id: string;
  name: string;
  imageUrl: string;
  items: MenuItem[];
};
