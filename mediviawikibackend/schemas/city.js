export default {
  name: "city",
  type: "document",
  title: "City, Village/Small Town",
  fields: [
    {
      name: "name",
      title: "City name",
      type: "string",
      validation: (Rule) => Rule.required().max(38),
    },
    {
      name: "image",
      title: "City map image",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "City description",
      type: "string",
      validation: (Rule) => Rule.required().max(252),
    },
    {
      name: "npcs",
      title: "City npcs",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "npc",
            },
          ],
        },
      ],
    },
  ],
};
