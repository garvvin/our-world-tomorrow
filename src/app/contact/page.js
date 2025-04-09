//components
import Navbar from '../components/Navbar'

export default function Contact() {
  return (
    <>
        <Navbar />
        <div className='w-full min-h-80 flex flex-col justify-center place-items-center'>
          <div className='flex flex-col gap-7 justify-center place-items-center w-4/5 max-w-300'>
            <h2 className='font-extrabold text-xl'>Contact Us</h2>
            <div className='flex flex-col place-items-center gap-5 min-w-[425px] max-w-[650px] w-full'>
              <input className='text-md focus:bg-gray-200 bg-gray-100 py-3 px-5 rounded-xl w-full duration-300' type='email' placeholder='Email' />
              <textarea className='text-md focus:bg-gray-200 bg-gray-100 w-full py-3 px-5 rounded-xl h-60 duration-300' placeholder='Message' />
              <div className='flex w-full place-items-right'><button className='duration-300 text-md bg-sky-300 hover:bg-sky-400 active:bg-sky-500 cursor-pointer py-3 px-5 rounded-xl text-white'>Submit</button></div>
            </div>
          </div>
        </div>
    </>
  );
}
