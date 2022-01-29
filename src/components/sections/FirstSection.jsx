import React, { useState, useRef, useEffect } from 'react';
import questbook from "../../assets/images/questbook-logo.svg";
import superteam from "../../assets/images/superteam.png";
import firstbg from "../../assets/images/first-bg.png";
import soltag from "../../assets/images/solana.svg";
import one from "../../assets/images/bg-bg.png";
import useComponentVisible from '../../hooks/useOutSideAlert.js'


function FirstSection() {

    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

    // const { ref: ref1, isComponentVisible: icv, setIsComponentVisible: sicv } = useComponentVisible(false);

    const handleOnClick = () => {
        setIsComponentVisible(prev => !prev)
        // sicv(prev => !prev)
    }


    return (
        <section className="flex flex-col w-full min-h-screen items-center relative overflow-hidden">
            {/* NAV */}

            <div ref={ref} className={`h-[280px] w-full z-[1000] absolute top-0 transition-all duration-300 flex flex-col ease-in-out ${isComponentVisible ? 'translate-y-[0%]' : 'translate-y-[-100%]'}`}>
                <div className='relative w-full h-full'>

                    <div className={`w-full h-[280px] blur-2xl skew-y-[172deg] opacity-70 bg-gradient-to-r from-[#DC1FFF] via-[#03E1FF] to-[#00FFA3] absolute top-0 right-0 z-[900] flex flex-col items-center py-10 px-4 gap-4 ${isComponentVisible ? '' : 'hidden'} `}>
                    </div>
                    <div style={{ clipPath: 'polygon(0% 0%, 0% 100%, 100% 85%, 100% 0px)' }} className={`w-full h-[280px] bg-[#182433] border-white/10 absolute top-0 right-0 z-[1000] flex flex-col items-center py-10 px-4 gap-4 transition-all duration-300 ease-in-out `}>
                        <p className="uppercase text-sm text-white/40">quests</p>
                        <p className="uppercase text-sm text-white/40">hire</p>
                        <p className="uppercase text-sm text-white/40">solana</p>
                        <button className=" text-white text-sm border-[1.99px] border-[#4400ff] rounded-[3px] py-[9px] w-full uppercase">join discord</button>
                    </div>
                    <div className=' top-4 right-3 absolute z-[1000] p-2' onClick={handleOnClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill="rgba(255,255,255,1)" /></svg>
                    </div>
                </div>
            </div>


            <div className="w-full flex items-center justify-center">
                <div className=" px-4 sm:px-0 w-full h-20 flex items-center z-[1] justify-between sm:max-w-[59rem]">
                    <div className="flex gap-2 
                    items-center">
                        <img className="sm:px-5 md:px-1 h-[54px] sm:h-[58px] py-[18px]" src={questbook} alt="questbook" />
                        <p className="text-[#fffbfb] text-[18px] opacity-[0.52] " > x </p>
                        <img className=" h-[57px] sm:h-[58px] pt-[24px] pb-[20px]" src={superteam} alt="superteam" />
                    </div>
                    <div className="md:flex hidden text-[14px] text-[#ffffff]/50  items-center gap-10">
                        <p className="uppercase">quests</p>
                        <p className="uppercase">hire</p>
                        <p className="uppercase">solana</p>
                        <button className=" text-white border-[1.99px] border-[#4400ff] rounded-[3px] py-[9px] px-[56px] uppercase">join discord</button>
                    </div>
                        <div className=' md:hidden sm:p-4' onClick={handleOnClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" fill="rgba(255,255,255,1)" />
                            </svg>
                        </div>
                </div>
            </div>

            <img className="absolute w-full h-full inset-0 z-[0] object-cover object-left-bottom sm:object-top" src={firstbg} alt="cool-bg" />

            <div className=" lg:w-[100%] px-5 sm:px-0 flex flex-col-reverse sm:flex-row h-full mx-auto items-center sm:max-w-[59rem]">
                <div className="text-white lg:pt-24 sm:pt-14 sm:px-5  flex flex-col z-[1] mt-4 mb-20">
                    <p className="text-3xl lg:text-5xl sm:text-4xl inline-block font-semibold">Start building <br />
                        <span className="  flex items-center">on <img className="sm:pt-[27px] py-[27px] pl-2 h-20 sm:py-6" src={soltag} alt="SOLANA" /> </span>  </p>
                    <div className="text-[#ffffff] opacity-[0.35] max-w-sm leading-loose my-2">
                        <p>Learn how to build on the world's fastest blockchain and start contributing to ecosystem projects right away!</p>
                    </div> <br />
                    <button className="text-lg font-semibold bg-[#4d30ff] w-full rounded-[5px] py-[10px] px-[40px]">Start Now</button>
                </div>
                {/* <div className="z-10 sm:absolute flex w-[70vw] sm:w-[50vw] sm:right-0 sm:inset-y-0" > */}
                    <div className="z-10 lg:absolute flex w-[70vw] lg:w-[50vw] lg:right-0 lg:inset-y-0" >
                    <img className='w-full h-full' src={one} alt="super-cool-img" />
                    </div>
                
            </div>
        </section>
    );
}

export default FirstSection;
