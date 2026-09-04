# Riti Singh — engineering portfolio

A static, dependency-free portfolio organized as an engineering signal path from electrical and computer engineering fundamentals to software, graph infrastructure, and deployed AI systems.

## Local preview

From the repository root, run any static file server, for example:

```sh
python -m http.server 4173
```

Then open `http://127.0.0.1:4173/`.

## Structure

- `index.html` — semantic portfolio content and system diagrams
- `assets/css/portfolio.css` — design tokens, responsive layout, and motion rules
- `assets/js/portfolio.js` — navigation state, diagram interactions, keyboard routes, and progressive reveals
- `assets/resume/` — current resume
- `assets/img/og.png` — social sharing preview

The site is deployed through GitHub Pages and has no build step or runtime dependencies.
