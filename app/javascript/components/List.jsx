import axios from "axios";
import { number } from "prop-types";
import React, { useEffect, useState } from "react";
import shortid from "shortid";
function List() {
  const [allLinks, setLinks] = useState([]);
  const [pin, setPin] = useState(false);
  const [count, setCount] = useState(false);

  useEffect(() => {
    axios.get("/urls.json").then((data) => {
      let linksWithOutPin = setLinks(
        data.data.sort((a, b) => {
          return a.pin === b.pin ? 0 : a.pin ? -1 : 1;
        })
      );
    });
  }, [count, pin]);

  const pinHandler = (link) => {
    axios
      .patch(`/urls/${link.id}.json`, { pin: !link.pin })
      .then((res) => setPin(res));
  };

  const counter = (link) => {
    axios.get(`/urls/${link.id}.json`).then((res) => setCount(res));
  };

  return (
    <>
      <section className="w-1/2 mt-5 my-0 mx-auto mb-6 rounded shadow-lg">
        <ul>
          <li className="bg-blue-700 text-white flex justify-around items-center p-3">
            <p>Original Url</p>
            <p>Short Url</p>
          </li>
          {allLinks.map((link) => {
            return (
              <li
                key={link.id}
                className="flex shadow border-b-2 border-gray-400 justify-between items-center p-3"
              >
                <i
                  className={
                    link.pin
                      ? "fas fa-thumbtack text-blue-700 cursor-pointer"
                      : "fas fa-thumbtack  cursor-pointer"
                  }
                  onClick={() => pinHandler(link)}
                ></i>{" "}
                <a
                  className="underline w-2/5 text-gray-800 hover:text-gray-700 break-all"
                  href={link.longUrl}
                  target="blank"
                >
                  {link.longUrl}
                </a>
                <a
                  className="underline w-2/5 ml-5 text-gray-800 hover:text-gray-700 break-all"
                  href={link.shortUrl}
                  target="_blank"
                  onClick={() => setTimeout(counter(link), 3000)}
                >
                  {link.shortUrl}
                </a>
                <p className="bg-gray-200 text-dark p-4">
                  {link.numberOfClick ? parseInt(link.numberOfClick) : "0"}
                </p>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default List;
