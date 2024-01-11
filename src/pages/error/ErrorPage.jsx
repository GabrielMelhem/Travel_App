import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div>Error</div>
      <h3>...ups..nothing to see here</h3>

      <Link to="/">go back to home</Link>
    </>
  );
};

export default ErrorPage;
