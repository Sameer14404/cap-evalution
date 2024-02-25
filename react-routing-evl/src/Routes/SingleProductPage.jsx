import { useState,useEffect } from "react";
import { useParams } from "react-router-dom"

function SingleProductPage(){
const {id}=useParams()
console.log(id);
const [one,setone]=useState([])
const [loading,setLoading]=useState(false)
let base_URl="https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/";

useEffect(()=>{
  fetchData()
},[id])
  const fetchData=async ()=>{
  try {
    setLoading(true)
    const res= await fetch(`${base_URl}${id}`)
    const ans= await res.json()
    setone(ans.data)
    setLoading(false)
  } catch (error) {
    console.log(error)
    setLoading(false)
  }

  }
    return loading? "Loading...":(
      
        <div data-testid="products-container">   
            <div>
                <h3 data-testid="product-brand">{one.brand}</h3>
            </div>
            <div >
            <img data-testid="product-image" src={one.img}/>

            </div>
            <div data-testid="product-category">
                {one.category}
            </div>
           
            <div data-testid="product-details">
                {one.details}
            </div>
            <div data-testid="product-price">
                {one.price}
            </div>

            </div>
    )
}
export default SingleProductPage