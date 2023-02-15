import { restaurantList } from "../Constants";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js"
import {Link} from "react-router-dom"
const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");

useEffect(()=>{
    getRestaurants();
}, [searchText])

async function getRestaurants(){
  // Api call
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();
  //optional chaining
  setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
  setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
}

  function filterData(searchText, restaurants) {
    const data = restaurants.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    return data;
  }

  //not rendering component, early return
  if(!allRestaurants) return (null);
  // if(allRestaurants.length === 0) return <h1>No Restaurant match your filter!!</h1>
  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="search"
          className="search-input"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="Restaurant-List">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.data.id}
            key={restaurant.data.id}
          >
            <RestaurantCard {...restaurant.data} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
