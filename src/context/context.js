import { createContext,useContext,useState } from "react";

const MainContext = createContext();

export const ContextProvider = ({children}) => {
    const [statePopup,setStatePopup] = useState(null);
    const [sideBar,setSideBar] = useState(null);
    return (
    <MainContext.Provider value={{statePopup,setStatePopup}}>
        {children}
    </MainContext.Provider>
    )
}

export const useMainContext = () => useContext(MainContext);