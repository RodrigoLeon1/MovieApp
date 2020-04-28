import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import WarningIcon from "@material-ui/icons/Warning";

const NotFound = () => (
  <div className="not-found-container">
    <h1>
      <WarningIcon style={{ color: "#fe0056", fontSize: "3rem" }} /> 404 !
    </h1>
    <h2>Page not found!</h2>

    <Button variant="outlined" color="primary">
      <Link className="btn" to="/">
        Back to home
      </Link>
    </Button>
  </div>
);

export default NotFound;
