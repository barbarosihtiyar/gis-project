import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Map, Popup, Sidebar } from "./components/index";

function App() {
  const currentUrl = window.location.href;

  const getParameter = (parameterName) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(parameterName);
  };
  const urlId = getParameter("id");
  const latitude = getParameter("latitude");
  const longtitude = getParameter("longitude");

  if (
    currentUrl !== window.location.origin + window.location.pathname &&
    urlId != null
  ) {
    window.localStorage.setItem("newTab", true);
    window.localStorage.setItem("latitude", latitude);
    window.localStorage.setItem("longitude", longtitude);
  } else {
    window.localStorage.setItem("newTab", false);
    window.localStorage.setItem("latitude", latitude);
    window.localStorage.setItem("longitude", longtitude);
  }
  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
        <BrowserRouter>
          <Sidebar />
          <Popup />
          <Routes>
            <Route path="/" exacth element={<Map />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
