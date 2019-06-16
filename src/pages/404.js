import React from "react";
import { Link } from "gatsby";

// Components
import Layout from "../components/Layout";

const NotFoundPage = () => {
  return (
    <>
      <Layout siteTitle="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link to="/">Go to Home</Link>
    </>
  );
};

export default NotFoundPage;
