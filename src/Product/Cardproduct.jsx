import React from 'react'
import { Link } from 'react-router-dom'

const Cardproduct = ({cart}) => {
   const {price,photoUrl,name,brand,type,_id} = cart || {}
    
  return (
    <div>
    <div className="card w-96 h-96 bg-base-100 shadow-xl">
  <figure><img src={photoUrl} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">{price}</div>
    </h2>
    
    <div className="card-actions justify-start">
      <div className="badge badge-outline">{brand}</div> 
      <div className="badge badge-outline">{type}</div>
    </div>
    <div>
      <Link to={`/product/${name}`}><button className='btn bg-orange-400 text-white mr-3 '>Details</button></Link>
      <Link to={`/update/${_id}`}><button className='btn bg-green-400 '>Update</button></Link>
    </div>
  </div>
</div>
    </div>
  )
}

export default Cardproduct