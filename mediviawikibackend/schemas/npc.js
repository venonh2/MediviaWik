export default {
  name: "npc",
  type: "document",
  title: "Npc",
  fields: [
    {
      name: "name",
      title: "Npc name",
      type: "string",
      validation: (Rule) => Rule.required().max(46),
    },
    {
      name: "image",
      title: "Npc image",
      type: "image",
    },
    {
      name: "occupation",
      title: "Npc occupation",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "seller",
      title: "Npc is a seller",
      type: "boolean",
    },
  ],
};
