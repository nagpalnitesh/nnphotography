import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Routers from "./Routers";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

createRoot(document.getElementById("root")).render(<Routers />);
