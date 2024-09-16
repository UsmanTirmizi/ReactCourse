import { createContext, useState } from "react";

//create the contect
export const GlobalContext=createContext(null);

//create the global state that receive the component as a childeren

function GlobalState({children}){
    const [theme,setTheme]=useState('light');

    return <GlobalContext.Provider value={{theme,setTheme}}>{children}</GlobalContext.Provider>
}
export default GlobalState;