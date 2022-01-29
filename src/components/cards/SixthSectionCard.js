import React from "react";

import twitter from "../../assets/images/twitter-icon.png";

const regex = /^(?<![\w@])@([\w@]+(?:[.!][\w@]+)*)/;

const TweetCard = ({ tweetData }) => {

    const bodyText =  tweetData?.desc;

    // if (bodyText.match(regex)) {
    //     console.log("matched");
    // } else {
    //     console.log("nope");
    // }
    let m;

    while ((m = regex.exec(bodyText)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        
        // The result can be accessed through the `m`-variable.
        m.forEach((match, groupIndex) => {
            console.log(`Found match, group ${groupIndex}: ${match}`);
        });
    }

    return (
        <div className="flex flex-col gap-2 p-4 w-full sm:max-w-[300px] rounded-xl bg-[#1f3147] overflow-hidden">
            <div className="flex flex-row justify-between items-center">
                <div className="flex felx-row gap-4" >
                    <img className=" rounded-full w-10 h-10" src={tweetData.profileImg} alt="profile-pic" />
                    <div>
                        <p className="text-sm">{tweetData.name}</p>
                        <p className=" text-xs font-light opacity-[0.68]">{tweetData.username}</p>
                    </div>
                </div>
                <img className=" rounded-sm w-[26px] h-[26px]" src={twitter} alt="twitter-icon" />
            </div>
            <p className=" pb-2 text-sm font-light opacity-[0.68]" dangerouslySetInnerHTML={{ __html: `${tweetData.desc}` }} >{}</p>
        </div>

    )
}

export default TweetCard;

