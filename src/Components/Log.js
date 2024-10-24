import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [LoginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginDetails({ ...LoginDetails, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://food-backend-t1fz.onrender/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(LoginDetails),
      });

      const data = await response.json();
      console.log(data);
      if(data.success) {
        localStorage.setItem('token', data.token);
        toast.success("Login successful");
        // console.log(localStorage.getItem('token'));
        navigate("/");
      }
    } 
    catch (error) {
      console.error("Error:", error);
    }
    
    setLoginDetails({
      email: "",
      password: "",
    });
  };

  return (
    <div className="login-container flex justify-center items-center h-screen bg-gray-100">
      <form
        className="bg-white p-10 shadow-lg rounded-lg w-96"
        onSubmit={handleLogin}
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Log In
        </h2>

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
            value={LoginDetails.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
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
            value={LoginDetails.password}
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
      </form>
    </div>
  );
};

export default Login;
