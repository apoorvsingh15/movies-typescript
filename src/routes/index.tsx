import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../containers/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;