//components
import Navbar from "../components/Navbar";

import Image from "next/image";

export default function Credit() {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-80 flex flex-col justify-center place-items-center">
        <div className="flex flex-col mb-10 gap-8 justify-center place-items-center w-4/5 max-w-240">
          <h2 className="font-extrabold text-xl">Our Board</h2>
          <div className="flex gap-7 w-full">
            <div className="w-[200px] h-[223px] md:w-[240px] md:h-[268px] lg:w-[300px] lg:h-[335px] relative">
              <div className="w-full h-full border-3 rounded-xl absolute top-2 left-2"></div>
              <Image
                src="/images/real-shayla-mug.jpeg"
                className="rounded-xl min-w-[200px] w-full h-full relative"
                alt="mugshot of shayla, the founder and program coordinator"
                width={300}
                height={400}
              />
            </div>
            <div className="flex flex-col gap-3 pt-15 md:pt-20">
              <h3 className="font-bold text-md md:text-lg">
                Founder / Program Coordinator
              </h3>
              <h3 className="text-md md:text-lg">Shayla Mol</h3>
            </div>
          </div>
          <div className="flex flex-row-reverse gap-7 w-full bottom-5">
            <div className="w-[200px] h-[223px] md:w-[240px] md:h-[268px] lg:w-[300px] lg:h-[335px] relative">
              <div className="w-full h-full border-3 rounded-xl absolute top-2 right-2"></div>
              <Image
                src="/images/real-niyah-mug.jpeg"
                className="rounded-xl min-w-[200px] w-full h-full relative"
                alt="mugshot of niyah, the program director"
                width={300}
                height={400}
              />
            </div>
            <div className="flex flex-col gap-3 pt-15 md:pt-20 text-right">
              <h3 className="font-bold text-md md:text-lg">Program Director</h3>
              <h3 className="text-md md:text-lg">Niyah Palma</h3>
            </div>
          </div>
          <div className="flex gap-7 w-full">
            <div className="w-[200px] h-[223px] md:w-[240px] md:h-[268px] lg:w-[300px] lg:h-[335px] relative">
              <div className="w-full h-full border-3 rounded-xl absolute top-2 left-2"></div>
              <Image
                src="/images/real-garvin-mug.jpeg"
                className="rounded-xl min-w-[200px] w-full h-full relative"
                alt="mugshot of garvin, the lead programmer"
                width={300}
                height={400}
              />
            </div>
            <div className="flex flex-col gap-3 pt-15 md:pt-20">
              <h3 className="font-bold text-md md:text-lg">Lead Programmer</h3>
              <h3 className="text-md md:text-lg">Garvin Yu</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
