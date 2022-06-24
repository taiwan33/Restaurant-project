import React from 'react'
import Images from '../images'

const Items = () => {
    return (
        <div>
            <div>
                <p className='text-xl tracking-widest font-adelia mt-[7%] mb-[3%] md:text-2xl lg:text-4xl'>FOLLOW US ON INSTAGRAM</p>
            </div>
            <div className='pb-2 grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-5'>
                <div className=' w-full overflow-hidden cursor-pointer'>
                    <img className='h-full w-full item-hover' src={Images.one} alt="hhh" />
                </div>
                <div className='w-full overflow-hidden cursor-pointer'>
                    <img className='h-full w-full item-hover' src={Images.two} alt="hhh" />
                </div>
                <div className='h-full w-full overflow-hidden cursor-pointer'>
                    <img className='h-full w-full item-hover' src={Images.three} alt="hhh" />
                </div>
                <div className='h-full w-full overflow-hidden cursor-pointer'>
                    <img className='h-full w-full item-hover' src={Images.four} alt="hhh" />
                </div>
                <div className='h-full w-full overflow-hidden cursor-pointer'>
                    <img className='h-full w-full item-hover' src={Images.five} alt="hhh" />
                </div>
                <div className='h-full w-full overflow-hidden cursor-pointer'>
                    <img className='h-full w-full item-hover' src={Images.six} alt="hhh" />
                </div>
                <div className='h-full w-full overflow-hidden cursor-pointer'>
                    <img className='h-full w-full item-hover' src={Images.one} alt="hhh" />
                </div>
                <div className='h-full w-full overflow-hidden cursor-pointer'>
                    <img className='h-full w-full item-hover' src={Images.eight} alt="hhh" />
                </div>
                <div className='h-full w-full overflow-hidden cursor-pointer'>
                    <img className='h-full w-full item-hover' src={Images.nine} alt="hhh" />
                </div>
                <div className='h-full w-full overflow-hidden cursor-pointer'>
                    <img className='h-full w-full item-hover' src={Images.three} alt="hhh" />
                </div>
            </div>
        </div>
    )
}
export default Items