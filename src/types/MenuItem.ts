// used to decid where to navigate and what fetch
export type ItemType = {
  _id: string;
  name: string;
};

export type MenuItem = {
  _id: string;
  imageUrl: string;
  name: string;
  type: ItemType;
};
