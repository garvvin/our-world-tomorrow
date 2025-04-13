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
              <h4 className='text-lg sm:text-xl text-center'><i>Our World Tomorrow</i> is a non-profit organization aiming to help disadvantaged people through community service and raising awareness on issues that affect today&#39;s world.</h4>
              <h2 className='font-extrabold text-xl mt-10'>Our Goals</h2>
              <h4 className='text-lg sm:text-xl text-center'>Our current goals are to raise money for places of need in <i>Our World Tomorrow&#39;s</i> founding city: Tracy, California. We are also planning on further expanding our influence later on. We also want to educate people on issues that may affect them, their loved ones, and/or their community.</h4>
            </div>
            <Image src='/images/capybara.jpg' className='rounded-xl min-w-[200px] w-80% h-80% relative bottom-50' alt="capybara pic" width={400} height={300}/>
          </div>
        </div>
    </>
  );
}
