import NavbarBtn from './NavbarBtn'
import NavbarSearch from './NavbarSearch'

export default function Navbar() {
    return (
        <nav className='w-full flex flex-row place-content-center items-center h-20'>
            <div className='flex flex-row place-content-center items-center h-full gap-10'>
                <a href="#" className='font-semibold hover:text-sky-400 text-xl'>Our World Tomorrow</a>

                <ul className='flex flex-row h-full'>
                    <li>
                        <NavbarBtn>Home</NavbarBtn>
                    </li>
                    <li>
                        <NavbarBtn>Locations</NavbarBtn>
                    </li>
                    <li>
                        <NavbarBtn>Contact</NavbarBtn>
                    </li>
                    <li>
                        <NavbarBtn>Credit</NavbarBtn>
                    </li>
                </ul>

                <NavbarSearch />
            </div>
        </nav>
    )
}