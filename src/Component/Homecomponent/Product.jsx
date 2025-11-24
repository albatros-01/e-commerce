import React, { useContext, useEffect, useState } from "react";
import { Globalstate } from "../../App";
import axios from "axios";


const Product = () => {
  const [product, setProduct] = useState([]);
  const val = useContext(Globalstate);
  const {cart,setCart}=val;

  useEffect(() => {
    const getItems = async () => {
      try {
        const product = await axios.get("https://fakestoreapi.com/products");
        setProduct(product.data);
      } catch (error) {
        console.log("error in productfetching");
      }
    };

    getItems();
  }, []);

  const addCart=(pro)=>{
    setCart((cur)=>[...cur,pro])
  }

  return (
    <div className="grid grid-cols-4 gap-4 mb-15 p-4">
  {product.map((cur, i) => (
    <div className="border p-4 rounded-xl m-2 text-center bg-gray-100" key={i}>
      <img className="h-32 w-32 mx-auto" src={cur.image} alt={cur.title} />
      <h3 className="text-md font-bold">{cur.title}</h3>
      <h5 className="text-sm font-light">{cur.description}</h5>
      <h2 className="text-xl font-extrabold text-gray-700 hover:underline transition-shadow">
        ${cur.price.toFixed(2)}
      </h2>
      <button onClick={()=>addCart(cur)} className="border px-4 py-2 rounded-lg font-bold mt-2 bg-gray-500 text-white hover:bg-gray-800 hover:scale-110 transition">
        Add to Cart
      </button>
          </div>
      ))}
    </div>
  );
};


export default Product;
