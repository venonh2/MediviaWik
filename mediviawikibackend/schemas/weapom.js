export default {
  name: "weapom",
  type: "document",
  title: "Medivia Weapons",
  fields: [
    {
      name: "name",
      title: "Weapom name",
      type: "string",
      validation: (Rule) => Rule.required().max(40),
    },
    {
      name: "image",
      title: "Weapom image",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "atk",
      title: "Atk value (exp: 32)",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "hit",
      title: "Hit value (exp: 2)",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "def",
      title: "Def value",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "weight",
      title: "Weight value",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "twoHands",
      title: "Weapom is Two-Handed",
      type: "boolean",
    },
    {
      name: "weapomType",
      title: "Weapom type",
      type: "reference",
      to: { type: "weapomType" },
    },
  ],
};
