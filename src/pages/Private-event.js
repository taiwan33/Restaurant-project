import React from 'react'
import Images from '../images/index'

const Private = () => {
    return (
        <>
            <div>
                <div className='text-center space-y-6 tracking-wider mt-[4%] text-lg p-[3%]'>
                    <p className='text-5xl italic'>BOOK AN EVENT</p>
                    <p className='pt-[2%]'>For all inquiries, please fill out the form below and we’ll be in touch soon.</p>

                    <p>Elegantly designed to complement the restaurant, Francie's Private Dining Room, "The Vault at Francie," seats up to 12 persons MAXIMUM and is available for dinner, Tuesday through Saturday.</p>

                    <p>Discreetly hidden from view, The Vault nonetheless feels very much part of the main restaurant and is already one of the most beautiful private dining spaces in Brooklyn.</p>

                    <p>Decorated with antiques, original artwork, and a show-stopping mirror redolent of the Gilded Age, The Vault is the ideal space for all manner of events, whether an intimate gathering, a corporate dinner, or a family celebration.</p>

                    <p>Please follow us on Instagram for weekly updates.</p>

                    <p> *NEED TO KNOW:</p>

                    <p>The Vault at Francie has a hard maximum of 12 persons and has a Food & Beverage Minimum of $2000.</p>

                    <p> A 3- or 4-course set menu (with choices) is required for all parties sized 7-12 people.  Additional menu items or customization may be available upon request.  Custom beverage programs are also available.</p>

                    <p>We will book The Vault a maximum of 90 days in advance.</p>

                    <p>A deposit of $250 is required to guarantee the reservation.</p>
                    <div className='grid place-content-center overflow-hidden'>
                        <button className='button'>Sample Menus</button>
                    </div>
                </div>

                <center>
                    <div className='border w-1/2 space-y-2 mt-[2%]'>
                        <div className='grid place-content-center overflow-hidden'>
                            <img className='w-full item-hover' src={Images.private} alt='private room' />
                        </div>
                        <div>
                            <p className='text-xl font-normal'>The Vault At Francie</p>
                        </div>
                        <div>
                            <p className='text-lg pb-[3%]'>Capacity:12 </p>
                        </div>
                    </div>
                </center>
                <div className='overflow-hidden mt-3 pb-6'>
                    <button className='button'>Inquery Now</button>
                </div>
            </div>
        </>
    )
}

export default Private