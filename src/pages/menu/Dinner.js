import React from 'react'

const Dinner = () => {
    return (
        <>
            <div className='outline outline-offset-4 outline-2 border-2 border-double mx-[4%] mt-[3%] mb-0 pb-4 bg-stone-300 text-black'>
                <div className='p-8'>
                    <div className='text-4xl'> SNACKS</div>
                </div>
                <div className='grid grid-cols-3 gap-y-12 pb-3'>
                    <div className='space-y-2'>
                        <p className='font-bold text-xl'>ROMAN ARMY SOURDOUGH</p>
                        <p className='text-lg'>sunflower spread, whipped lardo</p>
                        <p>10</p>
                    </div>
                    <div className='space-y-2'>
                        <p className='font-bold text-xl'>CRUDITÉS</p>
                        <p className='text-lg'>green garlic pepita dip</p>
                        <p>10</p>
                    </div>
                    <div className='space-y-2'>
                        <p className='font-bold text-xl'>SOUFFLÉ CAKES</p>
                        <p className='text-lg'>seaweed butter, pink lemon, caviar</p>
                        <p>10</p>
                    </div>
                    <div className='space-y-2'>
                        <p className='font-bold text-xl'>SOUFFLÉ CAKES</p>
                        <p className='text-lg'>seaweed butter, pink lemon, caviar</p>
                        <p>10</p>
                    </div>
                    <div className='space-y-2'>
                        <p className='font-bold text-xl'>SOUFFLÉ CAKES</p>
                        <p className='text-lg'>seaweed butter, pink lemon, caviar</p>
                        <p>10</p>
                    </div>

                </div>

                <hr className='border border-black mb-1' />
                <hr className='border border-black' />
                <div className='p-8'>
                    <div className='text-4xl'> SHELLFISH</div>
                </div>
                <div className='grid grid-cols-3 pb-5'>
                    <div className='space-y-2'>
                        <p className='font-bold text-xl'>OYSTERS</p>
                        <p className='text-lg'>hibiscus-rhubarb mignonette</p>
                        <p>10-12 </p>
                    </div>
                    <div className='space-y-2'>
                        <p className='font-bold text-xl'>LITTLENECK CLAMS</p>
                        <p className='text-lg'>horseradish-parsley juice</p>
                        <p>10</p>
                    </div>
                    <div className='space-y-2'>
                        <p className='font-bold text-xl'>PRAWNS</p>
                        <p className='text-lg'>sauce gribiche</p>
                        <p>16 - $32</p>
                    </div>
                </div>

                <hr className='border border-black mb-1' />
                <hr className='border border-black' />
            </div>
        </>

    )
}

export default Dinner