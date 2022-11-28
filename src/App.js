import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Landing from "./pages/Landing";
import Feature from "./pages/Feature";
import Products from "./pages/Products";
import Inspirations from "./pages/Inspirations";
import Tipstricks from "./pages/Tipstricks";
import Share from "./pages/Share";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/" element={<Feature />} />
        <Route path="/" element={<Products />} />
        <Route path="/" element={<Inspirations />} />
        <Route path="/" element={<Tipstricks />} />
        <Route path="/" element={<Share />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
