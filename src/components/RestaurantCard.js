import { CDN_URL } from "../utils/constants";
const RestaurantCard=(props)=>{
    
    const {resData}=props;
    console.log(resData)
    
    return(
        <div className="res-card">
            <img src={CDN_URL+resData.cloudinaryImageId} className="logo" alt="logo"/>
            <h1 className="card-heading">{resData.name}</h1>
            
            <h1 className="cusine">{resData.avgRating}</h1>
            <h1 className="cusine">{resData.costForTwo}</h1>
            
            
        </div>
    );
};

export default RestaurantCard;