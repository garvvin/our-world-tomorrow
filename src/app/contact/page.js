'use client'
//dependencies
import { useState } from 'react'

//components
import Navbar from '../components/Navbar'

export default function Contact() {
  const [name, setName]     = useState('');
  const [email, setEmail]   = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    const recipient = 'contact.ourworldtomorrow@gmail.com'
    const subject   = encodeURIComponent('Contact Form Submission')

    // Build the mailto: link
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      message
    ];
    const body = encodeURIComponent(bodyLines.join('\r\n'));

    // Only run in browser
    if (typeof window !== 'undefined') {
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;// Build the mailto: link
    }
  }

  return (
    <>
        <Navbar />
        <div className='w-full min-h-80 flex flex-col justify-center place-items-center'>
          <div className='flex flex-col gap-7 justify-center place-items-center w-4/5 max-w-300'>
            <h2 className='font-extrabold text-xl'>Contact Us</h2>
            <form onSubmit={handleSubmit} className='flex flex-col place-items-center px-5 gap-5 min-w-[390px] max-w-[650px] w-full'>
              <input className='text-md focus:bg-gray-200 bg-gray-100 py-3 px-5 rounded-xl w-full duration-300' type='text' placeholder='Name' 
              onChange={e => setName(e.target.value)}
              required
              />
              <input className='text-md focus:bg-gray-200 bg-gray-100 py-3 px-5 rounded-xl w-full duration-300' type='email' placeholder='Email' 
              onChange={e => setEmail(e.target.value)}
              required
              />
              <textarea className='text-md focus:bg-gray-200 bg-gray-100 w-full py-3 px-5 rounded-xl h-60 duration-300' placeholder='Message'
              onChange={e => setMessage(e.target.value)}
              required
              />
              <div className='flex w-full justify-end'><button type='submit' className='duration-300 text-md bg-sky-300 hover:bg-sky-400 active:bg-sky-500 cursor-pointer py-3 px-5 rounded-xl text-white'>Submit</button></div>
            </form>
          </div>
        </div>
    </>
  );
}
