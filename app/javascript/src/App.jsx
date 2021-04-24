import React, { useEffect } from "react";
import UserInput from "./components/UserInput";
import Header from "./components/Header";
import List from "./components/List";
import { initializeLogger } from "./common/logger";

function App() {
  useEffect(() => {
    /*eslint no-undef: "off"*/
    initializeLogger();
    logger.info("Log from js-logger");
  }, []);

  return (
    <>
      <Header />
      <UserInput />
      <List />
    </>
  );
}

export default App;
