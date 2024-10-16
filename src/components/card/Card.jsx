import React from "react";
import "./card.css";
import start from "../../images/Star.svg";
import startFill from "../../images/Star_fill.svg";

export default (props) => {
  const { id, name, image, price, rating, votes, popular, avalible } = props;
  // style responsive utilizar md medidas globales, sm medidas telefono
  return (
    <div className="max-w-sm bg-transparent rounded-lg w-9/12 my-6">
      <div className="">
        {popular ? (
          <span className="bg-[#F6C768] rounded-full px-3 py-0.5 absolute m-1.5 text-xs font-semibold">
            Popular
          </span>
        ) : (
          <span className="hidden"></span>
        )}
        <img src={image} alt={`image ${id}`} className="rounded-lg my-3" />
      </div>
      <div className="flex justify-between">
        <p className="sm:text-2xl text-[#FEF7EE] ">{name}</p>
        <p className="bg-[#BEE3CC] text-[#111315] rounded-md text-sm px-2 font-semibold content-center">{price}</p>
      </div>
      <div className="flex">
        {votes === 0 ? (
          <p className="text-slate-500 flex items-center">
            <img src={start} alt="start" className="w-7"/>
            <p>{rating}</p>
            {`No ratings`}
          </p>
        ) : (
          <p className="text-slate-500 flex items-center">
            <img src={startFill} alt="start" className="w-7" />
            <p className="text-[#FEF7EE]">{rating}</p>
            {`(${votes} votes)`}
          </p>
        )}
        {
          avalible && <p className="text-red-600">Sold out</p> 
        }
      </div>
    </div>
  );
};
