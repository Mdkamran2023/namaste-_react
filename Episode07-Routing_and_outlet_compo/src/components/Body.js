 import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";

const Body = () => {
  //local state variable = Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurants,setFilteredRestaurants]=useState([]);

  const [searchText, setSearchText] = useState("");

  console.log("body rendered",filteredRestaurants);
  // whenever state variables update ,react triggers a reconcilation cycle (re-renders the Component)

  // []===>passing default value
  // Normal Js Variable
  // let listOfRestaurants=[];

  useEffect(() => {
    // console.log("useEffect Called");
    fetchData();
  }, []);
  const fetchData = async () => {
    // https://corsproxy.io/?
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json);
    // optional chaining
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  };

  // Coditional Rendereing
  // if(listOfRestaurants.length == 0){
  //   return < Shimmer/>;
  // }

  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              // React don't have track of normal JS variables
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              // onClick filter the restaurant cards and update the UI
              console.log(searchText);
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            // setListOfRestaurants();
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4.3
            );
            // console.log(listOfRestaurants) ;
            // whenever a state variable updates React re-renders the Components
             console.log(filteredList) ;
            setFilteredRestaurants(filteredList);
          
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
        <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>  <RestaurantCard  resData={restaurant} />
        </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
