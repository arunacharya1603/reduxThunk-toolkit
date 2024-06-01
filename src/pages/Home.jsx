import React, {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/CartSlice";
import { STATUSES, fetchProducts } from "../redux/ProductSlice";

const Home = () => {
  const dispatch = useDispatch();
    const {data:products,status} = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts()); 
  }, []);
 
  const handleAdd = (product) =>{
    dispatch(add(product));
  }
  if(status === STATUSES.Loading){
    return <h2 style={{fontWeight:"bolder"}}>Loading...</h2>
 }

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
        <img src={product.image} alt="img" />
          <h4>{product.title}</h4>
          <h5>${product.price}</h5>
          <button onClick={()=>handleAdd(product)} className="btn">Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
