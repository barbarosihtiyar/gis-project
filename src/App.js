import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Map,Sidebar,Buttons } from "./components/index";
import { useState } from "react";

function App() {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    langtitude: -75.6903,
    zoom: 10,
  });

const currentUrl = window.location.href;

// Yeni bir sayfa açıldığında mevcut URL'nin query parametrelerini kaldırır
if (currentUrl !== window.location.origin + window.location.pathname) {
  window.history.replaceState({}, "", window.location.origin + window.location.pathname);
}
  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
        <BrowserRouter>
          <Sidebar />
          {/* <Buttons /> */}
          <Routes>
            <Route path="/" exacth element={<Map />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
