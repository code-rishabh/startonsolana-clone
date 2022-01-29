import React from 'react';
import questbook from "../../assets/images/questbook-logo.svg";
import superteam from "../../assets/images/superteam.png";

function Footer() {
    return (
        <footer className="pb-20 pt-32 flex flex-col items-center w-full">

            <div className="sm:max-w-[58rem] w-full flex flex-col px-10 lg:px-0 md:grid md:grid-cols-4 gap-11 text-white ">
                <div className="flex flex-col gap-5 ">
                    <img className="h-[23px] w-[124px]" src={questbook} alt="questbook" />
                    <img className="h-[20px] w-[120px]" src={superteam} alt="superteam" />
                </div>
                <div className="flex flex-col text-[14px] justify-self-end gap-2">
                    <p className="font-semibold mb-3">Learn Solana</p>
                    <p className=" font-light opacity-[0.34]">Introduction to Rust</p>
                    <p className=" font-light opacity-[0.34]">Create an Airdrop Program</p>
                    <p className=" font-light opacity-[0.34]">Create a Roulette Game</p>
                    <p className=" font-light opacity-[0.34]">See all Quests</p>
                </div>
                <div className="  flex flex-col text-[14px] justify-self-end gap-2">
                    <p className="font-semibold mb-3">Partners</p>
                    <p className=" font-light opacity-[0.34]">Solana</p>
                    <p className=" font-light opacity-[0.34]">Questbook</p>
                    <p className=" font-light opacity-[0.34]">Superteam DAO</p>
                </div>
                <div className="flex flex-col text-[14px] justify-self-end gap-2">
                    <p className="font-semibold mb-3">Apply Now!</p>
                    <p className=" font-light opacity-[0.34]">Grants</p>
                    <p className=" font-light opacity-[0.34]">Bounties</p>
                    <p className=" font-light opacity-[0.34]">Jobs</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
