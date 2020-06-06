# My portfolio, created for [andrewborstein.com](http://andrewborstein.com)

Tools used to build this website (first created in 2015, with only minor content updates since):
- [GitHub Pages](https://pages.github.com) - you can host any static website (HTML, CSS, JS) really easily using GitHub, totally for free!
- [Materialize](https://materializecss.com) - a super handy CSS framework to get Google's Material Design components and style
- [Netlify](https://www.netlify.com/) for the most pain free and convenient hosting and deployment experience I've ever had.
- [Eleventy](https://www.11ty.dev/) to create dynamic templates and manage my blog — still a work in progress!
- And a bunch of custom CSS to get it looking just right.

## Notes
- I'm in the middle of implementing a totally new tech stack! Follow along at https://andrewborstein.com/#blog
- You can use this as template for your own portfolio site! Seriously, have at it. In the future I hope to turn it into a proper template so anyone can easily install and modify it for their own usage. 
- I recently removed Grunt as a build tool dependency and moved my site hosting to Netlify. All files are completely static (for the time being), but they also live in a `/public` folder instead of the root. If you don't use Netlify, feel free to move everything back into the  root folder instead.
- Make sure to set `analyticsId` to your unique GA account id inside the `Google Analytics` script tag at the bottom of the `<body>`, if you want to use your own Google Analytics account.

