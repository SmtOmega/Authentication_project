import React, { useContext, useState } from 'react'


const userContext = React.createContext()


const UserProvider = ({children}) => {
    const initialToken = localStorage.getItem('token')
    const [token, setToken] = useState(initialToken)
    const isLoggedIn = !!token



    const loginHandler = (token) => {
        setToken(token)
        localStorage.setItem('token', token)
    }

    const logoutHandler = () => {
        setToken('')
        localStorage.removeItem('token')
    }


    return <userContext.Provider value={{token, isLoggedIn, loginHandler, logoutHandler}}>{children}</userContext.Provider>
}



export const useUserGlobalContext = () => {
    return useContext(userContext)
}

export default UserProvider