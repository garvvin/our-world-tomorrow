//components
import Navbar from '../components/Navbar'

//images
import Image from 'next/image';

export default function AboutUs() {
  return (
    <>
        <Navbar />
        <div className='w-full min-h-80 flex flex-col justify-center place-items-center mt-7'>
          <div className='flex static flex-col gap-7 justify-center place-items-center min-w-[390px] max-w-[650px] w-4/5 max-w-300 relative'>
            <div className='mask-b-from-20% mask-b-to-80% bg-[url(/images/nature.jpg)] w-full h-90 rounded-xl'></div>
            <div className='flex flex-col gap-7 place-items-center relative -top-50'>
              <h2 className='font-extrabold text-xl mt-5'>Mission Statement</h2>
              <h4 className='text-lg sm:text-xl text-center'>We inspire our youth to take action on social and environmental issues that affect our world for a better tomorrow!</h4>
              <h2 className='font-extrabold text-xl mt-10'>Who are we?</h2>
              <div className='flex flex-col place-items-center gap-5 w-full'>
                <h4 className='text-lg sm:text-xl text-center'>We are some high school kids from KHS, creating this non-profit to help those in need, seeking for a better world tomorrow.</h4>
                <h4 className='text-xl text-center underline'>Our world tomorrow.</h4>
              </div>
            </div>
            <Image src='/images/capybara.jpg' className='rounded-xl min-w-[200px] w-80% h-80% relative bottom-50' alt="capybara pic" width={400} height={300}/>
          </div>
        </div>
    </>
  );
}
