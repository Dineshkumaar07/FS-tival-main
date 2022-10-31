import React from 'react'
import { data } from './data'

function Card() {
    return (
        <>
            <div>

                {data.map((item) => (

                    <img className="w-[400px] inline-block p-2 cursor-pointer hover:scale-105 ease-in duration-300" src={item.img} alt="/" />
                ))}
                <br />
                {data.map((item) => (
                    <p className="w-[400px] text-center inline-block p-2 cursor-pointer ">{item.abt}</p>
                ))}
            </div>
        </>
    )
}

export default Card
