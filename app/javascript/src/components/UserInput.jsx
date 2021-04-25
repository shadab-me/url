import { func } from "prop-types";
import React, { useState } from "react";
import shortid from "shortid";
import axios from "axios";
import Toastr from "./common/Toastr";

function UserInput() {
  const [url, setUrl] = useState("");
  const [link, setLink] = useState("");
  const [copyLink, setCopyLink] = useState(false);

  const sendRequest = (longUrl) => {
    let shortId = shortid.generate();
    let shortUrl = window.location.href + shortId;
    let urlData = {
      url: {
        short_id: shortId,
        short_url: shortUrl,
        long_url: longUrl,
      },
    };
    axios.post("/urls.json", urlData).then((res) => setLink(res.data));
  };

  const validateUrl = (value) => {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
      value
    );
  };

  const submitHandler = () => {
    let valid = validateUrl(url);
    if (valid) {
      sendRequest(url);
    } else {
      Toastr.error("Invalid Url");
    }
  };
  const urlUpdate = (event) => {
    event.preventDefault();
    setUrl(event.target.value);
  };
  const copyHandler = () => {
    navigator.clipboard.writeText(link.shortUrl);
    setCopyLink(true);
  };

  return (
    <div className="flex justify-center flex-col items-center outline-none focus:outline-none mt-20">
      <h1 className="text-5xl text-blue-400 semibold">Url Shorter</h1>
      <input
        type="link"
        className=" mt-8 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-full border-2 border-gray-400 flex items-center justify-center p-3 w-1/2"
        placeholder="Enter Link"
        onChange={(event) => urlUpdate(event)}
        value={url}
      ></input>
      {link ? (
        <h3 className="bg-gray-200 mt-5 p-5">
          <a className="p-4 text-blue-900 w-full" href={link.shortUrl}>
            {link.shortUrl}
          </a>
        </h3>
      ) : null}
      {link ? (
        <button
          className="text-blue-200 p-3 mt-3 rounded-full bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
          onClick={copyHandler}
        >
          {copyLink ? "Copied" : "Copy"}
        </button>
      ) : (
        <button
          className="text-blue-200 p-3 mt-3 rounded-full bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
          onClick={submitHandler}
        >
          Sort
        </button>
      )}
    </div>
  );
}

export default UserInput;
