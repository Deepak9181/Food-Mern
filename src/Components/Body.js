import { useEffect, useState } from "react";
import Card from "./Card";
import Carousal from "./Carousal";

const Body = () => {
  const [cardinfo, setcardinfo] = useState([]);
  const [cardcat, setcardcat] = useState([]);

  const loadData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/fooddata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();
      setcardinfo(json.data[0]);
      setcardcat(json.data[1]);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if (!cardinfo.length || !cardcat.length) {
    return <h1>Loading...</h1>;
  }
  // console.log(cardinfo);
  // console.log(cardcat);

  return (
    <div className="Body">
      <div>
        <Carousal />
      </div>
      <div className="Body-container py-6 px-20">
        <h1 className="text-4xl font-semibold font-sans italic text-black/85">
          Today's Top Choice
        </h1>
      </div>

      <div>
        <div className="px-20 my-6 mx-2">
          {cardcat.map((data) => {
            return (
              <div className=" font-medium " key={data._id}>
                <div className="text-3xl italic text-black/70">{data.CategoryName}</div>

                <hr className="border-1 border-black/50 my-4" />
                <div className="food-card flex flex-wrap">
                  {cardinfo
                    .filter((ele) => ele.CategoryName === data.CategoryName)
                    .map((ele) =><Card key={ele._id} data={ele}/>)
                  }
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
