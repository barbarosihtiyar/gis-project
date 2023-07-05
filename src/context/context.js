import { createContext,useContext,useState } from "react";

const MainContext = createContext();

export const ContextProvider = ({children}) => {
    const [activeMenu,setActiveMenu] = useState(true);
    return (
    <MainContext.Provider value={{activeMenu,setActiveMenu}}>
        {children}
    </MainContext.Provider>
    )
}

export const useMainContext = () => useContext(MainContext);