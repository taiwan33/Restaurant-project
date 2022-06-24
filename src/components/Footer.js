import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='tracking-wider'>
                <div className='flex justify-between text-center bg-[#030315] text-yellow-100 text-sm p-[.5%] pl-[2%] fixed bottom-0 w-full'>
                    <div className='flex space-x-2'>
                        <div className='cursor-pointer mt-2 hover:animate-bounce'><FaFacebook style={{ fontSize: '25' }} /></div>
                        <div className='cursor-pointer mt-2 hover:animate-bounce '><FaInstagram style={{ fontSize: '25' }} /></div>
                    </div>
                    <div className='hidden md:flex font-medium font-roboto space-x-4 mr-[1.5%] '>
                        <div></div>
                        <div className='mt-2'><Link to="/about"><span className='cursor-pointer hover:text-red-300'>ABOUT</span></Link></div>
                        <div className='mt-2'><Link to='/careers'><span className='cursor-pointer hover:text-red-300'>CAREER</span></Link></div>
                        <div className='mt-2'><Link to='/contact'><span className='cursor-pointer hover:text-red-300'>CONTACT</span></Link></div>
                        <div className='overflow-hidden'>
                            <button onClick={() => { navigate('/signup') }} className='button'>EMAIL SIGNUP</button>
                        </div>
                    </div>
                    <div className='block md:hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <div className='lg:tracking-wider text-xs pb-3 text-gray-300 cursor-pointer sticky'>POWERED BY INTELZY</div>
            </div>
        </>
    )
}

export default Footer