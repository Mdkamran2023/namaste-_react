import { CDN_URL } from "../utils/constants.js";

const ItemList = ({ items ,dummy }) => {
console.log(dummy);
  // console.log(items);
  return (
    <div className="">
      {items.map((item) => (
        //           <div className="p-2 m-2 border border-b-4 flex flex-row-reverse justify-between max-lg:flex-col" key={item.card.info.id}>
        //     <div className="relative flex-shrink-0">
        //         <img className="w-32 h-24 rounded-md max-lg:mx-auto " src={CDN_URL+item.card.info.imageId} alt={item.card.info.name} />
        //         <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-200 text-black py-1 px-4 rounded-md cursor-pointer">Add</button>
        //     </div>
        //     <div className="flex-grow text-left p-2">
        //         <span className="block font-semibold">{item.card.info.name}</span>
        //         <span className="block text-gray-600">{"₹"}{item.card.info.defaultPrice ? item.card.info.defaultPrice / 100 : item.card.info.price / 100}</span>
        //         <p className="text-sm">{item.card.info.description}</p>
        //     </div>
        // </div>
        <div
          className="p-2 m-2 border border-b-4 flex md:flex-row-reverse justify-between roundded-lg "
          key={item.card.info.id}
        >
          <div className=" w-3/12 relative flex-shrink-0 md:w-auto md:mr-0 md:ml-4">
            <img
              className="w-32 h-24 rounded-md"
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
            />
            <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-full md:static md:translate-x-0 md:translate-y-0 bg-gray-200 text-black py-1 px-4 rounded-md cursor-pointer">
              Add
            </button>
          </div>
          <div className=" w-9/12 flex-grow text-left p-2">
            <span className="block font-semibold">{item.card.info.name}</span>
            <span className="block text-gray-600">
              {"₹"}
              {item.card.info.defaultPrice
                ? item.card.info.defaultPrice / 100
                : item.card.info.price / 100}
            </span>
            <p className="text-sm">{item.card.info.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
