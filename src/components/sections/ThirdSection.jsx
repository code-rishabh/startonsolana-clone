import React from 'react';
import section3 from "../../assets/images/section-3.png";

function ThirdSection() {
    return <div>
        <section className="w-full flex xs:pt-0 sm:px-5  pt-10 justify-center pb-10 bg-[#131e2c]">
            <div className="sm:max-w-[59rem] px-3 sm:px-0 flex flex-col sm:grid sm:grid-cols-2 gap-16">
                <div className='hidden  sm:block'>
                    <img src={section3} alt="contribute and start earning" />
                </div>
                <div className="leading-[52px] w-full sm:max-w-[425px] h-[322px] flex flex-col justify-end gap-10 text-left">
                    <p className="text-white text-[42px] font-semibold">Contribute and <br /> start earning</p>
                    <p className="text-white max-w-xs leading-7 font-light opacity-[0.35]" >Start earning by contributing to Solana ecosytem projects or apply for a Grant and start your own!</p>
                    <button className="bg-[#4d30ff] w-full text-white text-lg font-semibold rounded-[5px] py-[10px] ">Start Earning</button>
                </div>
            </div>
        </section>
    </div>;
}

export default ThirdSection;
