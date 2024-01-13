import {CDN_URL} from "../utils/constants"; 

const RestaurantCard = (props) => {
    // const{image,resData}=props;
    const { resData } = props;
    // console.log(props);
    const { name, cuisines, avgRating, costForTwo, sla } = resData?.info;
    return (
      <>
        <div className="res-card" style={{ backgroundColor: "#f0f0fa" }}>
          <img
            className="res-logo"
            style={{ padding: "0", margin: "0" }}
            src={CDN_URL   +
              resData.info.cloudinaryImageId
            }
          ></img>
          <h3>{name}</h3>
          <h4>{cuisines.join(",")} </h4>
          <h4>{avgRating} stars</h4>
          <div
            className="cost-del"
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingInline: "3px",
            }}
          >
            <span>{costForTwo}</span>
            <span>ETA:{sla.deliveryTime} minutes</span>
          </div>
        </div>
      </>
    );
  };

  export default RestaurantCard;