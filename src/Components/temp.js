import { useState } from "react";
import { BsChevronBarLeft, BsChevronBarRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Carousel = () => {
  const Slides = [
    {
      url: "https://plus.unsplash.com/premium_photo-1675279010969-e85bfbd402dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1671547329182-deaf1c94263e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];


  const [currIndex, setcurrIndex] = useState(3);

  const prevSlide =() =>{
    const isLastSlide = currIndex===0;
    const newIndex = isLastSlide ? Slides.length-1 : currIndex-1;
    setcurrIndex(newIndex);
  }

  const nextSlide =()=>{
    const isNextSlide =currIndex===Slides.length-1;
    const newIndex = isNextSlide? 0 : currIndex+1;
    setcurrIndex(newIndex);
  }

  const getSlide =(slideIndex)=>{
    setcurrIndex(slideIndex);
  }
  return (
    <div className="max-w-[1400px] h-[650px] w-full m-auto py-8 px-4 relative group">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${Slides[currIndex].url})`}}
      ></div>

      {/*Left Arrow*/}
      <div onClick={prevSlide} className="hidden group-hover:block absolute top-[45%] -translate-x-0 -translate-y-[-50%] text-white left-5 text-2xl p-2 cursor-pointer rounded-full bg-black/20">
        <BsChevronBarLeft size={40}/>
      </div>

       {/*Right Arrow*/}
       <div onClick={nextSlide} className=" hidden group-hover:block absolute top-[45%] -translate-x-0 -translate-y-[-50%] text-white right-5 text-2xl p-2 cursor-pointer rounded-full bg-black/20">
        <BsChevronBarRight size={40}/>
      </div>

      
      <div className="flex justify-center py-2">
        {Slides.map((slide,slideindex)=>(
            <div key={slideindex} onClick={()=>getSlide(slideindex)} className="text-4xl cursor-pointer relative bottom-[50px] text-black/60"><RxDotFilled/></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
