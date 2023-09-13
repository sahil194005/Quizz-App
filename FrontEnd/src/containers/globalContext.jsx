import React, { useRef, useState } from 'react'
export const GlobalContext = React.createContext();
export const GlobalContextProvider = (props) => {
    let initVal = {}
    return (
        <GlobalContext.Provider value={initVal} >
            {props.children}
        </GlobalContext.Provider>
    )
}