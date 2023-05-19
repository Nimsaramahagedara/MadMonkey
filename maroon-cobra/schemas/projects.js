import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'recent-projects',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'videoUrl',
      title: 'videoUrl',
      type: 'url',
    }),
  ],

  preview: {
    select: {
      title: 'name'
    },
  },
})
