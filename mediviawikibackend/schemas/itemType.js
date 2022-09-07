export default {
  name: "itemType",
  title: "Item Type",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Item Type name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
