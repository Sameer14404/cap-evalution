
import PrivateRoute from "../Components/PrivateRoute";
import Dashboard from "./Dashboard";
import SingleProductPage from "./SingleProductPage";
import Home from "./Home"
import { Route,  Routes } from "react-router-dom";
import Login from "./Login";

function AllRoutes() {
  return (
    <div>
     
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>

   
   <Route path="/dashboard" element={<PrivateRoute>
    <Dashboard/>
   </PrivateRoute>}/>
    <Route path="/products/:id" element={
      <PrivateRoute>
        <SingleProductPage/>
      </PrivateRoute>
    }/>
  </Routes>

    </div>
  );
}

export default AllRoutes;
