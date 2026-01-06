import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const routeGuardContext = createContext('')

function AuthContext({children}) {
    const [role,setRole] = useState("")
    const [authorised,setAuthorised] = useState(false)

    useEffect(()=>{
        if(sessionStorage.getItem("token") && sessionStorage.getItem("user")){
            const user = JSON.parse(sessionStorage.getItem("user"))
            setAuthorised(true)
            setRole(user.role)
        }
    },[authorised,role])

  return (
    <routeGuardContext.Provider value={{role,authorised,setAuthorised}}>
        {children}
    </routeGuardContext.Provider>
  )
}

export default AuthContext