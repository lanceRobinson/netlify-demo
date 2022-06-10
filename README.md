# Next.js + Shopify Starter Project

This is a Next.js + Shopify Cart API demo! [Check out the site here](https://next-shopify-example.netlify.app/). If you want to make your own version, make sure you create a Shopify account and create some products, and install the [Netlify CLI](https://docs.netlify.com/cli/get-started/).

Once you have your shop set up, add environment variables to your setup:

```bash
SHOPIFY_STOREFRONT_API_TOKEN=example
SHOPIFY_API_ENDPOINT=https://exampleshopify/graphql.json
```

## Getting Started

First, run the development server:

```bash
netlify dev
```

Open [http://localhost:8888](http://localhost:8888) with your browser to see the result.

### Installation options

1. Fork this repo
2. Navigate to the directory and run `npm run dev`
3. Make your changes
4. Connect to [Netlify](https://url.netlify.com/Bk4UicocL) manually (the `netlify.toml` file is the one you'll need to make sure stays intact to make sure the export is done and pointed to the right stuff)
