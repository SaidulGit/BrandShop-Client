import React from "react";
import { useLoaderData } from "react-router-dom";
import Cardproduct from "./Cardproduct";
import Slider from "../Slider";

const AllProduct = () => {
  const loadData = useLoaderData();
  if (loadData.length < 1) {
    return (
      <div>
        {" "}
        <h2 className="text-5xl font-extrabold text-orange-400 text-center mt-5"> No data available !</h2>
      </div>
    );
  } else {
    return (
      <div>
        <Slider></Slider>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-3 m-5">
          {loadData.map((cart) => (
            <Cardproduct key={cart._id} cart={cart}></Cardproduct>
          ))}
        </div>
      </div>
    );
  }
};

export default AllProduct;
