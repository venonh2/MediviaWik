export default {
  name: "vocation",
  type: "document",
  title: "Vocations",
  fields: [
    {
      name: "name",
      title: "Vocation name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "backgroundImage",
      title: "App Background Image",
      type: "image",
    },
    {
      title: "Vocation statistics",
      name: "statistics",
      type: "object",
      fields: [
        { name: "manaPoints", type: "number", title: "Mana points" },
        { name: "healthPoints", type: "number", title: "Health points" },
        { name: "capacityPoints", type: "number", title: "Capacity points" },

        {
          name: "healthRegeneration",
          type: "string",
          title: "Health regeneration description",
        },
        {
          name: "manaRegeneration",
          type: "string",
          title: "Mana regeneration description",
        },
        {
          name: "promotionRegeneration",
          type: "string",
          title: "Promotion regeneration description",
        },
      ],
    },
    {
      name: "type",
      title: "Item type",
      type: "reference",
      to: { type: "itemType" },
    },
    {
      name: "spells",
      title: "Vocation spells",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "spell",
            },
          ],
        },
      ],
    },
  ],
};
