import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Pop from "./Pop";
const SignIn = () => {
  const [Info,setInfo]=useState({
    message:"",
    color:""
  });
  const [showitem, setShowitem] = useState(false);

  const [signDetails, setsignDetails] = useState({
    name: "",
    location: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setsignDetails({ ...signDetails, [e.target.name]: e.target.value });
    // console.log({ ...signDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://food-backend-t1fz.onrender.com/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signDetails),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Success:", data);
        setInfo({
          message:data.status,
          color:"#4CAF50"
        });
      } else {
        console.error("Error:", data);
        setInfo({
          message:data.status,
          color:"#DC143C"
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setsignDetails({
      name: "",
      location: "",
      email: "",
      password: "",
    })
    setShowitem(true);
  };

  useEffect(() => {
    if (Info.message) {
      const timer = setTimeout(() => {
        setShowitem(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [Info.message]);


  return (
    <>
    <div className="sign-container flex justify-center items-center h-screen bg-gray-100">
      <form
        className="bg-white p-10 shadow-lg rounded-lg w-96"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Sign In
        </h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-lg font-medium text-gray-700"
          >
            Name
          </label>
          <input
            name="name"
            id="name"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            value={signDetails.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="location"
            className="block text-lg font-medium text-gray-700"
          >
            Location
          </label>
          <input
            name="location"
            id="location"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            value={signDetails.location}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-lg font-medium text-gray-700"
          >
            Email
          </label>
          <input
            name="email"
            id="email"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            value={signDetails.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-lg font-medium text-gray-700"
          >
            Password
          </label>
          <input
            name="password"
            id="password"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            value={signDetails.password}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 text-white p-2 rounded-md w-full font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            type="submit"
          >
            Submit
          </button>
        </div>
        <div className="mt-2 text-center">
          <span className="">Already a User?</span>
          <Link to="/login" className="text-blue-500 font-medium hover:text-blue-700 ml-2">
            Log In
          </Link>
        </div>
      </form>
    </div>
    <div>
      {showitem && <Pop data={Info}/>}
    </div>
    </>
  );
};

export default SignIn;
