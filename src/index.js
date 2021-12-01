import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Navbar from "./Navbar";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Navbar />
  </StrictMode>,
  rootElement
);
