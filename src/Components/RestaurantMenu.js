import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import {IMG_CDN_Link} from "../Constants"
import Shimmer from "./Shimmer"
import useRestaurant from "../utils/useRestaurant"
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
    const params = useParams();
    const {id} = params
    // const [restaurant, setRestaurant] = useState(null);

    const restaurant = useRestaurant(id)
    
    const dispatch = useDispatch();
    const addFoodItem = (item) => {
        dispatch(addItem(item))
    }
   
    return !restaurant ? (
      <Shimmer />
    ) : (
      <div className="menu flex">
        <div>
          {" "}
          <h2>Restaurant id: {id}</h2>
          <h2>{restaurant.name}</h2>
          <img src={IMG_CDN_Link + restaurant.cloudinaryImageId}></img>
          <h3>{restaurant.area}</h3>
          <h3>{restaurant.city}</h3>
          <h3>{restaurant.avgRating}</h3>
        </div>
        
        <div className="p-5">
          <h3>Menu</h3>
          <ul>
            {Object.values(restaurant?.menu?.items).map((item) => (
              <li key={item.id}>{item.name} <button className="p-2 m-5 bg-slate-200 text-white"
              onClick={()=>addFoodItem(item)}>Add</button></li>
            ))}
          </ul>
        </div>
      </div>
    );
}

export default RestaurantMenu;