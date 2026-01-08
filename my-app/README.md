This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Feature to learn

1. Architecture
2. Rendering
3. Routing
4. Caching
5. Adapters
6. APIs

## New feature in next js 16

Turbo pack file system caching : allows for significantly faster compiles time accross restart

- Webpack caching = “Let’s remember previous builds”

- Turbopack caching = “Let’s never redo work unless absolutely necessary”

> add this command for turbopack file system
> `next.config.ts:`

```ts
experimental: {
    turbopackFileSystemCacheForDev: true,
  },
```

## Project structure

- App/page.tsx - Represent home page
- Layout.tsx - Main entry point in our application: Anything we doint here will apply all pages in our routes

`concept:` next.js hotmodule system

## Architecture:

### React Client and Server components

> by default react component are write server component

**Server componet:**

> Server component are rendered on the server

**_React server components:_**

> They are the components that rendered on the server their html output then send back to the client. They can access the server side component directly like databases and the file system. This helps to reduce the amount of JS sent to the client. Direct access to the server side resources. Keep sensetive information sensetive(access token and other keys safe on the server).

### If server component are really that much better why can everything is in server component ?

- If you need browser interactivity(clicking button, navigate page and submitting form) then you need to turn it react client component

### What are react client component ?

> Client components offcourse rendered on the client side and in this case client side simply means the browsers. To use them in next.js you must need to add `'use client'` directive at the top of the component.

`example: client component`

```ts
"use client";
const Hello = () => {
  console.log("Hello component loaded");
  return <div>Hello</div>;
};

export default Hello;
```

- For stoping react strict mode

`next.config.js:`

```ts
module.exports = {
  reactStrictMode: false,
};
```

### What is server-side pre-rendering?

> Server Components are rendered only on the server and never execute in the browser.

> Client Components are pre-rendered on the server to generate HTML, which provides an initial static UI. This HTML is then hydrated on the client to enable interactivity.

> During server-side pre-rendering, the entire Client Component is executed on the server to produce HTML, but browser-only APIs and interactivity do not run.

> Event handlers and client-side logic are not executed on the server; instead, they are activated during hydration when the component runs again in the browser.

### What does “React hydrates” mean?

> Pre-rendering shows the page fast. Hydration makes it interactive.

### What is React Compiler?

> React Compiler is a new tool that makes React fast automatically, so you don’t need useMemo or useCallback anymore.

`import package:`

```ts
npm install babel-plugin-react-compiler@latest
```

Then add this in,
`next.config.js:`

```ts
reactCompiler: true,
```

### Routing in details

- Need because doing everything in a single page in boring
- Next.js uses `file based` routing which means all the layout and pages are write within app folder
- Component folder contains only components not pages. That is move outside the app folder.

```ts
-about - // routes name
  page.tsx;
```

- Dynamic routes

### Layout

> Acts as a parents for all of the routes

- allows us to use shared elements accross multiple routes
- `example:` navbar, footer
