import { useState,useEffect } from "react";
const User = (props) => {
    const [count,setCount] = useState(0);
    const {name,location,contact} = props;
    useEffect(() => {
    //console.log("use effect render");
    const timer = setInterval(()=>{
        console.log("Interval started useEffect..");
    },1000);
    
    return()=>{
        clearInterval(timer);
        console.log("Interval end");
    }

    },[]);
    return(
        <div className="m-4 p-4 w-64 rounded-md bg-white-200
        shadow-lg hover:bg-gray-300 ">
            {/* <h1>Count= {count}</h1>
            <button onClick={()=>{setCount(count+1)}}>Increase</button> */}
            <h2 className="text-gray-700 mt-2">Name:{name}</h2>
            <h3>Location:{location}</h3>
            <h3>Contact:{contact}</h3>
        </div>
    );
};

export default User;