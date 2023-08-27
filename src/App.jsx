import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sale from "./pages/Sale";
import Sitting from "./pages/Sitting";
import Layout from "./layout/Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Sale />} />
          <Route path="/table" element={<Sitting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
