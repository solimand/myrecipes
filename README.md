# My Recipes project

A robust, decoupled, and automated digital cookbook built with Astro and Sanity CMS. This project is designed to be "Elastic"—meaning you can change the tech stack or the data structure without losing your recipes.

🛠 Tech Stack:

- Frontend: [Astro](https://astro.build/) (Static Site Generation for speed)
- Database/CMS: [Sanity.io](https://www.sanity.io/) (Structured Content Lake)
- Styling: Standard CSS

## Initialization

If you were starting from scratch or setting this up on a new machine:

1. Create the Astro Project:

    ```sh
    npm create astro@latest myrecipes
    cd myrecipes
    ```

1. Install Sanity Integration:

    ```sh
    npx astro add sanity
    ```

1. Install Required Dependencies:

    ```sh
    npm install @sanity/image-url @portabletext/react vite
    ```

1. Set up Environment Variables:

    - Create a .env file in the root directory:

    ```Plaintext
    PUBLIC_SANITY_PROJECT_ID=<your proj ID>
    PUBLIC_SANITY_DATASET=<your dataset>
    ```

1. Run Development Server:

    ```sh
    npm run dev
    ```

## Key File Map

1. `astro.config.mjs`: The "Brain" of the project. It connects Astro to Sanity. It uses loadEnv from vite to securely read your Project ID before the site builds

1. `sanity.config.ts`: The configuration for your Admin Dashboard (/admin). It defines how the Sanity Studio looks in your browser and which schemas (like "Recipe") it should load

1. `src/schema/recipe.ts`: The "Blueprints." This file defines exactly what data a recipe contains:

    - Title & Slug: For URLs
    - Category: A dropdown menu for organization
    - Ingredients: An array of objects (Quantity, Unit, Name)
    - Instructions: A list of steps with optional images

1. `src/pages/index.astro`: The "Dashboard." It fetches all recipes and organize them in columns (work in progress):

    - Column 1: Recipes automatically grouped by category
    - Column 2: A flat list of every recipe in the database

1. `src/pages/recipe/[slug].astro`: The "Template." This is a dynamic route. It doesn't physically exist for every recipe; instead, it acts as a "mold" that Astro pours Sanity data into to create individual recipe pages on the fly
