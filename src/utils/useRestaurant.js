import {useEffect, useState} from "react";
import { MENU_API } from "./constants";
const useRestaurant = (resId) =>{
    const [restaurantMenuInfo,setRestaurantMenuInfo] = useState(null);
    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        setRestaurantMenuInfo(json.data);
    };

    return restaurantMenuInfo;
};

export default useRestaurant;