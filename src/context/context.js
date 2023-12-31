import { createContext, useContext, useState } from "react";

const MainContext = createContext();

export const ContextProvider = ({ children }) => {
  const [stateSidebar, setStateSidebar] = useState(true);
  const [parkingVal, setParkingVal] = useState({
    name: "_ID",
    value: "",
  });
  const [districtVal, setDistrictVal] = useState({
    name: "COUNTY_NAME",
    value: "",
  });
  const [locationVal, setLocationVal] = useState({
    name: "LOCATION_NAME",
    value: "",
  });
  const [parkingDescriptionVal, setParkingDescriptionVal] = useState({
    name: "PARK_TYPE_DESC",
    value: "",
  });
  const [workingHourVal, setWorkingHourVal] = useState({
    name: "WORKING_TIME",
    value: "",
  });
  const [capacityVal, setCapacityVal] = useState({
    name: "CAPACITY_OF_PARK",
    value: "",
  });
  const [contain, setContain] = useState([]);
  const [sidebarLocation, setSidebarLocation] = useState(true);
  const [zooms, setZooms] = useState(14);
  const [statePopup, setStatePopup] = useState(false);

  return (
    <MainContext.Provider
      value={{
        stateSidebar,
        setStateSidebar,
        statePopup,
        setStatePopup,
        parkingVal,
        setParkingVal,
        districtVal,
        setDistrictVal,
        locationVal,
        setLocationVal,
        parkingDescriptionVal,
        setParkingDescriptionVal,
        workingHourVal,
        setWorkingHourVal,
        capacityVal,
        setCapacityVal,
        contain,
        setContain,
        sidebarLocation,
        setSidebarLocation,
        zooms,
        setZooms,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => useContext(MainContext);
