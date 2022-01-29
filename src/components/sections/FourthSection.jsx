import React from 'react';
import nft from "../../assets/images/sec-4.1.png";
import bounty from "../../assets/images/sec-4.2.png";
import grant from "../../assets/images/sec-4.3.png";
import job from "../../assets/images/sec-4.4.png";
import community from "../../assets/images/sec-4.5.png";

function FourthSection() {
    return <div>
        <section className="w-full flex flex-col items-center bg-[#131e2c]">
            <div className=" lg:max-w-[58rem] w-full flex flex-col px-6 lg:grid lg:grid-cols-12 grid-flow-row gap-4 ">

                <div className="bg-[#1a2c43] flex py-4 px-6 col-span-7 sm:h-[168px] rounded-sm justify-between">
                    <div className=" flex flex-col gap-6 sm:gap-0 justify-between ">
                        <div className="text-white flex flex-col h-auto gap-2" >
                            <p className=" text-2xl sm:text-xl font-semibold ">Quest Completion NFTs</p>
                            <p className="opacity-[0.35] text-base font-light ">Get proof of your skills stored on chain with an NFT forever stored.</p>
                        </div>
                        <p className="uppercase text-sm text-[#9483ff]"> claim now &gt;</p>
                    </div>
                    <img className=" hidden sm:block h-[84px] self-center " src={nft} alt="NFT" />
                </div>

                <div className="bg-[#1a2c43] flex  py-4 px-6 col-span-5 sm:h-[168px] rounded-sm justify-between">
                    <div className=" flex  gap-6 sm:gap-0 flex-col justify-between">
                        <div className="text-white flex flex-col gap-2" >
                            <p className=" text-2xl sm:text-xl font-semibold ">Bounties</p>
                            <p className="opacity-[0.35] text-base font-light ">Earn crypto for solving problems and completing tasks.</p>
                        </div>
                        <p className="uppercase text-sm text-[#9483ff]"> complete now &gt;</p>
                    </div>
                    <img className=" hidden sm:block h-[84px] self-center " src={bounty} alt="NFT" />
                </div>

                <div className="bg-[#1a2c43] flex py-4 px-6 col-span-4 sm:h-[188px] rounded-sm justify-between">
                    <div className=" flex  gap-6 sm:gap-0 flex-col justify-between">
                        <div className="text-white flex flex-col gap-2" >
                            <p className=" text-2xl sm:text-xl font-semibold ">Grants</p>
                            <p className="opacity-[0.35] text-base font-light ">Funding to take your project from idea to reality.</p>
                        </div>
                        <p className="uppercase text-sm text-[#9483ff]"> apply now &gt;</p>
                    </div>
                    <img className=" hidden sm:block h-[84px] self-center " src={grant} alt="NFT" />
                </div>

                <div className="bg-[#1a2c43] flex py-4 px-6 col-span-4 sm:h-[188px] rounded-sm justify-between">
                    <div className=" flex  gap-6 sm:gap-0 flex-col justify-between">
                        <div className="text-white flex flex-col gap-2" >
                            <p className=" text-2xl sm:text-xl font-semibold ">Jobs</p>
                            <p className="opacity-[0.35] text-base font-light ">Join a Solana startup and go full-time web3 if you're ready.</p>
                        </div>
                        <p className="uppercase text-sm text-[#9483ff]"> apply now &gt;</p>
                    </div>
                    <img className=" hidden sm:block h-[84px] self-center " src={job} alt="NFT" />
                </div>

                <div className="bg-[#1a2c43] flex py-4 px-6 col-span-4 sm:h-[188px] rounded-sm justify-between">
                    <div className=" flex  gap-6 sm:gap-0 flex-col justify-between">
                        <div className="text-white flex flex-col gap-2" >
                            <p className=" text-2xl sm:text-xl font-semibold ">Community</p>
                            <p className="opacity-[0.35] text-base font-light ">Chat and learn with the other proven Solana Devs.</p>
                        </div>
                        <p className="uppercase text-sm text-[#9483ff]"> join now &gt;</p>
                    </div>
                    <img className=" hidden sm:block h-[84px] self-center " src={community} alt="NFT" />
                </div>
            </div>
        </section>
    </div>;
}

export default FourthSection;
