import { defineField, defineType } from 'sanity';

export const recipeType = defineType({
  name: 'recipe',
  title: 'Recipe',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'category', type: 'string' }),
    defineField({ name: 'ingredients', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'instructions', type: 'array', of: [{ type: 'block' }] }),
  ],
});
