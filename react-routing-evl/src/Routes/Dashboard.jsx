import { useContext, useEffect,useState } from "react";
import Loader from "../Components/Loader";
import ProductsTable from "../Components/ProductsTable"
import { AuthContext } from "../Context/AuthContext";

function Dashboard() {
  const {authState, logoutUser}=useContext(AuthContext)

  const [data,setdata]=useState([]);
  const [loading,setLoading]=useState(false);
  const fetchData= async ()=>{
    setLoading(true)
  let res=  await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products`)
  let ans= await res.json()
setdata(ans.data)

setLoading(false)
  }
  useEffect(()=>{
    fetchData()
  },[])
  
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={logoutUser}>Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{authState.token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Products table */
        loading?<Loader/>:<ProductsTable data={data}/>
        }
      </div>
    </div>
  );
}

export default Dashboard;
