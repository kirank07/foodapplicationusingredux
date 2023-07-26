import RestaurantCard from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { MENU_API_ALL } from "../utils/constants/";
const Body = () => {
    //local state variable - superpowerful variable
    const [listOfRestaurants,setlistOfRestaurants] = useState([]);
    const [filteredListRestaurant,setFilterListRestaurant] = useState([]);
    const [searchText,setSearchText] = useState("");
    const {user,setUser} = useContext(UserContext);
    //console.log(user);
    useEffect(()=>{
        fetchData();
    },[]);

    fetchData = async () => {
        const data = await fetch(MENU_API_ALL);
        const jsonData = await data.json();
        //optional chaining
        setlistOfRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
        setFilterListRestaurant(jsonData?.data?.cards[2]?.data?.data?.cards);
    };

    const status = useOnlineStatus();
    //console.log(status);
    if(status===false){
        return <h1>Looks like you are offline!! Please check your internet connection</h1>;
    }

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className='filter flex justify-center '>
                {/* <div className="search m-4 p-4">
                    <input type="text" className="items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700" placeholder="search" value={searchText}
                        onChange={(e)=>{setSearchText(e.target.value)}}
                    ></input>
                    <button className="m-2 rounded-md px-6 py-2 bg-black text-orange-400 " onClick={()=>{
                        const filteredListRestaurant = listOfRestaurants.filter(
                            (res) => res.data.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilterListRestaurant(filteredListRestaurant);
                    }}>Search</button>
                </div> */}
                <div className="m-4 p-4">
                <button className="m-2 rounded-md px-6 py-2 bg-black text-orange-400" onClick={()=>{
                        const filteredListRestaurant = listOfRestaurants.filter(
                            (res) => res.data.avgRating>4
                        );
                        setFilterListRestaurant(filteredListRestaurant);
                }}>Top Rated Restaurants</button>
                {/* <input type="text" className="items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700"
                value={user.name} onChange={(e)=> setUser({
                    ...user,
                    name:e.target.value,
                })}></input> */}
                </div>
                
            </div>
                <div className='flex flex-wrap'>
                    {
                       filteredListRestaurant.map(restaurant => 
                       <Link to={"/restaurant/"+restaurant.data.id} key={restaurant.data.id}><RestaurantCard resData={restaurant} /></Link>
                       ) 
                    }
                </div>
        </div>
    )
};

export default Body;