import React from "react";
import { Link } from "react-router-dom";

const BrandCard = ({ card }) => {
  const { brand, photoUrl } = card || {};
  return (
    <Link to={`brand/${brand}`}>
    <div>
      <div className="card  bg-base-100 shadow-xl w-96 h-72">
        <figure className="px-10 pt-10">
          <img src={photoUrl} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{brand}</h2>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default BrandCard;
