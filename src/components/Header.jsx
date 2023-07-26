import {useState,useContext} from "react";
import {Link} from "react-router-dom";
import {LOGO_URL} from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux"

export default Header = () => {
    
    const [btnName,setBtnName] = useState("SignIn");

    const onlinestatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);
    
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    return (
        <div className='flex justify-between shadow-lg'>
            <div>
                <img src={LOGO_URL} className='w-20 mx-auto py-4' alt="Logo" />
            </div>
            <div className='flex items-center'>
                
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        {onlinestatus?"":"Offline"}
                    </li>
                    <li className="px-4 flex items-center cursor-pointer">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 3L2 12h3v8h14v-8h3L12 3zm0 2.414L18.586 10H17v8H7v-8H5.414L12 5.414z" />
                        </svg>
                        <Link to="/">Home</Link>
                    </li>

                    {/* <li className="px-4">
                        <Link to="/about"></Link>
                    </li> */}
                    <li className="px-4 flex items-center cursor-pointer">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M10 3a7 7 0 015.32 11.47l4.74 4.73-1.42 1.42-4.73-4.74A7 7 0 1110 3zm0 2a5 5 0 100 10 5 5 0 000-10z" />
                        </svg>
                        <Link to="/search">Search</Link>
                    </li>

                    <li className="px-4 flex items-center cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm0 14.5c-.69 0-1.25-.56-1.25-1.25S11.31 13 12 13s1.25.56 1.25 1.25S12.69 16.5 12 16.5zm0-9a2.5 2.5 0 0 0-2.5 2.5c0 .2.03.39.08.58l-1.68 1.68a4.469 4.469 0 0 1 6.32 0l-1.68-1.68a2.5 2.5 0 0 0-.82-.58A2.5 2.5 0 0 0 12 7.5zm7.78 8.28l-1.41 1.41a10 10 0 1 1-14.14 0L4.22 16.5A8 8 0 1 0 12 4.02a8 8 0 0 0 7.78 8.28z" />
                    </svg>
                        <Link to="/contact">Contact Us</Link>
                    </li>

                    <li className="px-4 flex items-center cursor-pointer">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M17 3H3a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM3 5h14v8H3V5zm0 2v4h14V7H3zm0 8V9h14v6H3z" clipRule="evenodd" />
                        </svg>
                        <Link to="/instamart">InstaMart</Link>
                    </li>

                    {/* <li className="px-4">Cart</li> */}
                    <li className="px-4 flex items-center cursor-pointer">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8l2 4H6l2-4zm0 0l-2 4h12M6 17h12" />
                        </svg>
                        
                        <Link to="/cart">Cart -({cartItems.length} items)</Link>
                    </li>

                    <button className="" onClick={() => { btnName === "SignIn" ? setBtnName("SignOut") : setBtnName("SignIn")}}>
                    {btnName}
                        {btnName === "SignIn" ? (
                            <svg
                            className="w-4 h-4 ml-1 inline-block"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        ) : (
                            <svg
                            className="w-4 h-4 ml-1 inline-block"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        )}
                    </button>

                    {/* <button 
                        className=""
                        onClick={()=>{
                        btnName==="SignIn"
                        ? setBtnName("SignOut"):
                        setBtnName("SignIn");
                        }}
                    >
                    {btnName}
                    </button> */}
                </ul>
                <span className="p-10 font-bold text-white">Welcome, {loggedInUser}!</span>
            </div>
        </div>
    )
};

//export default Header;