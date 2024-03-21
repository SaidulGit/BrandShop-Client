import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import CartItem from '../Product/CartItem';


const MyCart = () => {
  const data = useLoaderData();
  const [items,setItems] = useState(data)
 
  
  return (
    <div>
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
    <tbody>{
  items.map((cart,index) => <CartItem key={cart._id} index={index} items={items} setItems={setItems} cart={cart}></CartItem>)
}</tbody>
  </table>
</div>
         
    </div>
  )
}

export default MyCart