import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import './index.css'
import App from './App.jsx'



const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
  <div className="dark:bg-slate-800 dark:text-white">

    <App />
  </div>
  </BrowserRouter>
);