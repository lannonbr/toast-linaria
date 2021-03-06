/** @jsx h */
import { h, Fragment } from "preact";
import { useEffect } from "preact/hooks";
import { css } from "linaria";
import { Helmet } from "react-helmet";

const h1Styled = css`
  text-transform: uppercase;
  color: red;
`;

export default () => {
  useEffect(() => {
    console.log("MOUNTED");
  }, []);

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
