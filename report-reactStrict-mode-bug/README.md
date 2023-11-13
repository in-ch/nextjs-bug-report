# report-reactStrict-mode-bug

Reporting a bug that causes rendering errors when reactStrictMode is enabled in next.js v13

### Example code

<code>next.config.js</code>

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
```

### Description

When I set reactStricMode is true in Next.js v13.4 version, rendering is not performed.

Starting with v13.4 and later, I was able to resolve the issue by deleting the feature after confirming that reactStricMode is provided by default as true. But I'm reporting it because I think it's a bug.

- Before deleting the reactStrictMode option
  ![prev](https://github.com/vercel/next.js/assets/49556566/a6a0d279-61fa-4a08-a99b-bf33f0cb0201)

- After deleting the reactStrictMode option
  ![after](https://github.com/vercel/next.js/assets/49556566/37afebb8-4039-4d92-83fe-9050e09e62ac)

- reference
  [reactStrictMode](https://nextjs.org/docs/pages/api-reference/next-config-js/reactStrictMode)

### Enviroment

macOS: Ventura v13.2.1
node: v16.17.1
react: v18.2.0
next: v13.4.19
