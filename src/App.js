import React from "react";
import "./App.css";
import Routes from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
import Auth from "./routes/Auth";

const App = () => {
  return (
    <BrowserRouter>
      <Auth>
        <Routes />
      </Auth>
    </BrowserRouter>
  );
};

export default App;
