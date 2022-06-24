import React from 'react'
import Images from '../images'
import { Link } from 'react-router-dom'

const Cards = () => {
    return (
        <div className='font-adelia p-[.5%] '>
            <div className='block md:grid grid-cols-3 items-center mt-[5%] mb-[6%] '>
                <div className='grid col-span-2 pl-[3%] mr-8 overflow-hidden'>
                    <img className='w-full h-[450px] object-cover item-hovers' src={Images.table3} alt="table" />
                </div>
                <div className='mx-[6%] grid border space-y-10 md:mx-[4%] my-[4%] p-[9%] hover'>
                    <p className='text-2xl md:text-4xl tracking-widest font-bold'>BOOK A <br /> TABLE</p>
                    <p className='tracking-wider text-lg'>We would love to have you as our guest!</p>
                    <div className='overflow-hidden'>
                        <Link to='/signup'><button className='button'>RESERVATIONS</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='block md:grid grid-cols-3 p-[.5%]  '>
                <div className='mx-[6%] grid col-span-1 space-y-10 border md:my-[13%] md:mr-[14%] pt-[8%] pb-[3%] px-[3%] hover'>
                    <p className='text-2xl lg:text-4xl tracking-widest font-bold'>NEED A <br /> GIFT?</p>
                    <p className='tracking-wider text-lg'>We would love to provide gift cards!</p>
                    <Link to='/signup'><button className='button'>GIFT CARDS</button></Link>
                </div>
                <div className='grid col-span-2 overflow-hidden'>
                    <img className='w-full object-cover h-[450px] item-hovers' src={Images.food7} alt="table" />
                </div>
            </div>
        </div>
    )
}

export default Cards