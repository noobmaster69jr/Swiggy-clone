import { IMG_CDN_Link } from "../Constants";

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  return (
    <div className="card">
      <img src={IMG_CDN_Link + cloudinaryImageId} />
      <h2>{name}</h2>
      <h4>{avgRating}</h4>
      <h3>{cuisines.join(", ")}</h3>
    </div>
  );
};

export default RestaurantCard