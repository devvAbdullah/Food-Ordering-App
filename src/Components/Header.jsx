'use client'
import React from 'react'
import Link from 'next/link'
import {  signOut, useSession } from 'next-auth/react'
const Header = () => {

const session = useSession()
  console.log(session)
  const status = session.status;
  let  UserName="Demo User";
if( UserName && UserName.includes(" ")){
  UserName=UserName.split(" ")[0];
}
 



  return (
    <header className='flex flex-row items-center justify-between  p-3'>
      <nav className=' flex flex-row gap-8 items-center text-gray-500  font-semibold'>
        <Link href={'/'} className='text-red-500 font-semibold  text-2xl '>Logo</Link>
        <Link href={'/'} className=' hover:text-gray-600 hover:text-lg'>Home</Link>
        <Link href={'/'} className=' hover:text-gray-600  hover:text-lg'>Menu</Link>
        <Link href={'/'} className=' hover:text-gray-600  hover:text-lg'>About</Link>
        <Link href={'/'} className=' hover:text-gray-600  hover:text-lg'>Contact</Link>
      </nav>
      <nav className=' flex flex-row gap-4 items-center text-gray-500  font-semibold'>
        {status === "authenticated" && (
          <>
          <Link className='whitespace-nowrap' href={"/profile"}>Hello, {UserName}</Link>
            <button onClick={() => { signOut() }} className='bg-red-500 text-white rounded-full px-7 py-1  hover:bg-red-600'>logout</button>
          </>
        )}
        {status === "unauthenticated" && (
          <>
            <Link href='/Login'>Login</Link>
            <Link href={'/register'} className='bg-red-500 text-white rounded-full px-7 py-1  hover:bg-red-600'>Register</Link>
          </>
        )}
      </nav>
    </header>
  )

}

export default Header
