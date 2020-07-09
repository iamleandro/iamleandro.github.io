import React from "react";
import { Link } from "gatsby";

import Layout from './components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hi there.</h1>
      <h2>My name is Leandro, I am a software engineer based in Toronto.</h2>
      <p>
        Please let me know how can I help!{" "}
        <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
