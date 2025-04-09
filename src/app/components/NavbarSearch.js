'use client'
import { useState } from 'react'
import { CiSearch } from "react-icons/ci";

export default function NavbarSearch( { open } ) {
    const [searchVal, setSearchVal] = useState('')

    return (
        <div className={`${open ? 'block' : 'hidden'} h-full lg:flex items-center`}>
            <div className='relative'>
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <CiSearch />
                </div>
                <input placeholder="Search" type='text' value={searchVal} onChange={(e) => setSearchVal(e.target.value)} className='w-100 lg:w-auto focus:outline-hidden focus:border-sky-400 bg-gray-50 focus:bg-gray-100 border-b-2 py-1 px-10 duration-300'/>
            </div>
        </div>
    )
}