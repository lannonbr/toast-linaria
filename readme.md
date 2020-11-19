# Toast Starter w/ Linaria

**Note: This does not work with Toast 0.3.0 or later for the time being due to Linaria being dependent on Babel**

This is a basic Toast site that uses Linaria for CSS.

## Explaination

For example, we have a preact page below:

```jsx
// src/pages/index.js
/** @jsx h */
import { h, Fragment } from "preact";
import { css } from "linaria";
import { Helmet } from "react-helmet";

const h1Styled = css`
  text-transform: uppercase;
  color: red;
`;

export default () => {
  return (
    <Fragment>
      <Helmet>
        <link rel="stylesheet" href="/styles/src/pages/index.css" />
      </Helmet>
      <header className={h1Styled}>
        <h1>Hey you</h1>
      </header>
    </Fragment>
  );
};
```

The `build` npm script will use the `linaria` CLI to parse all of the JS files and compile CSS files out. The build step would create a `public/src/pages/index.js` file.

> Note: Linaria's CLI doesn't use Toast's babel config, so I added a `.babelrc` file to add the `@babel/preset-react` preset so it will understand JSX.

In the code snippet, we then add a `<link>` tag using `react-helmet` to import the CSS file.

Finally, we use the `linaria/babel` preset during a Toast build to rewrite the `className` fields to map to the generated class strings from Linaria.

> Note: Toast does not yet expose the ability to insert babel presets / plugins, so there is a patch-package patch file that will add the linaria babel preset into it.
