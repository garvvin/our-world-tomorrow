//components
import Navbar from './components/Navbar'

import './earth.css'

export default function Home() {
  return (
    <>
        <Navbar />
        <div className='w-full bg-blue-300 min-h-80 flex flex-col justify-center place-items-center'>
          <div className='w-full overflow-hidden h-100 flex justify-center place-items-center'>
            <div className='planet-container'>
                <div className='night'></div>
                <div className='day'></div>
                <div className='clouds'></div>
                <div className='inner-shadow'></div>
            </div>
          </div>
          <h2 className='font-extrabold text-xl mb-10'>Welcome to Our World Tomorrow.</h2>
        </div>
    </>
  );
}
