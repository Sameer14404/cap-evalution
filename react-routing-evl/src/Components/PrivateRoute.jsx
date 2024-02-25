import {  Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import {useContext} from "react"
function PrivateRoute({children}) {
    const {authState}=useContext(AuthContext)
    console.log(authState.isAuth)
    return authState.isAuth ? children : <Navigate to={"/login"} />;
}

export default PrivateRoute;
