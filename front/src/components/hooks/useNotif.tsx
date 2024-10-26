import { createContext, ReactNode, useState } from "react";

interface NotifContextProps{
    children: ReactNode
}

export const NotifContext = createContext({
    notifNumber: 0,
    changeNumber:(val:number)=>{console.log(val)}
})

export function NotifContextProvider({children}:NotifContextProps){
    const [notifNumber,setNotifNumber]=useState(0);
    const changeNumber=(val:number)=>{
        setNotifNumber(val)
    }
    return (<NotifContext.Provider value={{notifNumber,changeNumber}}>
        {children}
    </NotifContext.Provider>)
}