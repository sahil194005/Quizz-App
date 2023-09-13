import React, { useRef, useState } from 'react'
export const GlobalContext = React.createContext();
export const GlobalContextProvider = (props) => {
    const [rooms, setRooms] = useState([]);
    let initVal = {
        rooms,
        setRooms
    }
    return (
        <GlobalContext.Provider value={initVal} >
            {props.children}
        </GlobalContext.Provider>
    )
}