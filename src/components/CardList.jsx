import React from "react";
import Card from './Card';

const CardList = (props)=>{
    let profiles = props.profileList.map(profile=><Card key={profile.id} profile={profile} /> )
    return(
        <div>
            {profiles}
        </div>
    )
};

export default CardList;