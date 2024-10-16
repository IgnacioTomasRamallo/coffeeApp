import React from "react";
import Card from "../card/Card";
import { coffes } from "../../database/coffeBase";

export const Cards = () => {
  console.log(coffes);

  return (
    <div className="w-full">
      {coffes.map((i, index) => (
        <div className="flex items-center justify-center">
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
