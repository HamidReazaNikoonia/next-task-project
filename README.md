# POST TASK: ROOMVUE

> NOTE: In This Project I dont realy care about design, just working on code structures and code quality

## Guide

### run the development server

```bash
npm run dev
# or
yarn dev
```

### Build Project

```bash
npm run build
# or
yarn build
```

# Project (SSR & SSG)

This Project implemented in SSR and SSG

## SSR

```js
// Get all Posts
'/http://localhost:3000/blog/ssr';

// Get Specific Post
'http://localhost:3000/blog/ssr/:id';
```

## SSG

```js
// Get all Posts
'/http://localhost:3000/blog/ssg';

// Get Specific Post
'http://localhost:3000/blog/ssg/:id';
```

## Note

1- In Small Project we could handles all state with context but because this is test project i used both (context and redux)
