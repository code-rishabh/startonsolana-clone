import React from 'react';
import purplebg from "../../assets/images/sec-5-bg.png";
import sponsorsContent from '../../utils/sponsorsData';
import Sponsor from '../cards/FifthsectionCard';

function FifthSection() {

    return (
        <section className="bg-[#4D30FF] my-10 sm:bg-transparent w-full sm:min-h-screen relative flex flex-col items-center py-10 justify-center overflow-hidden">
            <div className=" sm:max-w-[59rem]  z-[1] flex flex-col items-center justify-between " >
                <div className="text-white flex flex-col sm:flex-row items-center gap-4 sm:gap-12 pb-8 border-b-[1px] border-violet-600 ">
                    <p className="text-[42px] font-semibold ">Partners</p>
                    <p className="text-sm font-light leading-5 lg:block hidden">Those who were happy to let us sit on their shoulders and <br /> make starting on Solana a piece of cake for everyone out there.
                    </p>
                    <button className="bg-[#6b6bfa] h-[52px] text-white min-w-[275px] text-lg font-semibold rounded-[5px]  ">Partner With Us</button>
                </div>
                <div className=" h-auto grid grid-cols-1 sm:grid-cols-4 gap-1">
                    {
                        sponsorsContent.map((sponsor, index) => {
                            return <Sponsor sponsorData={sponsor} key={index} />
                        })
                    }

                </div>
            </div>
            <img className="w-full object-scale-down sm:object-fill object-left sm:object-center aspect-video overflow-hidden absolute sm:z-[0] sm:inset-y-0 sm:my-auto sm:w-full h-[485px]" src={purplebg} alt="cool-bg" />
        </section>
    );
}

export default FifthSection;
