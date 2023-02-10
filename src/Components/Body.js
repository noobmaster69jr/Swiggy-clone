import { restaurantList } from "../Constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchText, setsearchText] = useState();
  function filterData(searchText, restaurants) {
    const data = restaurants.filter((restaurant) =>
      restaurant.data.data.name.includes(searchText)
    );
    return data;
  }
  return (
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
            const data = filterData(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="Restaurant-List">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            {...restaurant.data.data}
            key={restaurant.data.data.id}
          />
        ))}
      </div>
    </>
  );
};

export default Body;
