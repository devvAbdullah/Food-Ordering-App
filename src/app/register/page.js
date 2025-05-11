"use client"
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'


const page = () => {
  
  const [email, setEmail] = useState()
  const [password, setPassword] = useState() 
  const [creatingUser, setCreatingUser] = useState(false)
  const [userCreated , setuserCreated ] = useState(false)
  const [error, seterror] = useState(false)
  const  handleFormSubmit =async (e) => {
    e.preventDefault()
    setCreatingUser(true)
    seterror(false)
    setuserCreated(false)
  const response= await fetch('/api/register',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    console.log(response)
    if (!response.ok) {
      seterror(true)
      setuserCreated(false)
      
      
    }
    else {
      seterror(false)
      setuserCreated(true)
    }

    setCreatingUser(false)
    
  }

  return (
 <section className='mt-8'>

      <h1 className='text-red-500 text-center text-4xl font-semibold mb-4'>Register</h1>
      {userCreated && (
        <div className='text-center my-4 '>
        User Created.
        <br />
         Now you can <Link className='underline' href='/'>Login &raquo;</Link>
          </div> 

      )
      }
      {error && (
        <div className='text-center my-4 '>
        Error occured 
        <br />
        Please try again later   
          </div> 

      )
      }
      <form  className=' block max-w-xs mx-auto' onSubmit={handleFormSubmit}>
        <input disabled={creatingUser} type="email" placeholder='email' value={email} onChange={e=>{setEmail(e.target.value)}} />
        <input disabled={creatingUser} type="password" placeholder='password' value={password} onChange={e=>{setPassword(e.target.value)}} />
        <button disabled={creatingUser} type="submit">Register</button>
        <div className='  text-center my-4 text-gray-500'>or log in with provider</div>
        <button className='flex items-center justify-center gap-2'>
          <Image className='' src={'/google.png'} alt='' width={20} height={20}/>
          
           Log in with Google
          </button>
          <div className='text-center my-4 text-gray-500 border-t pt-4 '>
            Already have an account? <Link  className='underline' href={'/login'}>Login here &raquo; </Link>
          </div>
      </form>
    </section>
  )
}

export default page
