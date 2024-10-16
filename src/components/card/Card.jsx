import React from "react";
import "./card.css";

export default (props) => {
  const { id, name, image, price, rating, votes, popular, avalible } = props;
  // style responsive utilizar md medidas globales, sm medidas telefono
  return (
    <div className="max-w-sm bg-transparent rounded-lg shadow w-9/12">
      <div className="">
        {popular ? (
          <span className="bg-[#F6C768] rounded-full px-3 py-0.5 absolute m-1.5 text-xs">
            Popular
          </span>
        ) : (
          <span className="hidden"></span>
        )}
        <img src={image} alt={`image ${id}`} className="rounded-lg" />
      </div>
      <div className="flex justify-between">
        <p className="text-2xl">{name}</p>
        <p>{price}</p>
      </div>
      <div className="flex">
        <p>{rating}</p>
        <p className="text-slate-500">{`(${votes} votes)`}</p>
      </div>
      <div>
        <p>{avalible}</p>
      </div>
    </div>
  );
};
