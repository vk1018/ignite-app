import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu=()=>{
    
    const {resId}=useParams();
    const resInfo=useRestaurantMenu(resId)
    
    
    if(resInfo===null) return <Shimmer/>;

    const{name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;
    const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card;
    console.log(itemCards);

    return (
        <div>
            <h1>{name}</h1>
            <p>{cuisines.join(",")} - {costForTwoMessage}</p>
            <ul>
            {itemCards.map((item)=>(
                    <li key={item.card.info.id}>{item.card.info.name} - {item.card.info.price/100}</li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;