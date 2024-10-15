import React from 'react'
import Card from '../card/Card'
import { coffes } from '../../database/coffeBase'

export const Cards = () => {

    console.log(coffes)

  return (
      <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        
    {
        
        coffes.map((i, index)=>
            (
                <div>
                    <Card 
                        key={index} 
                        id={i.id} 
                        name={i.name} 
                        image={i.image} 
                        price={i.price} 
                        rating={i.rating} 
                        votes={i.votes} 
                        popular={i.popular} 
                        available={i.available} />
                </div>
            )
        )
            
    }
    </div>
  )
}
