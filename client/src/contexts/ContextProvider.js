import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();
export default function ContextProvider({children}){
    const[userType , setUserType] = useState('Vendor');
    return<AppContext.Provider
        value={{
            userType : userType,
            changeUserType : (type) =>{
                setUserType(type)
            }
        }}
    >
        {children}
    </AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext);