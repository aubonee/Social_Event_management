import React from 'react';

const WhyChooseCard = ({detail}) => {
    const { id,  point ,description } = detail || {};
    console.log(detail);
    return (
        <div>
           <h1> {id}</h1>
            <h2>{point}</h2>
           <p>{description }</p>
        </div>
    );
};

export default WhyChooseCard;