import React from "react";

const FoodDetailsPage = async ({ params }) => {
  const { foodId } = await params;
  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`,
  );
  const data = await res.json();
  //   console.log(data);
  const foods = data.data;
  //   console.log(foods);
  const { dish_name, cooking_steps } = foods;
  return (
    <div className="text-center">
      <h3 className="text-3xl">{dish_name}</h3>
      {cooking_steps.map((step, index) => (
        <div key={index}>{step}</div>
      ))}
    </div>
  );
};

export default FoodDetailsPage;
