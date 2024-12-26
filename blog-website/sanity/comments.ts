// schemas/comment.js
export default {
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
      {
        name: 'blogPost',
        title: 'Blog Post',
        type: 'reference',
        to: [{ type: 'blog' }], // Make sure this matches your blog schema
      },
      {
        name: 'author',
        title: 'Author',
        type: 'string',
      },
      {
        name: 'content',
        title: 'Content',
        type: 'text',
      },
      {
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
      },
    ],
  };
  