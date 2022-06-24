import React from 'react'
import Images from '../images/index'

const Gallery = () => {
    return (
        <div>
            <div className='grid grid-cols-3 gap-x-12 mt-[7%] pb-[3%] mx-[7%] gap-y-9'>
                <div className='border overflow-hidden'>
                    <img className='w-full h-[230px] item-hover object-cover ' src={Images.dining} alt="dining" />
                    <p className='p-3 text-lg'>Dining Room Pictute</p>
                </div>
                <div className='border overflow-hidden'>
                    <img className='w-full h-[230px] item-hover object-cover' src={Images.preety} alt="dining" />
                    <p className='p-3 text-lg'>Dining Room Pictute</p>
                </div>
                <div className='border overflow-hidden'>
                    <img className='w-full h-[230px] item-hover object-cover' src={Images.foodpic} alt="dining" />
                    <p className='p-3 text-lg'>Dining Room Pictute</p>
                </div>
                <div className='border overflow-hidden'>
                    <img className='w-full h-[230px] item-hover object-cover' src={Images.foodpic} alt="dining" />
                    <p className='p-3 text-lg'>Dining Room Pictute</p>
                </div>
                <div className='border overflow-hidden'>
                    <img className='w-full h-[230px] item-hover object-cover' src={Images.dining} alt="dining" />
                    <p className='p-3 text-lg'>Dining Room Pictute</p>
                </div>
                <div className='border overflow-hidden'>
                    <img className='w-full h-[230px] item-hover object-cover' src={Images.preety} alt="dining" />
                    <p className='p-3 text-lg'>Dining Room Pictute</p>
                </div>
            </div>
        </div>
    )
}

export default Gallery