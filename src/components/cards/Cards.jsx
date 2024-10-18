import React from "react";
import Card from "../card/Card";
import { coffes } from "../../database/coffeBase";

export const Cards = () => {
  console.log(coffes);
  // tengo que terminar de hacer las cards confirmarlas y terminar los botones
  return (
    <div className="w-full sm:grid sm:grid-cols-3">
      {coffes.map((i, index) => (
        <div className="flex justify-center">
          <Card
            key={index}
            id={i.id}
            name={i.name}
            image={i.image}
            price={i.price}
            rating={i.rating}
            votes={i.votes}
            popular={i.popular}
            available={i.available}
          />
        </div>
      ))}
    </div>
  );
};
