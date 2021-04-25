import React from "react";

function openDownloadLink() {
  const url = window.location.href + "/urls.csv";
  window.open(url, "_black");
}

function Header() {
  return (
    <>
      <header className="bg-white shadow-md flex justify-between">
        <h2 className="text-3xl font-weight-900 text-blue-900  font-bold px-2 py-3">
          CitLy
        </h2>
        <button
          target="_blank"
          onClick={() => openDownloadLink()}
          className="font-weight-900 mt-5 bg-blue-600 py-2 px-5 text-white mb-5 mr-4"
        >
          Report
        </button>
      </header>
    </>
  );
}

export default Header;
