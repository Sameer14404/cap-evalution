import { createContext,useState } from "react";

export const AuthContext=createContext()
 export default function AuthContextProvider({children}) {
    const [authState,setAuthState]=useState({
        isAuth:false,
        token:"null",
    });
 
const logoutUser=()=>{
    setAuthState({
        ...authState,
        isAuth:false,
        token:"null",
    })
}
const loginUser=(token)=>{
    setAuthState({
        ...authState,
        isAuth:true,
        token:token
    })
}
console.log(authState.isAuth)
console.log(authState.token)
return(
<AuthContext.Provider value={{authState,loginUser, logoutUser}}>
    {children}
</AuthContext.Provider>
)

}


