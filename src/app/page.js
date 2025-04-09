//components
import Navbar from './components/Navbar'

import Image from 'next/image';

export default function Home() {
  return (
    <>
        <Navbar />
        <div className='w-full bg-blue-300 min-h-80 flex justify-center place-items-center'>
          <h2 className='font-extrabold text-xl'>Welcome to Our World Tomorrow.</h2>
        </div>
    </>
  );
}
