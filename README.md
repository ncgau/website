# NCGAU Website

## About

This is the website for the [Newcastle Coders' Group](https://ncg.asn.au/) - that's Newcastle, NSW, Australia.

The Newcastle Coders' Group is the longest-running technology user's group in Newcastle, founded in November 2005.

## Developing

This is a node project, so follow the [usual steps to install node](https://nodejs.org/en/download/) to suit your environment.

Clone this project and install dependencies with `npm install` (or `pnpm install` or `yarn`).

Start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Create a production version of your app:

```bash
npm run build
```

Preview the production build with `npm run preview`.

> You may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Contributing

If you see something you'd like to fix here please raise a pull request or issue and one of the maintainers will take a look.

## Deploying

This is deployed through [Cloudflare pages](https://pages.cloudflare.com/). Commits to the main branch will deploy the application.
