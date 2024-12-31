import { defineType, validation } from "sanity";

const products = defineType({
  name: "products",
  type: "document",
  title: "Products",
  fields: [
    {
      name: "image",
      type: "image",
      title: "Product Image",
    },
    {
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      type: "array",
      title: "Description",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required().error(`Description is required`),
    },
    {
      name: "price",
      type: "number",
      title: "Price",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "oldPrice",
      type: "string",
      title: "Old Price (Optional)",
    },
    {
      name: "reviews",
      type: "number",
      title: "Reviews",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "ratingsImage",
      type: "image",
      title: "Ratings",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required().error(`Slug is required`),
    },
  ],
});

export default products;
