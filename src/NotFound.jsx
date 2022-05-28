import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>404</h2>
      <p>Sorry the requested page cannot be Found</p>
      <Link to="/"> Go to HomePage</Link>
    </div>
  );
}
