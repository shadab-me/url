import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="container">
      <header className="bg-white shadow-md flex justify-between">
        <h2 className="text-3xl font-weight-900 text-blue-300  px-2 py-3">
          <Link to="/"> CitLy </Link>
        </h2>
        <h2 className="font-weight-900 mt-5">
          <Link to="/report" className="text-white py-2 px-4 bg-blue-400 m-5">
            {" "}
            Report{" "}
          </Link>
        </h2>
      </header>
    </div>
  );
}

export default Header;
