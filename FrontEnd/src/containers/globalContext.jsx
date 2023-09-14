import React, { useRef, useState } from 'react'
export const GlobalContext = React.createContext();
export const GlobalContextProvider = (props) => {
    const [rooms, setRooms] = useState([]);
    const [questions, setQuestions] = useState([]);
    let initVal = {
        rooms,
        setRooms,
        questions,
        setQuestions
    }
    return (
        <GlobalContext.Provider value={initVal} >
            {props.children}
        </GlobalContext.Provider>
    )
}