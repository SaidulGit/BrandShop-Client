import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2';

const DetailsProduct = () => {
    const load = useLoaderData();
    const {name,description,brand,rating,price,photoUrl} = load[0] || {}
     const cartName = load[0].name
     const cartImg = load[0].photoUrl
     const cartbrand = load[0].brand
     const cartprice = load[0].price
     
     const user = {cartImg,cartName,cartbrand,cartprice}
    const addCart = () => {
      fetch("http://localhost:5000/cart",{
        method:"POST",
        headers:{
          "content-type": "application/json"
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => console.log(data))
      Swal.fire({
        position: "top-start",
        icon: "success",
        title: "Cart Added",
        showConfirmButton: false,
        timer: 1500
      });
    }
    
  return (
    <div>
      <div className="card card-side bg-base-100 mt-5 mr-5 ml-5 shadow-xl">
  <figure><img src={photoUrl} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2> <div className='flex gap-4 mt-2 mb-2'>
    <div className="badge badge-secondary font-bold text-lg">{price}</div> <div className="badge badge-accent badge-outline">{brand}</div>
    </div>
    <p>Rating: {rating}</p>
    <p className='text-lg font-normal'>{description}</p>
    <div className="card-actions justify-start">
      <button onClick={addCart} className="btn btn-warning text-white">Add to cart</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default DetailsProduct