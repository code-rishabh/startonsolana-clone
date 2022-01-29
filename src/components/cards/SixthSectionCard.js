import React from "react";
import twitter from "../../assets/images/twitter-icon.png";


const TweetCard = ({ tweetData }) => {

    const bodyText =  tweetData?.desc;   
    const prefix = '<span class= "text-transparent bg-clip-text bg-gradient-to-r from-[#DC1FFF] via-[#03E1FF] to-[#00FFA3] font-semibold" >';
    const suffix = '</span>';
    let newBodyText;
    let grabText;
    
    const regex = /(?<![\w@])@([\w@]+(?:[.!][\w@]+)*)/g;
    if (bodyText.includes("@")) {
        grabText = bodyText.replace(regex, function (url) {
            newBodyText = prefix + url + suffix;
            return newBodyText;
        }) 
        console.log(grabText);
    }
    else {
        grabText = bodyText;
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
            <p className=" pb-2 text-sm font-light opacity-[0.68]" dangerouslySetInnerHTML={{__html: `${grabText}`}} >{}</p>
        </div>

    )
}

export default TweetCard;

