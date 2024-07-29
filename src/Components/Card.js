import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/slice";
import Pop from "./Pop";

const Card = ({data}) => {

  let options = data.options[0];
  let optionkey = Object.keys(options);
  let optionval = Object.values(options);
  // console.log(optionval[0]);

  const [showitem, setShowitem] = useState(false);
  const [price,setprice]=useState(optionval[0]);
  const [qty,setqty] = useState(1);
  const[option,setoption]= useState(optionkey[0]);
  const handleprice =()=>{
     return qty*price;
  }

  const items = {
    id:data._id,
    name:data.name,
    img:data.img,
    description:data.description,
    Option:option,
    Qty:qty,
    price:handleprice()
  }

  // console.log(items);

  const dispatch = useDispatch();

  const handlecart=()=>{
    dispatch(addItem(items));
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowitem(false);
    }, 500);

    return () => clearTimeout(timer); // Cleanup the timer
  },[showitem]);


  return (
    <div className="my-10 p-5 mx-8 border max-w-[250px] shadow-xl rounded-md hover:border-gray-500">
      <img className="w-48 h-48 object-cover" src={data.img} alt="Food-Pic"/>
      <h1 className="text-2xl py-3">{data.name}</h1>
      <h3 className="text-base text-black/80  font-serif italic">{data.description}</h3>
      <div className="font-mono py-3 text-base">
        <label>Qty:</label>
        <select className=" border border-black  rounded-sm" onChange={((e)=>{setqty(e.target.value)})}>
          {Array.from({ length: 6 }, (v, i) => {
            return (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            );
          })}
        </select>

        <select
          className="border border-black rounded-sm mx-3"
          onChange={(e) => {
            setprice(optionval[optionkey.indexOf(e.target.value)]);
            setoption(e.target.value);
          }}
          value={option}
        >
          {optionkey.map((opt) => (
            <option value={opt} key={opt}>
              {opt}
            </option>
          ))}
        </select>
    
      </div>
      <label className="font-mono py-4 text-lg font-semibold">Price:</label>
      <span className="text-lg text-red-600 font-bold ">₹{handleprice()}</span>
      <div>
        <button className="border px-6 rounded-full bg-red-600 border-black/70 text-white py-1 my-2" 
        onClick={()=>{handlecart(items);
          setShowitem(true);
        }}>Add to Cart</button>
      </div>
      
      {showitem &&<Pop data={{
        message:"Items added To Cart",
        color:"rgb(74 222 128)"
      }}/>}
    
    </div>
  );
};

export default Card;
