import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";  
import { useState } from "react";

const Body = () => { 
  //local state variable = Super powerful variable
  const [listOfRestaurants,setListOfRestaurants] = useState(resList);
  
  
// []===>passing default value
// Normal Js Variable
// let listOfRestaurants=[];

    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn"
           onClick={()=>{
            setListOfRestaurants()
            const filteredList=listOfRestaurants.filter((res)=>res.info.avgRating>4.3) ; 
            // console.log(listOfRestaurants) ;
            // whenever a state variable updates React re-renders the Components
            setListOfRestaurants(filteredList);
           }}
          >Top Rated Restaurants</button>
        </div>
        <div className="res-container">
          {listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };
  export default Body;