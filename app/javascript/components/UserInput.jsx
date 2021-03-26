import { func } from "prop-types";
import React, { useState } from "react";

function UserInput() {
    
  function validateUrl(value) {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
      value
    );
  }
  function submitHandler() {
    let valid = validateUrl(url);
    if (valid) {
      alert(url);
    } else {
      alert("Not Valid");
    }
  }
  const [url, setUrl] = useState("");
  function urlUpdate(event) {
    event.preventDefault();
    setUrl(event.target.value);
  }

  return (
    <div className="container flex justify-center flex-col items-center outline-none focus:outline-none">
      <input
        type="text"
        className=" mt-8 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-full border-2 border-gray-400 flex items-center justify-center p-3 w-1/2"
        placeholder="Enter Link"
        onChange={(event) => urlUpdate(event)}
        value={url}
      ></input>
      <button
        className="text-blue-200 p-3 mt-3 rounded-full bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
        onClick={submitHandler}
      >
        Sort
      </button>
    </div>
  );
}

export default UserInput;
