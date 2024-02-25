import { AuthContext } from "../Context/AuthContext"
import {useState,useContext} from 'react'
import { Link, useNavigate } from "react-router-dom"
const UserDetails={
  email:"",
  password:""
}

function Login() {

const [formData,setFormData]=useState(UserDetails)
const {authState,loginUser}=useContext(AuthContext)

const Navigate=useNavigate()


  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const handleSumbit=async(e)=>{
    e.preventDefault()
  
try {
let res= await  fetch("https://reqres.in/api/login",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(formData)
  })
  let ans=await res.json()
  loginUser(ans.token)
  Navigate('/dashboard')
} catch (error) {
  console.log(error)
}
  }
// done
  return (
    <div>
      <form data-testid="login-form"  onSubmit={handleSumbit}>
        <div>
          <label>
            Email
            <input data-testid="email-input" type="email" placeholder="email" name="email" onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              name="password"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;