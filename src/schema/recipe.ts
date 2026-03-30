import { defineField, defineType } from 'sanity';

export const recipeType = defineType({
  name: 'recipe',
  title: 'Recipe',
  type: 'document',
  fields: [
    defineField({ 
      name: 'title', 
      type: 'string', 
      validation: (Rule) => Rule.required() 
    }),
    defineField({ 
      name: 'slug', 
      type: 'slug', 
      options: { source: 'title' },
      validation: (Rule) => Rule.required() 
    }),
    defineField({ 
      name: 'category', 
      type: 'string',
      options: {
        list: [
          { title: 'Pasta', value: 'pasta' },
          { title: 'Vellutate/Zuppe', value: 'vellutate' },
          { title: 'Risotti', value: 'risotti' },
          { title: 'Dolci', value: 'dolci' },
          { title: 'Pesce', value: 'pesce' },
          { title: 'Carne', value: 'carne' },
        ],
        layout: 'dropdown' // You can also use 'radio' for a different look
      }
    }),
    defineField({
      name: 'mainImage',
      title: 'Recipe Hero Image',
      type: 'image',
      options: {
        hotspot: true, // This allows you to pick the focus point of the photo
      },
      // validation: (Rule) => Rule.required(), // not mandatory
    }),
    defineField({
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'ingredient',
          fields: [
            { name: 'name', type: 'string', title: 'Ingredient Name' },
            { name: 'quantity', type: 'number', title: 'Qty' },
            { 
              name: 'unit', 
              type: 'string', 
              title: 'Unit',
              options: {
                list: [
                  { title: 'Grams', value: 'g' },
                  { title: 'Kilograms', value: 'kg' },
                  { title: 'Milliliters', value: 'ml' },
                  { title: 'Liters', value: 'l' },
                  { title: 'QuantoBasta', value: 'q.b.' },
                ],
              }
            }            
          ],
          // This part makes the list look nice in the Admin panel
          preview: {
            select: {
              qty: 'quantity',
              unit: 'unit',
              name: 'name'
            },
            prepare({ qty, unit, name }) {
              return {
                title: `${name || 'New Ingredient'} ${qty || ''} ${unit || ''}`
              }
            }
          }
        }
      ]
    }),
    defineField({
      name: 'instructions',
      title: 'Preparation Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'step',
          fields: [
            defineField({ 
              name: 'instruction', 
              type: 'text', 
              title: 'Step Description',
              rows: 3 
            }),
            defineField({ 
              name: 'stepImage', 
              type: 'image', 
              title: 'Step Photo (Optional)',
              options: { hotspot: true } // Allows you to crop the image in the browser
            })
          ],
          // This makes the list look clean in the Sanity editor
          preview: {
            select: {
              title: 'instruction',
              media: 'stepImage'
            }
          }
        }
      ]
    }),
    defineField({
      name: 'externalLink',
      title: 'Original Source Link',
      type: 'url'
    })
  ],
});
