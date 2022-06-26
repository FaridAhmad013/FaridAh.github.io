import React, {createContext, useEffect, useState} from "react";

const AppContext = createContext()

const AppProvider = ({children}) => {
    const [query, setQuery] = useState("&s=titanic")
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [modal, setModal] = useState(false)
    const API_URL = `http://www.omdbapi.com/?apikey=3b94519${query}`

    const getMovies = async () => {
     try {
        let res = await fetch(API_URL)
        let data = await res.json()
        setMovies(data.Search || data)
        setLoading(false)
     } catch (error) {
        console.log(error)
        setLoading(true)
     }
    }

    useEffect(() => {
        getMovies()
    }, [])
    return <AppContext.Provider value={{ movies, loading, query, setQuery, modal, setModal }}>
        {children}
    </AppContext.Provider>
}

export {AppContext, AppProvider}