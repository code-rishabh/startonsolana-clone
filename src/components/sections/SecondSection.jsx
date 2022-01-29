import React from 'react';
import cardsContent from '../../utils/cardData';
import valley from "../../assets/images/valley.png";
import jsLogo from "../../assets/images/js-logo.png";
import rust from "../../assets/images/rust-logo.png";
import Card from '../cards/SecondSectionCard.js';

export default function SecondSection() {

    return (

        
        <section className=" items-center w-full min-h-screen bg-[#131e2c] flex flex-col">
            <div className=" flex flex-col gap-6 items-center py-20 sm:max-w-[59rem]">
                <span className=" gap-2 flex">
                    <img className="h-6 w-6" src={valley} alt="super-cool-valley" />
                    <p className="text-white text-3xl font-semibold ">Start with quests</p>
                </span>

                <p className=" w-[35ch] text-center text-[#ffffff] opacity-[0.35] text-sm ">Follow the quests to kickstart your development journey on Solana!</p>

                <div className="text-xs items-center sm:text-base font-semibold py-4 sm:py-2 gap-3 sm:gap-6 px-6 text-white w-full lg:w-auto flex bg-[#182433] sm:rounded-full">
                    <p className='font-bold sm:font-semibold'>LANGUAGES</p>
                    <div className="flex items-center gap-2">

                        <img className="h-6" src={jsLogo} alt="JS" /> <p> Javascript</p>
                    </div>
                    <div className="flex items-center gap-2">

                        <img className="h-6" src={rust} alt="RUST" /> <p> Rust</p>
                    </div>
                </div>

                {/* GRID-START */}
                <div className="grid grid-cols-1  lg:grid-cols-4 gap-4 px-4 mx-auto sm:px-0 ">
                    {
                        cardsContent.map((data, index) => {
                            return <Card key={index} data={data} />
                        })
                    }
                </div>
            </div>
        </section>
    )
    
}
