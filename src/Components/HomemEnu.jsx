
import React from 'react'
import Image from 'next/image'
import Right from './icons/right'
import Menu from './Menu'
import SectionHeaders from '../app/Sectionheader'

const Homemenu = () => {
  return (
    <section>
    <div className='absolute left-0 right-0 '>
    <div className='absolute -top-[70px] -z-10 -left-0 '>
            <Image src={'/sallad1.png'} alt='pizza' height={107} width={105}  />
        </div>
    <div className=' img absolute -top-[100px] right-0 -z-20  '>
            <Image className='overflow-hidden' src={'/sallad2.png'} alt='pizza' height={107} width={105} />
        </div>
    </div>
<div className='text-center '>
   <SectionHeaders SubHeader={'Check Out'} MainHeader={'Menu'} />
</div>

<div className='card grid grid-cols-3 gap-4  my-7'>
<Menu/>
<Menu/>
<Menu/>
<Menu/>
<Menu/>
<Menu/>
</div>
</section>
  )
}

export default Homemenu



