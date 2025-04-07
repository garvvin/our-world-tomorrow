'use client'
import { useState } from 'react'

export default function NavbarSearch() {
    const [searchVal, setSearchVal] = useState('')

    return (
        <div className='h-full flex items-center'>
            <div className='relative'>
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input placeholder="Search" type='text' value={searchVal} onChange={(e) => setSearchVal(e.target.value)} className='focus:outline-hidden focus:border-sky-400 bg-gray-50 focus:bg-gray-100 border-b-2 py-1 px-10'/>
            </div>
        </div>
    )
}