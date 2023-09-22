/*@ts-ignore*/
import Taxvi from "./photos/taxvi.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

type Props = {};

function Why({}: Props) {
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 600,
      once: true,
    });
  }, []);
  const gridItems = [
    {
      text: "We negotiate terms w. founders, provide legal framework and help them officially register the business",
    },
    {
      text: "We give startups office space, help them develop tech roadmaps and test their products",
    },
    {
      text: "We prepare startup founders for investor pitching and help them close the seed rounds",
    },
    {
      text: "We invest in startups and provide finance, tax, and accounting services",
    },
    {
      text: "We help startups expand their businesses globally and connect them with VC funds",
    },
    { text: "We help founders to assemble teams and refine ideas" },
  ];

  return (
    <div className="bg-black pt-20" id="why">
      <div className="flex justify-center">
        <h1
          className="text-white text-3xl font-[Montserrat] font-semibold"
          data-aos="fade-zoom-in"
        >
          why re:invent?
        </h1>
      </div>
      <div className="flex flex-col md:flex-row pt-7 max-w-[1600px] xl:max-w-[2000px]">
        <div className="w-[140px] sm:w-[200px] md:w-[300px] 2xl:max-w-[1000px] mr-auto ml-auto pl-5">
          <img src={Taxvi} alt="taxvi" />
        </div>
        <div className="grid grid-cols-2 grid-rows-3 p-1 gap-6 xl:gap-3 ">
          {gridItems.map((item, index) => (
            <div key={index}>
              <p className="text-white font-[Arial] text-center md:text-start xl:w-[400px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Why;
