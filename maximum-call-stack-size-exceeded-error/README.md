### Provide enviroment information
```
$  npx --no-install next info

    Operating System:
      Platform: linux
      Arch: x64
      Version: #1 SMP Fri Jan 27 02:56:13 UTC 2023
    Binaries:
      Node: 18.16.1
      npm: 9.7.2
      Yarn: 1.22.19
      pnpm: N/A
    Relevant Packages:
      next: 13.4.20-canary.2
      eslint-config-next: 13.4.19
      react: 18.2.0
      react-dom: 18.2.0
      typescript: 5.1.6
    Next.js Config:
      output: N/A
```

### Which area(s) of Next.js are affected? (leave empty if unsure)
No response

### Link to the code that reproduces this issue or a replay of the bug
[github link](https://github.com/in-ch/nextjs-bug-report/tree/master/maximum-call-stack-size-exceeded-error)

### To Reproduce

1. Run <code>npx create-next-app@latest</code> from your terminal.
2. Go to <code>src/app/page.tsx</code>
3. edit the file following the code 
```typescript 
// src/app/page.tsx
export default function Home() {
  return (
      <Home />
  )
}
```
4. Run <code>npm run dev</code> from your terminal.

### Describe the Bug

```typescript 
// src/app/page.tsx
export default function Home() {
  return (
      <Home />
  )
}
```

When I structure my components to have circular references, the call stack should theoretically overflow, leading to a <code>RangeError: Maximum call stack size exceeded error.</code> However, in practice, this error does not occur (it works as expected when using a page router). 

Additionally, when I forcefully terminate the app and restart it, there is a persistent issue where the original port (e.g., 3000) remains occupied.

https://github.com/in-ch/nextjs-bug-report/assets/49556566/ce8a2344-24cd-433f-a201-b1d2706cfb26

### Expected Behavior
An error occurs with the message <code>RangeError: Maximum call stack size exceeded</code> when running the app.

### Which browser are you using? (if relevant)
No response

### How are you deploying your application? (if relevant)
No response


