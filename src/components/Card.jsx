import React from "react";

const Card = ({profile})=>{
    return(
        <div>
            <p>{profile.name}</p>
            <img src={profile.avatar_url} alt=""/>
        </div>
    )
};

export default Card;