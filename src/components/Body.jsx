import RestaurantCard,{withPromotedLabel} from "./RestaruantCard";
import { useState,useEffect } from "react";
import React from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {

   

    const [listOfRestaurants,setlistOfRestaurants] = useState([]);
    const [filteredRestaurants,setfilteredRestaurants] = useState([]);
    const [searchText,setsearchText] = useState("");

    const RestaruantCardPromoted = withPromotedLabel(RestaurantCard);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async() => {
        const url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.193391&lng=79.082636&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        const data = await fetch(url);
        const json = await data.json();
        
        setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false)  {return <h1>Looks like you are offline , please check your internet connection</h1>}
    
    return (listOfRestaurants.length===0)? (<Shimmer />) : (
        <div className='body'>
            <div className='filter flex'>
                <div className="search m-4 p-4">
                    <input type="text" className="search-box border border-solid border-black" value={searchText} onChange={(e)=>{setsearchText(e.target.value)}}></input>
                    
                    <button
                        className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                        onClick={()=>{
                            const filteredRestaurants = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setfilteredRestaurants(filteredRestaurants);
                        }}
                        >Search
                    </button>
                    
                    
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <button 
                    className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
                    onClick = {()=>{
                        const filteredList = listOfRestaurants.filter((res)=> res.info.avgRating > 4.5)
                        setlistOfRestaurants(filteredList)
                    }}>        
                    Top Rated Restaurants</button>
                </div>
            </div>


            <div className='res-container flex flex-wrap'>
                {
                    filteredRestaurants.map((restaurant)=>{
                        return <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}>
                                {restaurant.info.promoted? <RestaruantCardPromoted resData={restaurant}/> : <RestaurantCard resData={restaurant} />}
                               </Link>

                    })
                }
            </div>
        </div>
    )
}

export default Body;