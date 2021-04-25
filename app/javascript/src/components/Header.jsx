import React from "react";
function Header() {
  return (
    <>
      <header className="bg-white shadow-md flex justify-between">
        <h2 className="text-3xl font-weight-900 text-blue-900  font-bold px-2 py-3">
          CitLy
        </h2>
        <a
          href=""
          className="font-weight-900 mt-5 bg-blue-600 py-2 px-5 text-white mb-5 mr-4"
        >
          Report
        </a>
      </header>
    </>
  );
}

export default Header;
