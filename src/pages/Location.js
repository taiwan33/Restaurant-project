import React from 'react'

const Location = () => {
    return (
        <div>
            <div className='flex justify-around mt-[6%] mb-[8%] leading-7'>
                <div className='flex-1 text-md'>
                    <p className='text-5xl'>HOURS & LOCATION</p>
                    <div className='mt-[5%]'>
                        <p className='underline'>136 Broadway,</p>
                        <p className='underline'>Brooklyn, NY 11249</p>
                        <p className='underline'>718-218-7572</p>
                        <p className='underline'>info@franciebrooklyn.com</p>
                    </div>
                    <div className='mt-[1.5%]'>
                        <p >Dinner</p>
                        <p>Tuesday-Saturday</p>
                        <p>5:30 -10:30 pm</p>
                    </div>
                </div>
                <div className='flex-1 space-y-5 tracking-wider text-md px-[4%]'>
                    <p></p>
                    <p className='text-2xl'>Need to Know:</p>
                    <p>Francie takes reservations up to 30 days in advance.  We regret we are unable to take reservations by email. You may book through the link on our website or call 718.218.7572</p>

                    <p>We answer our phones starting at 2pm, Tuesday through Saturday.</p>

                    <p>Francie does not allow strollers, prams, or e-scooters in the restaurant, nor will we store them for you.  No outside food or beverages will be allowed in the restaurant.  Francie does not serve the Crown Roast of Duck or the Côte de Bouef at the bar.</p>
                </div>
            </div>
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe title="uniqueTitle" className='h-[600px] w-full' src="https://maps.google.com/maps?q=chitwan%20medical%20college&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                    </iframe>
                    <a href="https://www.embedgooglemap.net">google map iframe code</a>
                </div>
            </div>
        </div>
    )
}

export default Location