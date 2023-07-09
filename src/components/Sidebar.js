import React, { useEffect, useState } from "react";
import { useMainContext } from "../context/context";
import { sidebarConstant } from "../utils/sidebarconstant";
import "../style/sidebar.scss";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import CloseIcon from '@mui/icons-material/Close';

const Sidebar = () => {
  const { stateSidebar, setStateSidebar } = useMainContext();
  const { parkingVal, setParkingVal } = useMainContext();
  const { districtVal, setDistrictVal } = useMainContext();
  const { locationVal, setLocationVal } = useMainContext();
  const { parkingDescriptionVal, setParkingDescriptionVal } = useMainContext();
  const { workingHourVal, setWorkingHourVal } = useMainContext();
  const { capacityVal, setCapacityVal } = useMainContext();
  const { contain, setContain } = useMainContext();
  const { sidebarLocation, setSidebarLocation } = useMainContext();

  const handleSubmit = () => {
    const stateNewFilter = [
      parkingVal,
      districtVal,
      locationVal,
      parkingDescriptionVal,
      workingHourVal,
      capacityVal,
    ];
    setContain(
      stateNewFilter.filter((filterParking) => filterParking.value !== "")
    );
    console.log(stateNewFilter);
    console.log(contain);
    sidebarHideOrShow();
  };
  const sidebarHideOrShow = () => {
    setStateSidebar(!stateSidebar);
  };
  const clearHandle = () => {
    setParkingVal((prevState) => ({ ...prevState, value: "" }));
    setDistrictVal((prevState) => ({ ...prevState, value: "" }));
    setLocationVal((prevState) => ({ ...prevState, value: "" }));
    setParkingDescriptionVal((prevState) => ({ ...prevState, value: "" }));
    setWorkingHourVal((prevState) => ({ ...prevState, value: "" }));
    setCapacityVal((prevState) => ({ ...prevState, value: "" }));
    console.log(capacityVal);
  };

  const handleChangeSidebarLocation = () => {
    setSidebarLocation(!sidebarLocation);
  };

  return stateSidebar ? (
    <div
      className={stateSidebar === true ? `sidebar show` : `sidebar hidden`}
      style={
        sidebarLocation
          ? { right: "0", width: "20%" }
          : { left: "0", width: "20%" }
      }
    >
      <div className="sidebarContainer">
        <div className="sidebarWrapper">
          {sidebarConstant.map((content, index) => (
            <React.Fragment key={index}>
              {content?.headerText?.id && (
                <div className="sidebarHeader">
                <div className="sidebarFirstHeader"
                >
                <span id={content?.headerText?.id}>
                      {content?.headerText?.label}
                    </span>
                    <div
                      className="leftSidebar"
                      style={
                        sidebarLocation
                          ? {
                              display: "flex",
                              alignItems: "center",
                              gap: "2px",
                              cursor:"pointer",
                            }
                          : { display: "none" }
                      }
                    >
                      <CloseIcon onClick={sidebarHideOrShow}/>

                    </div>
                    <div
                      className="rightSidebar"
                      style={
                        sidebarLocation
                          ? { display: "none" }
                          : {
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                              cursor:"pointer"
                            }
                      }
                      
                    >
                    <CloseIcon onClick={sidebarHideOrShow}/>
                      
                    </div>
                </div>
                  <div className="sidebarSecondHeader"
                                        onClick={handleChangeSidebarLocation}
                  >
                  <KeyboardDoubleArrowLeftIcon style={sidebarLocation ? {display:"block"} : {display:"none"}}/>
                  <span>Sidebar</span>
                      <KeyboardDoubleArrowRightIcon style={sidebarLocation ? {display:"none"} : {display:"block"}}/>
                      
                  </div>
                </div>
              )}
              {content?.parkingArea?.id && (
                <div className="sidebarFilter">
                  <div className="parkingNumber">
                    <span>{content?.parkingArea?.label}</span>
                    {content?.parkingArea?.id && (
                      <input
                        type={content?.parkingArea.type}
                        id={content?.parkingArea?.id}
                        value={parkingVal.value}
                        onChange={(e) =>
                          setParkingVal({
                            ...parkingVal,
                            value: e.target.value,
                          })
                        }
                      />
                    )}
                  </div>
                  <div className="district">
                    <span>{content?.districtArea?.label}</span>
                    {content?.districtArea?.id && (
                      <input
                        type={content?.districtArea.type}
                        id={content?.districtArea?.id}
                        value={districtVal.value}
                        onChange={(e) =>
                          setDistrictVal({
                            ...districtVal,
                            value: e.target.value,
                          })
                        }
                      />
                    )}
                  </div>
                  <div className="locationArea">
                    <span>{content?.locationArea?.label}</span>
                    {content?.locationArea?.id && (
                      <input
                        type={content?.locationArea.type}
                        id={content?.locationArea?.id}
                        value={locationVal.value}
                        onChange={(e) =>
                          setLocationVal({
                            ...locationVal,
                            value: e.target.value,
                          })
                        }
                      />
                    )}
                  </div>
                  <div className="parkingDescriptionArea">
                    <span>{content?.parkingDescriptionArea?.label}</span>
                    {content?.parkingDescriptionArea?.id && (
                      <input
                        type={content?.parkingDescriptionArea.type}
                        id={content?.parkingDescriptionArea?.id}
                        value={parkingDescriptionVal.value}
                        onChange={(e) =>
                          setParkingDescriptionVal({
                            ...parkingDescriptionVal,
                            value: e.target.value,
                          })
                        }
                      />
                    )}
                  </div>
                  <div className="workingHourArea">
                    <span>{content?.workingHourArea?.label}</span>
                    {content?.workingHourArea?.id && (
                      <input
                        type={content?.workingHourArea.type}
                        id={content?.workingHourArea?.id}
                        value={workingHourVal.value}
                        onChange={(e) =>
                          setWorkingHourVal({
                            ...workingHourVal,
                            value: e.target.value,
                          })
                        }
                      />
                    )}
                  </div>
                  <div className="capacityArea">
                    <span>{content?.capacityArea?.label}</span>
                    {content?.capacityArea?.id && (
                      <input
                        type={content?.capacityArea.type}
                        id={content?.capacityArea?.id}
                        value={capacityVal.value}
                        onChange={(e) =>
                          setCapacityVal({
                            ...capacityVal,
                            value: e.target.value,
                          })
                        }
                      />
                    )}
                  </div>
                </div>
              )}
              {content?.submit?.id && (
                <div className="sidebarSubmit">
                  {
                    <button
                      type={content?.submit?.type}
                      id={content?.submit?.id}
                      onClick={handleSubmit}
                    >
                      {content?.submit?.label}
                    </button>
                  }
                </div>
              )}
              {content?.clearText?.id && (
                <div className="sidebarClear">
                <button
                      id={content?.clearText?.id}
                      onClick={clearHandle}
                      style={{ cursor: "pointer" }}
                    >
                      {content?.clearText?.label}
                    </button>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div
      className="sidebar"
      style={sidebarLocation ? { right: "0" ,width:"100px"} : { left: "0" ,width:"100px"}}
    >
      <div
        className="icon"
        style={
          sidebarLocation
            ? {
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                cursor: "pointer",
              }
            : {
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                cursor: "pointer",
              }
        }
      >
        {sidebarLocation === true ? (
          <ChevronLeftIcon
            style={{ fontSize: "100px"}}
            onClick={sidebarHideOrShow}
          />
        ) : (
          <ChevronRightIcon
            style={{ fontSize: "100px"}}
            onClick={sidebarHideOrShow}
          />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
