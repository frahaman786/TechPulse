import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Stories from "./Stories";
import Pagination from "./Pagination";

import "./App.css";
import "./Navbar.css";

const App = () => {
  return (
    <>
      <Navbar /> {/* Navbar should be here */}
      <Search />
      <Pagination />
      <Stories />
    </>
  );
};

export default App;
