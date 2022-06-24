import React from 'react'

const Careers = () => {
    return (
        <div className='pb-2'>
            <div className='pt-[5%] pb-[4%]'>
                <p className='text-5xl'>Careers</p>
            </div>
            <div className='grid grid-cols-3 justify-items-center gap-y-7 mx-[20%]'>
                <div className='border px-[4%] py-[3%] text-left w-[75%] cursor-pointer rounded-md hover:brightness-75'>
                    <p>Sous Chef</p>
                    <p>Full Time • Salary </p>
                    <p>Expires: Apr 9, 2022</p>
                </div>
                <div className='border px-[4%] py-[3%] text-left w-[75%] rounded-md cursor-pointer hover:brightness-75'>
                    <p>Commis Chef</p>
                    <p>Full Time • Salary </p>
                    <p>Expires: Apr 9, 2022</p>
                </div>

                <div className='border px-[4%] py-[3%] text-left w-[75%] rounded-md cursor-pointer hover:brightness-75'>
                    <p>Sous Chef</p>
                    <p>Full Time • Salary </p>
                    <p>Expires: Apr 9, 2022</p>
                </div>
                <div className='border px-[4%] py-[3%] text-left w-[75%] rounded-md cursor-pointer hover:brightness-75'>
                    <p>Sous Chef</p>
                    <p>Full Time Salary </p>
                    <p>Expires: Apr 9, 2022</p>
                </div>
                <div className='border px-[4%] py-[3%] text-left w-[75%] rounded-md cursor-pointer hover:brightness-75'>
                    <p>Sous Chef</p>
                    <p>Full Time • Salary </p>
                    <p>Expires: Apr 9, 2022</p>
                </div>

            </div>
            <hr className='mx-[22.5%] mb-[2%] mt-[4%] w-[56%]' />
            <div className='pb-1'>
                <p className='tracking-widest'>Let's connect! Share your resume and start the <br /> conversation with our team.</p>
                <div className='overflow-hidden pt-3'>
                    <button className='button'>I Want To Work Here</button>
                </div>

            </div>
            <hr className='mx-[22.5%] my-[2%] w-[56%] pb-8' />
        </div>
    )
}

export default Careers