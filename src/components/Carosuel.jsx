import React from 'react'

import Card from './Card';

function Carosuel() {

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 400;
    }

    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 400;
    }

    return (


        <>
            <h1 className='font-bold text-center text-2xl mb-4 mt-4'>Carosuel Component</h1>
            <div className='relative flex items-center justify-center gap-5'>
                
                <div onClick={slideLeft} className= "bg-gray-100 shadow-lg rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                    </svg>
                </div>


                <div id='slider' className='w-[1200px] h- overflow-x-scroll  whitespace-nowrap scroll-smooth scrollbar-hide'>
                    <Card/>
                </div>
                <div onClick={slideRight} className= "bg-gray-100 shadow-lg rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                </div>

            </div>
        </>
    )
}

export default Carosuel