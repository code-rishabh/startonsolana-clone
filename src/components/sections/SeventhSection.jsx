import React from 'react';
import golsolana from "../../assets/images/gol_solana.png";
import plant from "../../assets/images/Plant.png";
import devs from "../../assets/images/devs.png";
import leaf from "../../assets/images/leaf.png";
import codeBlock from "../../assets/images/code-block.png";

function SeventhSection() {
    return <div>
        <section className=" flex flex-col min-h-screen py-10">
            <div className="sm:max-w-[58rem] w-full h-max flex flex-col sm:flex-row items-center m-auto">

                <div className=" flex flex-col  lg:flex-row gap-6 items-center relative w-full ">

                    <div className="bg-[#172332] flex flex-col justify-between min-h-[345px] py-6 px-8 rounded-[4px] w-[95%] lg:max-w-[474px] text-white">
                        <div className="flex flex-col gap-5">
                            <div className="flex justify-between">
                                <img src={codeBlock} alt="code-block" />
                                <img className="h-12" src={devs} alt="devs" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className=" font-semibold text-2xl">Hire the best Solana devs
                                </p>
                                <p className=" leading-7 w-full sm:w-96 font-light text-base opacity-[0.35]">
                                    Looking for devs? List your opportunities and get connected to the best Solana developers completing the quests.
                                </p>
                            </div>
                        </div>
                        <button className="bg-[#4d30ff] max-w-full py-[10px] font-semibold px-10 rounded-[5px]">List Your open Opportunities</button>
                    </div>
                    <img className="absolute hidden lg:block -left-[46px] -bottom-[6px] " src={plant} alt="plant" />

                    <div className="bg-[#172332] flex flex-col justify-between min-h-[345px] py-6 px-8 rounded-[4px] w-[95%] lg:max-w-[474px] text-white">
                        <div className="flex flex-col gap-5">
                            <div className="flex justify-between">
                                <img src={golsolana} alt="gol-solana" />
                                <img className=" w-16 h-[60px] " src={leaf} alt="leaf" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className=" font-semibold text-2xl">Are you a Solana Developer?
                                </p>
                                <p className=" leading-7 w-full sm:w-96 font-light text-base opacity-[0.35]">
                                    Browse the top opportunities listed and get involved with Solana Ecosystem Projects right away!
                                </p>
                            </div>
                        </div>
                        <button className="bg-[#4d30ff] max-w-full py-[10px] font-semibold px-10 rounded-[5px]">See Opportunities</button>
                    </div>

                </div>

            </div>

        </section>
    </div>;
}

export default SeventhSection;
