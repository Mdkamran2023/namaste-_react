// import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  // const params= useParams();
  // console.log(params);

  const { resId } = useParams();

  const resInfo =useRestaurantMenu(resId);
  // what we have done "it gives us resInfo" ,we don't have worry about fetch data logic
  // it just have to display it now, it doesn't have to manage its own state
  // how to get data is abstracted

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);
  //   const json = await data.json();
  //   // console.log(json);
  //   setResInfo(json.data);
  // };

  if (resInfo === null) {
    return <Shimmer />;
  }
console.log(resInfo);
  const {name,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);

  return (
    <div className="menu text-center bg-gray-200">
      <h1 className="font-bold text-2xl"> {name} </h1>
      <h3 className="text-2xl">{costForTwoMessage}</h3>
      <h2 className="text-2xl">{resInfo?.cards[0]?.card?.card?.info?.cuisines.join(",")}</h2>
      <h3 className="text-4xl mb-4">Provender Card</h3>
      <ul>
       { itemCards.map((item) => (
          <div className=" w-[60%] flex justify-between mb-4 mx-auto">
            <li className="my-auto" key={item.card.info.id}>
              {item.card.info.name} -{"Rs."} {item.card.info.price / 100}
            </li>
            <hr></hr>
            <div className="relative">
            <img className="w-32 rounded-md"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/${item.card.info.imageId}`}
                alt={item.card.info.name}
              >
            </img> 
            <button className="absolute bottom-[-10px] left-1/2 -translate-x-1/2  transform bg-gray-500 text-white py-0.5 px-2 rounded-md cursor-pointer">Add</button>
            {/*   */}
            </div>
          </div>
        ))}
        {/* <li>{itemCards[0].card.info.name}</li> */}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
