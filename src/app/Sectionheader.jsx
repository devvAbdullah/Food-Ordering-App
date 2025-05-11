

import React from 'react'

const SectionHeaders = ({SubHeader,MainHeader}) => {
  return (
    <div>
    <h3 className='text-gray-500 uppercase font-semibold leading-4'>{SubHeader}</h3>
     <h2 className='text-4xl text-red-500 font-bold  italic'>{MainHeader}</h2>
 </div>
  )
}

export default SectionHeaders

