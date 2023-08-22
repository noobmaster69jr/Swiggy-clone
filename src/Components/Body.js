import { restaurantList } from "../Constants";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState, useContext} from "react";
import Shimmer from "./Shimmer.js"
import {Link} from "react-router-dom"
import {filterData} from "../utils/helper"
import useOnline from "../utils/useOnline"
import UserContext from "../utils/UserContext.js"

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");

  const {user, setUser } = useContext(UserContext)

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

const isOnline = useOnline();
if(!isOnline){
  return <h1>You are offline, check your network connection</h1>
}

  

  //not rendering component, early return
  if(!allRestaurants) return (null);
  // if(allRestaurants.length === 0) return <h1>No Restaurant match your filter!!</h1>
  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container bg-pink-50 p-5 my-5">
        <input
          data-testid="search-input"
          type="text"
          placeholder="search"
          className="search-input"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        ></input>
        <button
          data-testid="search"
          className="m-2 p-2 bg-purple-900 hover:bg-color-300 text-white rounded-md"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <input
          value={user.name}
          onChange={(e) =>
            setUser({
              name: e.target.value,
              email: "new@gmail.com",
            })
          }
        ></input>
      </div>
      <div className="flex flex-wrap" data-testid="res-list">
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
