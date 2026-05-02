import Foods from "@/components/foods/Foods";
import React, { Suspense } from "react";
import Loading from "./loading";

const FoodsPage = async () => {
  const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods");
  const data = await res.json();
  const foods = data.data;
  return (
    <div>
      <Suspense fallback={<Loading></Loading>}>
       <div className="grid grid-cols-3 gap-4">
         {foods.map((food) => (
          <Foods key={food.id} food={food}></Foods>
        ))}
       </div>
      </Suspense>
    </div>
  );
};

export default FoodsPage;
