import React from 'react';

const Sponsor = ({ sponsorData }) => {
    return (
        <div className="py-8 px-3 flex items-center justify-center">
            <img className=" h-6" src={sponsorData.image} alt={sponsorData.alt} />
        </div>
    )
}

export default Sponsor;
