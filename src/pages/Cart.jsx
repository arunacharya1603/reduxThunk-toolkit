import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../redux/CartSlice";

const Cart = () => {
  const cartitems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <div>
      <h3>Cart Page</h3>
      <div className="cartsWrapper">
        {cartitems.map((item, index) => (
          <div className="cartCard" key={`${item.id}-${index}`}>
            <img src={item.image} alt="img" />
            <h5>{item.title}</h5>
            <h5>${item.price}</h5>
            <button className="btn" onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
