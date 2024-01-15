import React, { useState } from 'react'
import { MdDeleteSweep } from "react-icons/md";
import Swal from 'sweetalert2';


const CartItem = ({cart}) => {
    const {_id} = cart || {}
    const [items,setItems] = useState(cart)
  const handleDelete = id => {
    fetch(`http://localhost:5000/cartdata/${id}`,{
      method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
      if(data.deletedCount > 0){
        console.log('Deleted successfully')
      const remaining = items.filter(ids=> ids._id !== id);
      setItems(remaining);
      } 
    }) 
    Swal.fire({
      position: "top-start",
      icon: "success",
      title: "Item deleted",
      showConfirmButton: false,
      timer: 1500
    });
  }

  return (
    <div>
        <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>{items.cartName}</td>
        <td>{items.cartbrand}</td>
        <td>{items.cartprice}</td>
        <td><button onClick={() => handleDelete(_id)}><MdDeleteSweep className='text-orange-500 text-4xl' /></button></td>
      </tr>
    </tbody>
    </div>
  )
  
}

export default CartItem