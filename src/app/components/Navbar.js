'use client'
import NavbarBtn from './NavbarBtn'
import NavbarSearch from './NavbarSearch'

import { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import Link from 'next/link'

export default function Navbar() {
    const [open, setOpen] = useState(false) 

    return (
        <nav className='w-full flex flex-col lg:flex-row lg:justify-center h-20'>
            <div className={`flex flex-col duration-200 lg:flex-row  overflow-hidden items-center ${open ? 'min-h-50' : 'min-h-full'} lg:min-h-full lg:gap-5 lg:gap-10 bg-white-500 z-40`}>
                <div className={`flex flex-row min-h-20 place-content-center items-center h-20 lg:h-full gap-8 lg:gap-5 ml-5`}>
                    <span className='inline lg:hidden mx-3 hover:text-sky-500 cursor-pointer' onClick={() => setOpen(!open)}>
                        <RxHamburgerMenu />
                    </span>
                    <Link href="/"><span className='font-semibold hover:text-sky-400 text-xl'>Our World Tomorrow</span></Link>
                </div>

                <ul className={`flex flex-col w-100 text-center lg:w-auto lg:flex lg:flex-row lg:min-h-20`}>
                    <li>
                        <NavbarBtn href='/about-us'>About Us</NavbarBtn>
                    </li>
                    <li>
                        <NavbarBtn href='/locations'>Locations</NavbarBtn>
                    </li>
                    <li>
                        <NavbarBtn href='/contact'>Contact</NavbarBtn>
                    </li>
                    <li>
                        <NavbarBtn href='/credit'>Credit</NavbarBtn>
                    </li>
                </ul>

                <NavbarSearch />
            </div>
        </nav>
    )
}