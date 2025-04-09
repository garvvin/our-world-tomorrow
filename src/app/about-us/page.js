//components
import Navbar from '../components/Navbar'

export default function AboutUs() {
  return (
    <>
        <Navbar />
        <div className='w-full min-h-80 flex flex-col justify-center place-items-center'>
          <div className='flex flex-col gap-7 justify-center place-items-center w-4/5 max-w-300'>
            <h2 className='font-extrabold text-xl'>About Us</h2>
            <div className='flex flex-col place-items-center gap-5 min-w-[425px] max-w-[650px] w-full'>
            <h4 className='text-xl text-center'>We are some high school kids from KHS, creating this non-profit to help those in need, seeking for a better world tomorrow.</h4>
            <h4 className='text-xl text-center underline'>Our world tomorrow.</h4>
            </div>
          </div>
        </div>
    </>
  );
}
