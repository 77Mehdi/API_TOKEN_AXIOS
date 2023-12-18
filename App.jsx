
import './App.css'
import axios from "axios"


function App() {
  const api = import.meta.env.VITE_API_URL + "/products";
  const token = import.meta.env.VITE_API_TOKEN;
  
  const fetchProduct = async () => {
    try {
      const res = await axios.get(api, {
        headers: {
          Authorization: "Bearer " + token
        },
      });
      console.log(res.data.data); 
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };
  
  fetchProduct();



   

  return (
    <>
     <h1>hello</h1>
    </>
  )
}

export default App
