import { defineType } from "sanity";

const posts = defineType(
{
    name: "blog",
    type: "document",
    title: "Blog",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "image",
            type: "image",
            title: "Image",
        },
        {
            name: "description",
            type: "array",
            title: "Description",
            of: [{ type: "block" }],
            validation: (Rule) =>
              Rule.required().error(`Description is required`),
        },
        {
            name: "slug",
            type: "slug",
            title: "Slug",
            options: { source: "title", maxLength: 96 },
            validation: (Rule) =>
              Rule.required().error(`Slug is required`),
        }
    ]
}
)

export default posts;