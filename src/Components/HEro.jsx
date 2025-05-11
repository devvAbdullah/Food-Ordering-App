import React from 'react'
import Image from 'next/image'
import Right from './icons/right'

const Hero = () => {
  return (
    <section className='grid grid-cols-2 mt-6'>
    <div className="description py-12 ">
        <h1 className='text-4xl font-semibold leading-[1.15]'> Everything <br /> is better <br /> with a a&nbsp; <span className='text-red-500'>Pizza</span></h1>
        <p className='my-6 text-gray-500'>Pizza is the missing piece that makes everyday complete, a simple yet delicious joy in life </p>
        <div className="flex gap-5 items-center text-sm">
            <button className='bg-red-500 hover:bg-red-600 text-white  uppercase border rounded-full px-3 py-1 flex gap-2 items-center '>Order Now <Right/></button>
            <button className=' border-none  text-gray-600 font-semibold items-center hover:text-gray-700 flex gap-2'>Learn More <Right/></button>
            
        </div>
    </div>
    <div className='img relative '>
        <Image src={'/pizza.png'} alt='pizza' layout={'fill'} objectFit={'contain'} />
    </div>
</section>
  )
}

export default Hero


