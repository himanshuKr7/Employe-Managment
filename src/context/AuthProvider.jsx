import React, { createContext, useEffect, useState } from 'react'
import { getlocalStorage, setlocalStorage } from '../utils/localStorage';


export const AuthContext=createContext()

const AuthProvider = ({children}) => { 
    const [userData, setUserData] = useState(null)
  
   useEffect(()=>
   {
     setlocalStorage(); 
          const { employees} = getlocalStorage();
					setUserData(employees);
},[])

  return (
		<div>
          <AuthContext.Provider value={[userData,setUserData]}>
              {children}
        </AuthContext.Provider>
		</div>
	);
}

export default AuthProvider
