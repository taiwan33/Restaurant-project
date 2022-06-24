import React from 'react'
import Images from '../images/index'


const Bar = () => {
    return (
        <>
            <div className=''>
                <div className='p p-[7%] md:text-lg'>
                    <p className='space-x-8 space-y-7'>
                        <p>Main content starts here, tab to start navigating
                            Drop by the Bar at Francie and step into another world. Conversation flows over sparkling crystal and vintage glassware. Behind the bar, Marcie and Zoe conjure up new concoctions and time-honored classics.</p>

                        <p>Before you savor that first sip, take in the surroundings. Textured walls, ebony columns, back-lit "floating bottles," and a warm zinc bar set a stylish tone. Designed by Glen Coben, the bar at Francie at once evokes the timeless elegance of New York City, yet is distinctly Brooklyn.</p>

                        <p>From late afternoon to late night, the Bar at Francie is infused with a relaxed, inviting energy. To accompany your drinks, choose from a light menu of bar snacks, shellfish, and handmade pastas.</p>
                    </p>
                </div>
                <div
                    id="carouselDarkVariant"
                    className="carousel slide carousel-fade carousel-dark relative z-0 pb-1"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                        <button
                            data-bs-target="#carouselDarkVariant"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            data-bs-target="#carouselDarkVariant"
                            data-bs-slide-to="1"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            data-bs-target="#carouselDarkVariant"
                            data-bs-slide-to="2"
                            aria-label="Slide 1"
                        ></button>
                    </div>

                    <div className="carousel-inner relative w-full overflow-hidden mb-[2.5%] ">
                        <div className="carousel-item active relative float-left w-full ">
                            <img
                                src={Images.bar4}
                                className="block w-full h-[500px] object-cover "
                                alt="Bar 1"
                            />
                        </div>

                        <div className="carousel-item relative float-left w-full ">
                            <img
                                src={Images.bar1}
                                className="block h-[500px] object-cover w-full"
                                alt="bar pic"
                            />
                        </div>
                        <div className="carousel-item relative float-left w-full">
                            <img
                                src={Images.bar2}
                                className="block w-full h-[500px] object-cover"
                                alt="bar picture3"
                            />

                        </div>
                    </div>
                    <button
                        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                        type="button"
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                        type="button"
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Bar