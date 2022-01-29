import React from 'react';

const Card = ({ data }) => {
    return (
        <div className="w-full h-[320px] rounded-[4px] overflow-hidden">
            <div className={`w-full h-[50%] flex flex-col ${data.color}`}>
                <img className="h-12 m-auto " src={data.img} alt="introduction to rust" />
            </div>

            <div className=" w-full text-sm h-[50%] px-4 justify-between flex flex-col gap-4 py-6  text-white bg-[#1e2937] text-left">
                <p>{data.title}</p>
                <p className="text-[#9483ff]">START &gt;</p>
            </div>
        </div>
    )
}

export default Card