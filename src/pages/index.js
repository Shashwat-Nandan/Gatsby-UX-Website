import * as React from "react";
import { Link } from "gatsby";

function IndexPage() {
  return (
    <>
      <h1>Propelytics Home</h1>
      <div>This is the home page</div>
      <Link to="/about/">About Us</Link>
    </>
  );
}

export default IndexPage;
