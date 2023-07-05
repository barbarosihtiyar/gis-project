import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Map } from "./components/index";
import { useState } from "react";

function App() {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    langtitude: -75.6903,
    zoom: 10,
  });
  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
        
        <Map/>
      </div>
    </>
  );
}

export default App;
