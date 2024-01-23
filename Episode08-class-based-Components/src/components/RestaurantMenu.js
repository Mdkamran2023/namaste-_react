import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  // const params= useParams();
  // console.log(params);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    // console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);

  return (
    <div className="menu">
      <h1> {name} </h1>
      <h3>{costForTwoMessage}</h3>
      <h2>{resInfo?.cards[0]?.card?.card?.info?.cuisines.join(",")}</h2>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((item) => (
          <div>
            <li key={item.card.info.id}>
              {item.card.info.name} -{"Rs."} {item.card.info.price / 100}
              <img
                // src={
                //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
                //   item.card.info.imageId
                // }
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/${item.card.info.imageId}`}
                alt={item.card.info.name}
              ></img>
            </li>
          </div>
        ))}
        {/* <li>{itemCards[0].card.info.name}</li> */}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
