"use client"
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { signIn } from 'next-auth/react'

const LoginPage = () => {


    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [LoginInProgress, setLoginInProgress] = useState(false)
    const handleformsubmit = async (e) => {
     e.preventDefault()
      setLoginInProgress(true)
      await signIn('credentials',{ email,password,})
      // await signIn('credentials',{email , password })
      
      setLoginInProgress(false)
    }

  return (
    <section className='mt-8'>
      <h1 className='text-red-500 text-center text-4xl font-semibold mb-4'>Login</h1>
      <form  className=' block max-w-xs mx-auto' onSubmit={handleformsubmit} >
      <input disabled={LoginInProgress} type="email" name='email' placeholder='email' value={email} onChange={e=>{setEmail(e.target.value)}} />
        <input disabled={LoginInProgress} type="password" name='password' placeholder='password' value={password} onChange={e=>{setPassword(e.target.value)}} />
        <button disabled={LoginInProgress} type="submit">Login</button>
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

export default LoginPage
