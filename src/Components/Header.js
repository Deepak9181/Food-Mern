import React from "react";
import { Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
 
  const navigate =useNavigate();

  const handleclick =()=>{
    localStorage.removeItem("token");
    navigate("/login")
  }

  const food = useSelector((state) => state.cart.items);

  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-5 px-6">
        <div className="flex items-center">
          <span className="text-3xl italic font-bold">Bistro Bliss</span>
        </div>
        <ul className="flex space-x-6 font-serif text-lg ">
          <Link to="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <li className="text-gray-600 hover:text-gray-900">About</li>
          <li className="text-gray-600 hover:text-gray-900">Menu</li>
          <li className="text-gray-600 hover:text-gray-900">Contact</li>
        </ul>
        <div>
          <div className="font-serif text-md font-medium">
            {/* {console.log(localStorage.getItem('token')?"Hello":"bye")} */}
            {localStorage.getItem("token") ? (
              <div>
                <Link to="/cart" className=" bg-green-400 mx-4 border-gray-800 border-2 p-3 rounded-sm text-white font-extrabold ">
                  Cart 
                  {food.length ? <span className="relative bottom-[1px] ml-1 rounded-[90%] font-mono bg-red-500 px-2 py-1 border-2 border-white text-md">{food.length}</span>: " "}
                </Link>
                <button onClick={handleclick} className=" bg-red-500 border-gray-800 border-2 p-2 rounded-sm font-extrabold  text-white">
                  Logout
                </button>
              </div>) 
              : (<div>
                <Link to="/signIn" className="text-black  hover:text-white hover:bg-black/80 mx-4 border-gray-800 border-2 p-2 rounded-md">
                  Sign In
                </Link>
                <Link to="/login"className="text-black hover:text-white hover:bg-black/80 border-gray-800 border-2 p-2 rounded-md">
                  Log In
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
