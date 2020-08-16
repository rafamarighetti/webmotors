import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Default from "./pages/Default";
import Vender from "./pages/Vender";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Default} />
      <Route path="/vender" component={Vender} />
    </BrowserRouter>
  );
}

export default Routes;
