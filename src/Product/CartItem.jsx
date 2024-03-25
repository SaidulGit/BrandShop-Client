import React from 'react'
import { MdDeleteSweep } from "react-icons/md";
import Swal from 'sweetalert2';


const CartItem = ({cart,index,items,setItems}) => {
    const {_id} = cart || {}
  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Want to Return!"
    })
    fetch(`https://brand-assignment-server-ombru6p5j-saidul-islams-projects.vercel.app/cartdata/${id}`,{
      method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const remaining = items.filter(ids=> ids._id !== id);
      setItems(remaining);
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
    <tr className='hover'>
      <td>{index+1}</td>
      <td>{cart.cartName}</td>
      <td>{cart.cartbrand}</td>
      <td>{cart.cartprice}</td>
      <td><button onClick={() => handleDelete(_id)}><MdDeleteSweep className='text-orange-500 text-4xl' /></button></td>
    </tr>
  )
  
}

export default CartItem