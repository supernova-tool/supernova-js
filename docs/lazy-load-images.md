---
id: lazy-load-images
title: Lazy Load images
---

## You can lazy load your images using a IntersectionObserver approach

```html
<img class="lazy" data-src="https://tinyurl.com/zbdca8vv" />
```

## How does it works?

`IntersectionObserver` seeks for all lazy classes, so when your image enters the viewport it will be loaded
