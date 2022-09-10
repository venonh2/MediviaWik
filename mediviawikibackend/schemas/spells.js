export default {
  name: "spell",
  type: "document",
  title: "Spells",
  fields: [
    {
      name: "name",
      title: "Game spells",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Spell image",
      type: "image",
    },
    {
      name: "incantation",
      title: "Spell incantation",
      type: "string",
    },
    {
      name: "magicLevel",
      title: "Required magic level",
      type: "number",
    },
    {
      name: "manaCost",
      title: "Spell mana cost",
      type: "number",
    },
    {
      name: "premium",
      title: "Premium needed",
      type: "boolean",
    },
    {
      name: "price",
      title: "Spell price (gp)",
      type: "number",
    },
  ],
};
