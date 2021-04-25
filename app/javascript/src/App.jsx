import React, { useEffect, useState } from "react";
import UserInput from "components/UserInput";
import Header from "components/Header";
import List from "components/List";
import { initializeLogger } from "common/logger";
import { requestIntercepts, setAuthHeaders } from "apis/axios";
import Loader from "components/common/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    initializeLogger();
    requestIntercepts();
    setAuthHeaders(setLoading);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Header />
      <UserInput />
      <List />
      <ToastContainer />
    </>
  );
}

export default App;
