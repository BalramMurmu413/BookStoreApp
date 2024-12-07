import React from 'react'
 import girlDesk  from '../../public/girldesk.png';

function Card( {item} ) {
  return (
    <>

  <div className='px:5  md:px-10 flex flex-col md:flex-row  w-full justify-between items-center '>

<div className="card glass w-96 my-5 hover:scale-105 transition-all ease-in-out duration-200">
  <figure>
    <img
      src={girlDesk}
      alt="car!" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{item.name}</h2>
    <p>{item.description}</p>
    <div className="card-actions  flex justify-between items-center">
      <button className="btn "> $ {item.price}</button>
      <button className="btn ">Get </button>
    </div>
  </div>
</div>
      </div>
    </>
  )
}

export default Card;