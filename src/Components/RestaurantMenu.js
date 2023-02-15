import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import {IMG_CDN_Link} from "../Constants"
import Shimmer from "./Shimmer"

const RestaurantMenu = () => {
    const params = useParams();
    const {id} = params
    const [restaurant, setRestaurant] = useState(null);
    
    useEffect(()=>{
        getRestaurantInfo()
    }, [])

    async function getRestaurantInfo(){
        const data = await fetch(
          "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9715987&lng=77.5945627&menuId=" + id
        );
        const json = await data.json();
        console.log(json.data)
        setRestaurant(json.data)
    }
    return !restaurant ? (
      <Shimmer />
    ) : (
      <div className="menu">
        <div>
          {" "}
          <h2>Restaurant id: {id}</h2>
          <h2>{restaurant.name}</h2>
          <img src={IMG_CDN_Link + restaurant.cloudinaryImageId}></img>
          <h3>{restaurant.area}</h3>
          <h3>{restaurant.city}</h3>
          <h3>{restaurant.avgRating}</h3>
        </div>
        <div>
          <h3>Menu</h3>
          <ul>
            {Object.values(restaurant?.menu?.items).map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
}

export default RestaurantMenu;