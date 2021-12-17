---
date: '2019-05-04'
published: true
featured: true
---

# My First Blog Post

```js
console.log('test');
const x = () => {};
```

```bash
echo "test"
```

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [`gatsby-remark-prismjs`],
    },
  },
];
```

```javascript{numberLines: 5}
// In your gatsby-config.js
plugins: [
  {
    // highlight-start
    resolve: `gatsby-transformer-remark`,
    // highlight-end
    options: {
      plugins: [
        // highlight-next-line
        `gatsby-remark-prismjs`,
      ]
    }
  }
]
```

```bash{outputLines: 3}
hw = "Hello World!"
echo $hw
Hello World!
```
