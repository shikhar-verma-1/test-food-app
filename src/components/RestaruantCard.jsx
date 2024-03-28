import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({resData}) =>{
    const{name,cuisines,avgRating,costForTwo,areaName,cloudinaryImageId} = resData?.info;
    return(
        <div className='res-card m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 ' >
           
            <img className="res-logo rounded-lg" alt ="res-logo" src={CDN_URL + cloudinaryImageId}></img>
            <h3 className=" font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{areaName}</h4>

        </div>
    )
}

export const withPromotedLabel = (RestaurantCard) =>{
    return(props)=>{
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;