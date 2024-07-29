import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem } from "../utils/slice";

const Cart = () => {
  const food = useSelector((state) => state.cart.items);
  console.log(food);

  const dispatch = useDispatch();
  
  const handleitem=(data)=>{
    dispatch(removeItem(data));
  }

  let total=0;
  food.forEach(element => {
    total+=element.price;
  });

  // console.log(total);

  if (!food.length) {
    return (
      <div>
        <div className="flex-grow container mx-auto px-4 py-32 flex flex-col items-center justify-center">
          <svg className="w-24 h-24 text-gray-400 mb-4"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4L7 13zm0 0L6 17h11m0 0H7m4-4h5m2 0l.4 2M5 6h14M9 17a2 2 0 11-4 0 2 2 0 014 0zm11 0a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>
          <p className="text-gray-600 text-xl mb-6 font-bold">
            Your cart is currently empty.
          </p>
          <Link to="/"className="bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 font-bold">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-24 py-28 ">
      <div className="mb-6 text-5xl text-center font-semibold text-black/60 italic border-b pb-4">Your Cart</div>
      <div className="grid grid-cols-5 gap-5 font-bold text-xl text-gray-700 mb-4 sh">
        <div>Product</div>
        <div className="text-center">Quantity</div>
        <div className="text-center">Option</div>
        <div className="text-right">Price</div>
        <div></div>
      </div>
      <div className="space-y-4 ">
        {food.map((data) => (
          <div key={data.id} className="grid grid-cols-6 gap-6 items-center p-4 border rounded-lg shadow-xl hover:border hover:border-black/60 ">
            <div className="font-medium text-lg text-gray-800">{data.name}</div>
            <div className="text-center font-medium text-lg">{data.Qty}</div>
            <div className="text-center font-medium text-lg">{data.Option}</div>
            <div className="text-right font-bold text-red-600">₹{data.price}</div>
            <div className="flex justify-end">
              <img src={data.img} alt={data.name} className="w-16 h-16 object-cover rounded-md" />
            </div>
            <div className="text-right">
            <button className="border-2 border-black/60 hover:bg-red-500 p-2" onClick={()=>{handleitem(data.id)}}>
                &#x2716; {/* Unicode for X (✖) */}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-2xl font-bold text-center text-gray-700 my-2">
          Total: <span className="text-red-600">₹{total}</span>
        </div>
    </div>

  );
  
};

export default Cart;
