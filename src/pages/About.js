import React from 'react'
import Footer from '../components/Footer'
import Images from '../images/index'

const About = () => {
    return (
        <>
            <div className='pb-3'>
                <div>
                    <img className='h-[550px] w-full object-cover ' src={Images.group} alt="pic" />
                </div>
                <div>
                    <p className='tracking-widest p-[6%] text-lg'>Francie, after much delay, debuted in  December 2020, and is the first independent collaboration between Chef-Owner Christopher Cipollone (Piora, Cotogna) and Owner-Operator John Winterman (Bâtard, Daniel).  Francie is located on the corner of Broadway & Bedford in the heart of Williamsburg, Brooklyn, and has the convivial feel of a neighborhood brasserie. Located in a limestone-clad former bank building, Francie serves an approachable menu inspired by European flavors and designed for flexibility:  snacks, shellfish, and first courses, followed by handmade pastas and main courses.  Inspired choices include The Market Salad, Lobster Ravioli, Heritage Pork Chop, and Côte de Boeuf for Two.  Save room for the Cheese Cart. The timeless space, designed by architect Glen Coben, is brought together by the open kitchen, a focal point that beckons both neighbors and guests to the warmth of the dining room.</p>
                </div>
                <div>
                    <p className='text-6xl pb-5 font-adelia'>Team Members</p>
                </div>
                <div className='grid grid-cols-3 gap-x-20 gap-y-12 m-12 pb-5'>
                    <div className='border w-full cursor-pointer'>
                        <img className='w-full hover:brightness-75 ease-in duration-300' src={Images.man1} alt="waiter" />
                        <p className='text-2xl p-2'>Will Smith</p>
                    </div>
                    <div className='border w-full cursor-pointer'>
                        <img className='w-full hover:brightness-75 ease-in duration-300' src={Images.man2} alt="waiter" />
                        <p className='text-2xl p-2'> Smith</p>
                    </div>
                    <div className='border w-full cursor-pointer'>
                        <img className='w-full hover:brightness-75 ease-in duration-300' src={Images.man3} alt="waiter" />
                        <p className='text-2xl p-2'>Pat Cummins</p>
                    </div>
                    <div className='border w-full cursor-pointer'>
                        <img className='w-full hover:brightness-75 ease-in duration-300' src={Images.man4} alt="waiter" />
                        <p className='text-2xl p-2'>MS Dhoni</p>
                    </div>
                    <div className='border w-full cursor-pointer'>
                        <img className='w-full hover:brightness-75 ease-in duration-300' src={Images.man2} alt="waiter" />
                        <p className='text-2xl p-2'>Rajesh Smith</p>
                    </div>
                    <div className='border w-full cursor-pointer'>
                        <img className='w-full hover:brightness-75 ease-in duration-300' src={Images.man3} alt="waiter" />
                        <p className='text-2xl p-2'>Will Smith</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About