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
          { title: 'TBD', value: 'tbd' },
        ],
        layout: 'dropdown' // You can also use 'radio' for a different look
      }
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
      type: 'array', 
      of: [{ type: 'block' }] 
    }),
    defineField({
      name: 'externalLink',
      title: 'Original Source Link',
      type: 'url'
    })
  ],
});
