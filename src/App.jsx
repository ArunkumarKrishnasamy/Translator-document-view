import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Doc_Viewer from "./Doc_Viewer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doc-viewer" element={<Doc_Viewer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
