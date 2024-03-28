import React from 'react';
import { useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantPage from '../utils/useRestaurantPage';
import RestaurantCategory from './RestuarantCategory';


const RestaurantPage = () => {

    

    const {resId} = useParams();
   
    const resInfo = useRestaurantPage(resId);

   const [showIndex,setshowIndex] = useState(null);

    if (resInfo===null) return <Shimmer/>

    const{name,cuisines} = resInfo?.cards[2]?.card?.card?.info;
    
    //const{itemCards} = resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c=>c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    

    return(
            <div className="menu text-center">
                <h1 className=' font-bold my-6 text-2xl'>{name}</h1>
                <h3 className='font-bold text-lg'>{cuisines.join(',')}</h3>
                {categories.map((category,index)=>(
                    <RestaurantCategory key={category.card.card.title} data={category?.card?.card} showItems={index === showIndex && true}  setshowIndex={()=>setshowIndex(index)}/>
                ))}     
            </div>
    )
}


export default RestaurantPage;