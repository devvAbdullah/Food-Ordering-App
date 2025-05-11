import React from 'react'

const Menu = () => {
  return (
     <div className='bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/25'>
        <div className='text-center'>
            <img src='pizza.png' alt="pizza" className='max-h-24 mx-auto block' />
        </div>
            <h4 className=' text-xl font-semibold my-3'>Pepperoni Pizaa </h4>
            <p className='text-gray-500 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, praesentium?</p>
            <button className='bg-red-500 hover:bg-red-600 text-white  uppercase border rounded-full px-8 py-2 mt-2 gap-2 items-center '> Add to Cart 12$ </button>
        </div>
    
  )
}

export default Menu
