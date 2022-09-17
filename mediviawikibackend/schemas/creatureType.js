export default {
  name: "creatureType",
  type: "document",
  title: "Creature's type",
  fields: [
    {
      name: "name",
      title: "Type name",
      type: "string",
      validation: (Rule) => Rule.required().max(60),
    },
  ],
};
