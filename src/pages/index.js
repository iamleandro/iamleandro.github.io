import React from "react";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <div>
      <h1>Hi there.</h1>
      <h2>I'm Leandro, a software engineer based in Toronto.</h2>
      <p>
        Please let me know how can I help!{" "}
        <Link to="/contact">Contact me.</Link>
      </p>
    </div>
  );
};

export default IndexPage;
