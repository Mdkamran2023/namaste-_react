import {CDN_URL} from "../utils/constants"; 

const RestaurantCard = (props) => {
    // const{image,resData}=props;
    const { resData } = props;
    // console.log(props);
    const { name, cuisines, avgRating, costForTwo, sla } = resData?.info;
    return (
      <>
     
       <div className="flex flex-row">
        <div 
        // style={{ backgroundColor: "#f0f0fa" }} 
        className="res-card m-4 p-4 w-[250px] rounded-lg hover:scale-[1.08] bg-slate-100 hover:bg-slate-200 overflow-hidden">
          <img
            className="res-logo rounded-lg"
            // style={{ padding: "0", margin: "0" }}
            src={CDN_URL   +
              resData.info.cloudinaryImageId
            }
          ></img>
          <h3 className="font-bold py-2 text-lg">{name}</h3>
          <h4 className="whitespace-initial">{cuisines.join(",")} </h4>
          <h4>{avgRating} stars</h4>
          <div
            className="cost-del flex justify-between"
            // style={{
            //   display: "flex",
            //   justifyContent: "space-between",
            //   paddingInline: "3px",
            // }}
          >
            <span>{costForTwo}</span>
            <span>ETA:{sla.deliveryTime} minutes</span>
          </div>
        </div>
        </div>
      </>
    );
  };

  export default RestaurantCard;