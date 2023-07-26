import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { MENU_API_ALL } from "../utils/constants/";

const Search = () => {
const [listOfRestaurants, setListOfRestaurants] = useState([]);
const [filteredListRestaurant, setFilteredListRestaurant] = useState([]);
const [searchText, setSearchText] = useState("");

useEffect(() => {
fetchData();
}, []);

const fetchData = async () => {
const data = await fetch(MENU_API_ALL);
const jsonData = await data.json();
setListOfRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
};

const status = useOnlineStatus();

if (status === false) {
return (
<h1>
Looks like you are offline!! Please check your internet connection
</h1>
);
}

useEffect(() => {
handleSearch(); // Update filtered results on search text change
}, [searchText]);

const handleSearch = () => {
if (searchText.trim() === "") {
setFilteredListRestaurant([]);
} else {
const filteredListRestaurant = listOfRestaurants.filter(
(res) =>
res.data.name.toLowerCase().includes(searchText.toLowerCase())
);
setFilteredListRestaurant(filteredListRestaurant);
}
};

return (
<div className="body">
    <div className="filter justify-center m-20">
        <div className="relative w-full flex">
            <input
            type="search"
            id="search-dropdown"
            className="h-12 block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-100 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:border-orange-500"
            placeholder="Search for restaurants and food"
            required
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            />
        </div>
    </div>
    <div className="flex flex-wrap p-20">
        {filteredListRestaurant.length === 0 ? (
        <h1>No results found.</h1>
        ) : (
        filteredListRestaurant.map((restaurant) => (
            <Link
            to={"/restaurant/" + restaurant.data.id}
            key={restaurant.data.id}
            >
            <RestaurantCard resData={restaurant} />
            </Link>
        ))
        )}
    </div>
</div>
);
};

export default Search;