export default {
  name: "menuItem",
  title: "Menu Item",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Featured Item name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Item image",
      type: "image",
    },
    {
      name: "type",
      title: "Item type",
      type: "reference",
      to: { type: "itemType" },
    },
  ],
};
