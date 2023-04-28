import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./root";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Career from "./routes/Career";
import Board from "./routes/Board";
import VisionMission from "./routes/VisionMission";
import Dashboard from "./routes/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/vision", element: <VisionMission /> },
      { path: "/board", element: <Board /> },
      { path: "/career", element: <Career /> },
      { path: "/contact", element: <Contact /> },
      { path: "/admin", element: <Dashboard /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
