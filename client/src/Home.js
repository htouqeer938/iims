import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Home = () => {
  return (
    <div>
      <Link to="/products" className="button is-primary mt-2">
        Products
      </Link>
      <br />
      <Link to="/productgroups" className="button is-primary mt-8">
        Product Groups
      </Link>
    </div>
  );
};

export default Home;
