import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sale from "./pages/Sale";
import Sitting from "./pages/Sitting";
import Layout from "./layout/Layout";
import Auth from "./pages/Auth";

function App() {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Auth />} />
        <Route element={<Layout isMenu={isMenu} setIsMenu={setIsMenu} />}>
          <Route path="/home" element={<Sale  isMenu={isMenu} />} />
          <Route path="/sitting" element={<Sitting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
