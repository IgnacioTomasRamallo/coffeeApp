import React from 'react'
import './card.css';  

export default (props) => {

  const { id, name, image, price, rating, votes, popular, avalible } = props;

  return (
    <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <div className='container-card-image'>
        <p>{popular}</p>
        <img src={image} alt={`image ${id}`} />
      </div>
      <div className='flex justify-between'>
        <p className='text-2xl'>{name}</p>
        <p>{price}</p>
      </div>
      <div className='flex'>
        <p>{rating}</p>
        <p className='text-slate-500'>{`(${votes} votes)`}</p>
      </div>
      <div>
        <p>{avalible}</p>
      </div>

    </div>
  );
};
