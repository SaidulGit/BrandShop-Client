import React, { useEffect, useState } from 'react'
import BrandCard from './BrandCard';
import New from './New';
import Popular from './Popular';

const Brand = () => {
    const [brand,setBrand] = useState([]);
    useEffect(()=>{
        fetch("/Brand.json")
        .then(res => res.json())
        .then(data => setBrand(data))
    },[])
  return (
    
    <div>
      <h2 className='text-7xl font-bold text-center mt-5'>Brands</h2>
      <div className='grid grid-cols-1 lg:grid-cols-3 m-5 p-5 gap-5 md:w-[1350px] mx-auto bg-slate-100'>
        {
            brand.map(card => <BrandCard key={card.id} card={card}></BrandCard>)
        }
    </div>
     <New></New>
     <Popular></Popular>
    </div>
  )
}

export default Brand