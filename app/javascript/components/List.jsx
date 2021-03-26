import axios from "axios";
import React, { useEffect, useState } from "react";
function List() {
  const [allLinks, setLinks] = useState("");
  useEffect(() => {
    axios.get("/links.json").then((data) => setLinks(data.data));
  });
  return (
    <>
      <div className="container w-2/3">
        <div className="list p-5">
          <header className="text-blue-200">
            <div className="flex justify-between bg-blue-700">
              <p className="text-blue-200 p-5">Original link</p>
              <p className="text-blue-200 p-5">Short link</p>
            </div>
          </header>
        </div>
      </div>
    </>
  );
}

export default List;
