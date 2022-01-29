import React from 'react';
import vector from "../../assets/images/vector.png"

function EightSection() {
    return <div>
        <section className="flex px-4 flex-col items-center pt-20 mb-20 ">
            <div className="relative sm:max-w-[58rem] w-full flex flex-col justify-center items-center ">
                <img className="bg-[#4D30ff] bg-cover rounded-xl min-h-[24rem] absolute z-[0]" src={vector} alt="vector" />
                <div className="flex flex-col items-center text-white z-[1] gap-6 w-full px-6">
                    <p className="font-bold text-center sm:text-[42px] text-[35px] xs:w-[10ch]">Start Building On Solana</p>
                    <button className="bg-white text-[#4D30ff] rounded-md h-[52px]  w-full sm:w-[45%] font-semibold ">Start Now</button>
                </div>
            </div>
        </section>
    </div>;
}

export default EightSection;
