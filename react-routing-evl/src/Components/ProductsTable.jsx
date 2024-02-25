
import ProductCard from "./ProductCard"
function ProductsTable({data}){
   
    return (
            <table border="1px">
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {/* map through the data */}
                    {
                        data &&
data.map((el)=><ProductCard key={el.id} {
   ...el
}/>)
                    }
                   
                </tbody>
            </table>
    )
}

export default ProductsTable