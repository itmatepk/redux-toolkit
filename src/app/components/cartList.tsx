"use client";

import { useAppSelector, useAppDispatch } from "../store/hooks";
import { deleteCart } from "../store/slices/cart";

const CartList = () => {
  
  const cart = useAppSelector((state) => state.cartArray);
  const dispatch = useAppDispatch();
  return (
    <div>
      {cart.map((val, i) => {
        return (
          <div key={i} className="grid grid-cols-4 gap-4">
            <div>{val.name}</div>
            <div>{val.catagory}</div>
            <div>qty: {val.qty}</div>
            <div>
              <button
                onClick={() => dispatch(deleteCart(val.name))}
                className="bg-black/70 text-white p-3 mt-3 rounded-sm"
              >
                delete cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartList;
