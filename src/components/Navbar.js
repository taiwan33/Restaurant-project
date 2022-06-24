import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>
                <p className='text-md p-[1%] '>Campus Gate, Bharatpur-10, Chitwan</p>
            </div>
            <div className='flex justify-between px-[2.5%] sticky top-0 bg-[#030315] z-50'>
                <div>
                    <Link to="/"><p className='cursor-pointer font-sendflower text-5xl md:text-4xl lg:text-5xl'>FoodWays</p></Link>
                </div>
                <div className='hidden md:flex justify-center p-[1%] gap-3 font-medium font-updock text-xsm lg:text-lg lg:gap-5'>
                    <Link to='/bar'><span className='cursor-pointer hover:text-red-300'>THE BAR</span></Link>
                    <Link to="/gallery"><span className='cursor-pointer hover:text-red-300'>GALLERY</span></Link>
                    <Link to="/location"><span className='cursor-pointer hover:text-red-300'>NEED TO KNOWS</span></Link>
                    <Link to='/menu'><span className='cursor-pointer hover:text-red-300'>MENUS</span></Link>
                    <Link to="/private-event"><span className='cursor-pointer hover:text-red-300'>PRIVATE EVENTS</span></Link>
                    <div className='overflow-hidden -mt-2'><button onClick={() => { navigate('/reservation') }} className='button'>RESERVATIONS</button></div>
                </div>
                <div className='mr-[8%] mt-[3%] mb-[2%] md:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </>
    )
}

export default Navbar