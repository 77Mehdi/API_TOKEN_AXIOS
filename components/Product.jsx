import {useState,useEffect} from 'react'
import useFetch from "../hooks/useFetch"

function Product() {

   const [products ,setproducts] = useState([])
  const {data,loding,error} = useFetch("/products?populate=*")


  useEffect(()=>{
   data && setproducts(data)
    console.log(products)
  },[data])
 
  return (
    <>
    {
        loding ? "loding...":(
            <div>
            {products.map(product => (
              <div>
                <h2>{product.attributes.title }</h2>
                <img src={`http://localhost:1337${product.attributes.imag.data.attributes.url}` } alt=''/>
                <p>{product.attributes.Desc }</p>
                <p>{product.attributes.price }</p>
              </div>
                ))}
            </div>
              
        )
    }
    </>
  )
}

export default Product