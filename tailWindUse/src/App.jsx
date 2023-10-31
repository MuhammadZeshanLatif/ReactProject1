import { useState, useEffect } from 'react'
import './App.css'
import Figure from './assets/Components/figure'
import axios from 'axios';

function App() {
  const [product, setProduct] = useState([]);

  const getProducts = async () => {
    try {
      //const res = await axios.get('https://reqres.in/api/users?page=1');
      const res = await axios.get('http://localhost:8080/products');
      console.log(res.data)
      setProduct(res.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
          {product.map((element) => (
            <span>
              {console.log(element)}
             <Figure title={element.title} imgs={element.images[2]}></Figure>
            </span>
          ))}
    </>
  )
}

export default App
