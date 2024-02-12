import RestaurantCard from "./RestaurantCard";

import { useEffect, useState } from "react";

import Shimmer from "./Shimmer";
import { Link } from "react-router-dom/dist";
import useOnlineStatus from "../utils/useOnlineStatus";
 


const Body=()=>{
    const[listOfRestaurants,setListOfRestaurants]=useState([]);
    const[filteredRestaurants,setFilteredRestaurants]=useState([]);
    const[searchText,setSearchText]=useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData= async()=>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4488706&lng=78.3639563&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const jsonData = await data.json();

        console.log(jsonData);
       //optional chaining
       
       const resList =jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
       setListOfRestaurants(resList);
       setFilteredRestaurants(resList);
  }

   // conditional rendering

   const onlineStatus=useOnlineStatus();
   if(onlineStatus===false)
   
    return(
        <h1>Looks like you are offline!!Please check your internet connection </h1>
    );
   

    return listOfRestaurants.length===0 ?<Shimmer/>:(<div className="body">
    <div className="filter">

        <div className="search">
            <input type="search" className="search-box" 
            value={searchText} 
            onChange={(e)=>{
             setSearchText(e.target.value);
            }}/>
            <button className="search-btn" 
            onClick={()=>{
            const filterdRestaurantsList=listOfRestaurants.filter(res=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRestaurants(filterdRestaurantsList);
            }}>search</button>
        </div>

        <button className="filter-btn" onClick={()=>{
          const filteredList=listOfRestaurants.filter(res=>res.avgRating>4);
          setListOfRestaurants(filteredList);
        }}>Top Rated </button>
    </div>

    <div className="res-container">
        {filteredRestaurants.map(restaurant=>
            (<Link  key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
            <RestaurantCard resData={restaurant.info}/>
            </Link>)
            )}
    </div>
</div>)
};

export default Body;