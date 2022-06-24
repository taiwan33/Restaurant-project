import React from 'react'

const Signup = () => {
    const clickHandler = () => {

    }
    return (
        <div>
            <div className='inline-grid space-y-6 space-x-5 px-[2%] pb-[8%] pt-[4%] my-[4%] w-5/6 border bg-[#030315] overflow-hidden'>
                <div>
                    <p className='text-4xl font-bold tracking-widest mb-2'>Sign up Page</p>
                </div>
                <div>
                    <input className='w-5/6 p-4 text-gray-800' placeholder='Username...' name='username' type='text' />
                </div>
                <div>
                    <input className='w-5/6 p-4 text-gray-800' placeholder='Email' name='email@email.com' type='text' />
                </div>
                <div className='overflow-hidden'>
                    <button className='button' onClick={clickHandler}>SUBMIT</button>
                </div>
            </div>
        </div>
    )
}

export default Signup