import React from 'react';
import tweetData from '../../utils/tweetData';
import TweetCard from '../cards/SixthSectionCard';

function SixthSection() {

    return <div>
        <section className="min-h-screen flex flex-col items-center">
            <div className="text-white sm:max-w-[58rem] flex flex-col items-center w-full ">
                <p className=" mb-3  text-3xl font-semibold">Wall of Love</p>
                <p className="w-[85%] mb-14 md:max-w-[45ch] text-center text-sm opacity-[0.35]">Developers across world love our Quests. Hear it directly from them.</p>
                <div className=" flex mx-4 md:flex-row flex-col gap-4 ">
                    <div className="flex flex-col w-full sm:flex-[0.33] gap-4">
                        <TweetCard tweetData={tweetData[0]} />
                        <TweetCard tweetData={tweetData[1]} />
                    </div>
                    <div className="flex flex-col w-full sm:flex-[0.33] gap-4">
                        <TweetCard tweetData={tweetData[2]} />
                        <TweetCard tweetData={tweetData[3]} />
                        <TweetCard tweetData={tweetData[4]} />
                    </div>
                    <div className="flex flex-col w-full sm:flex-[0.33] gap-4">
                        <TweetCard tweetData={tweetData[5]} />
                        <TweetCard tweetData={tweetData[6]} />
                    </div>

                    {/* we would've used mapping if we have used grid system instead */}
                    {/* {
                    tweetData.map((tweet, index) => {
                    return <TweetCard tweetData={tweet} key={index} />
                }) 
            }            */}
                </div>
            </div>
        </section>
    </div>;
}

export default SixthSection;
