export default {
  name: "featured",
  type: "document",
  title: "Featured Menu Items",
  fields: [
    {
      name: "name",
      title: "Featured Category name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Featured Category image",
      type: "image",
    },
    {
      name: "items",
      title: "items",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "menuItem",
            },
          ],
        },
      ],
    },
  ],
};
