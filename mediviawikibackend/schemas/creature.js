export default {
  name: "creature",
  type: "document",
  title: "Medivia Creature's",
  fields: [
    {
      name: "name",
      title: "Creature name",
      type: "string",
      validation: (Rule) => Rule.required().max(60),
    },
    {
      name: "image",
      title: "Creature image",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "exp",
      title: "Creature exp given by kill",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "hp",
      title: "Creature hp",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "creatureType",
      title: "Creature type",
      type: "reference",
      to: { type: "creatureType" },
    },
  ],
};
