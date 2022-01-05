import React, { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppProvider (props) {

   const [data, setData] = useState([])

    const getTableData = (num, page) => {
        fetch(`https://pokeapi.co/api/v2/ability?limit=${num}&offset=${page}`).then(res => res.json()).then(json => setData(json.results))
    }

    return(
        <AppContext.Provider
            value={{
                data,
                getTableData,
            }}
            {...props}
        />
    );
};