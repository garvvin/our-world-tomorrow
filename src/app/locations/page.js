//components
import Navbar from '../components/Navbar'

export default function Locations() {
  return (
    <>
        <Navbar />
        <div className='w-full px-5 min-h-80 flex flex-col justify-center place-items-center'>
          <h2 className='text-xl my-10 text-center spectral-semibold'>Locations we are currently based in</h2>
          <iframe className='rounded-lg bg-sky-200 mt-10 size-90 sm:mt-2 sm:size-130 lg:w-180' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50495.25288773511!2d-121.505867513841!3d37.720773881515946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809014590a55994d%3A0xe8466f79e0af1499!2sTracy%2C%20CA!5e0!3m2!1sen!2sus!4v1744175542669!5m2!1sen!2sus" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </>
  );
}
