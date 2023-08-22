import { IMG_CDN_Link } from "../Constants";

const FoodItem = ({ name, description, cloudinaryImageId, price }) => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={IMG_CDN_Link + cloudinaryImageId} />
      <h2 className="font-bold text-xl"> {name}</h2>
      <h4>{description}</h4>
      <h3>rupees : {price/100}</h3>
    </div>
  );
};

export default FoodItem;
