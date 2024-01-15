import React from 'react'
import { useLoaderData } from 'react-router-dom'
import CartItem from '../Product/CartItem';


const MyCart = () => {
  const data = useLoaderData();
  
 
  return (
    <div>
      <div className="overflow-x-auto">
  <table className="table table-zebra w-[1000px]">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th>Option</th>
      </tr>
    </thead>

         <tbody>
         {
          data.map(cart => <CartItem key={cart.name} cart={cart}></CartItem>)
         }
    
         </tbody>
  </table>
     </div>
         
    </div>
  )
}

export default MyCart