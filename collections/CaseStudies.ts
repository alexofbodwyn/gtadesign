import type { CollectionConfig } from 'payload'

export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'sub-title',
      type: 'text',
      required: true,
    },
    {
      name: 'badges',
      type: 'array',
      required: false,
      minRows: 1,
      maxRows: 5,
      labels: {
        singular: 'Badge',
        plural: 'Badges',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
        },
      ],
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (!value && data?.title) {
              return data.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '')
            }
            return value
          },
        ],
      },
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
      label: 'The Challenge',
    },
    {
      name: 'approach',
      type: 'richText',
      required: false,
      label: 'The Approach',
    },
    {
      name: 'outcome',
      type: 'richText',
      required: false,
      label: 'The Outcome',
    },
    {
      name: 'feedback',
      type: 'richText',
      required: false,
      label: 'Client Feedback',
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
