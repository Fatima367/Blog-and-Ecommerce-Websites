import { validation } from "sanity";

const posts = {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image'
        },
        {
            name: 'description',
            type: 'array',
            title: 'Description',
            of: [{type: 'block'}],
            validation: (Rule: any) => Rule.required()
            .error(`Required to generate a page on the website`)
        },
        {
            name: 'slug',
            type: 'slug',
            options: {source: 'title'},
            validation: (Rule: any) => Rule.required()
            .error(`Required to generate a page on the website`),
        }
    ]
}

export default posts;