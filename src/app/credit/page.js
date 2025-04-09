//components
import Navbar from '../components/Navbar'

import Image from 'next/image';

export default function Credit() {
  return (
    <>
        <Navbar />
        <div className='w-full min-h-80 flex flex-col justify-center place-items-center'>
          <div className='flex flex-col mb-10 gap-10 justify-center place-items-center w-4/5 max-w-300'>
            <h2 className='font-extrabold text-xl'>Credits</h2>
            <div className='flex gap-10 w-full'>
              <Image src='/images/shayla-mug.png' className='rounded-xl w-[200px] h-[223px] md:w-[240px] md:h-[268px] lg:w-[300px] lg:h-[335px]' alt="mugshot of shayla, one of the founders" width={300} height={400}/>
              <div className='flex flex-col gap-3 pt-15 md:pt-20'>
                <h3 className='font-bold text-md md:text-lg'>Founder / Program Coordinator</h3>
                <h3 className='text-md md:text-lg'>Shayla Mol</h3>
              </div>
            </div>
            <div className='flex flex-row-reverse gap-10 w-full'>
              <Image src='/images/niyah-mug.png' className='rounded-xl w-[200px] h-[223px] md:w-[240px] md:h-[268px] lg:w-[300px] lg:h-[335px]' alt="mugshot of garvin, one of the founders" width={300} height={400}/>
              <div className='flex flex-col gap-3 pt-15 md:pt-20 text-right'>
                <h3 className='font-bold text-md md:text-lg'>Founder / Program Director</h3>
                <h3 className='text-md md:text-lg'>Niyah Palma</h3>
              </div>
            </div>
            <div className='flex gap-10 w-full'>
              <Image src='/images/garvin-mug.png' className='rounded-xl w-[200px] h-[223px] md:w-[240px] md:h-[268px] lg:w-[300px] lg:h-[335px]' alt="mugshot of garvin, one of the founders" width={300} height={400}/>
              <div className='flex flex-col gap-3 pt-15 md:pt-20'>
                <h3 className='font-bold text-md md:text-lg'>Lead Programmer</h3>
                <h3 className='text-md md:text-lg'>Garvin Yu</h3>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
