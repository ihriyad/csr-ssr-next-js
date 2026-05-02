import Image from "next/image";
import Link from "next/link";
import React from "react";

const Foods = ({ food }) => {
  const { dish_name, rating, price, id, image_link } = food;
  return (
    <div className="card bg-base-100 p-5  shadow-sm">
      <figure>
        <Image
          src={image_link}
          width={`200`}
          height={`200`}
          alt="Food Image"
        ></Image>
        {/* <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" /> */}
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title">{dish_name}</h2>
        <p>Price: {price}</p>
        <p>Ratings: {rating}</p>
      </div>
      <div className="card-actions justify-center">
        <Link href={`/foods`}>
          <button className="btn btn-primary">Add to cart</button>
        </Link>
        <Link href={`/foods/${id}`}>
          <button className="btn btn-ghost">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Foods;
