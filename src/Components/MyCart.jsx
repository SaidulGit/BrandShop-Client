import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CartItem from "../Product/CartItem";

const MyCart = () => {
  const data = useLoaderData();
  const [items, setItems] = useState(data);

  function totalP() {
    let totalPrice =0;
    for(let i = 0;i < items.length ; i++){
      totalPrice += parseFloat(items[i].cartprice.slice(1));
    }
    return totalPrice;
  }
  console.log(totalP())
  return (
    <div>
      <div className="flex justify-between pr-4 pl-4">
        <h1 className="text-lg font-bold">Total Items : {items.length}</h1>
        <h2  className="text-lg font-bold">Total Price : ${totalP()} </h2>
      </div>
      <div className="overflow-x-auto p-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {items.map((cart, index) => (
              <CartItem
                key={cart._id}
                index={index}
                items={items}
                setItems={setItems}
                cart={cart}
              ></CartItem>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
