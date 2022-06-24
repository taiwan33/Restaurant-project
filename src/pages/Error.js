import React from 'react'
import Images from '../images'

const Error = () => {
    return (
        <div>
            <img className='h-[500px] object-cover w-full' src={Images.error} alt="Error " />
        </div>
    )
}

export default Error