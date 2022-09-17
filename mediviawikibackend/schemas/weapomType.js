export default {
  name: "weapomType",
  type: "document",
  title: "Weapons type",
  fields: [
    {
      name: "name",
      title: "Type name",
      type: "string",
      validation: (Rule) => Rule.required().max(40),
    },
  ],
};
