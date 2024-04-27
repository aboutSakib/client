import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./routes/router";

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
};

export default App;
