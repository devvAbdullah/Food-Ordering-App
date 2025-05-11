'use client'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import React from 'react'


const page = () => {
  
  const session = useSession()
  // const {status}=session
  const status="authenticated"
  console.log(status)
  if (status === 'loading') {
     return <div>Loading...</div>;
  }
  if (status === 'unauthenticated') {
    return redirect('/Login') ;
  }
  return (
    
    <section className='mt-8'>
      <h1 className='text-red-500 text-center text-4xl font-semibold mb-4'>Login</h1>
      </section>
  )
}

export default page
