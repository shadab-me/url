import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import UserInput from "components/UserInput";
import Header from "components/Header";
import List from "components/List";
import Roatr from "components/Common/Roastr";
import "react-toastify/dist/ReactToastify.css";
import { initializeLogger } from "common/logger";

const App = () => {
  useEffect(() => {
    initializeLogger();
  });
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={UserInput} />
          <Route exact path="/report" component={List} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
