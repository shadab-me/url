import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function Rostr() {
  const notify = (message) => {
    toast("Wow so easy !");
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <div>
      <button className="text-3xl bg-blue-400" onClick={notify}>
        Notify !
      </button>
      <ToastContainer />
    </div>
  );
}

export default Rostr;
