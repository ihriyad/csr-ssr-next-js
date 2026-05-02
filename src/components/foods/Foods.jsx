import React from "react";

const Foods = ({ food }) => {
  const { dish_name, rating, price } = food;
  return (
    <div className="card bg-base-100  shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{dish_name}</h2>
        <p>Price: {price}</p>
        <p>Ratings: {rating}</p>
      </div>
      <figure>
        {/* <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" /> */}
      </figure>
    </div>
  );
};

export default Foods;
