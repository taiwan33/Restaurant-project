import React from 'react'

const Reservation = () => {
  return (
    <div className='inline-grid space-y-6 space-x-5 px-[2%] pb-[5%] pt-[4%] my-[4%] w-5/6 border bg-[#030315]'>
      <div>
        <p className='text-4xl font-bold tracking-widest mb-2'>RESERVATIONS</p>
      </div>
      <div>
        <input className='input' placeholder='Number Of People' type='text' />
      </div>
      <div>
        <input className='input' placeholder='Date' type='date' />
      </div>
      <div className='overflow-hidden'>
        <button className='button'>FIND A TABLE</button>
      </div>
    </div>

  )
}

export default Reservation