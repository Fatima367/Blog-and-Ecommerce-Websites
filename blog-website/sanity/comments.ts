import { defineType } from "sanity";

const comments = defineType({
  type: "object",
  name: "comment",
  title: "Comments",
  fields: [
    {
      name: "username",
      type: "string",
      title: "Username",
    },
    {
      name: "text",
      type: "string",
      title: "Comment Text",
    },
    {
      name: "date",
      type: "datetime",
      title: "Date Posted",
    },
    {
      name: "blogSlug",
      type: "string",
      title: "Blog Slug",
    },
  ],
});

export default comments;
