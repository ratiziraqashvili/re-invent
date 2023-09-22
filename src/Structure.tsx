/* @ts-ignore */
import path from "./photos/path.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

type Props = {};

function Structure({}: Props) {
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 600,
      once: true,
    });
  }, []);
  return (
    <div className="bg-black " id="Structure">
      <div className="flex justify-center">
        <img
          data-aos="fade-zoom-in"
          className="w-[150px] lg:w-[300px] 2xl:w-[400px] pt-10 pb-5"
          src="https://uploads-ssl.webflow.com/62d5585bf8cc926daf147dd9/631efa0e51c4ea6e050bb5d1_reinventholding1.png"
          alt="re:invent"
        />
      </div>
      <div className="flex flex-col  justify-center">
        <img className="" src={path} alt="" />
        <img
          data-aos="zoom-out-right"
          className="w-[60px] md:w-[100px] lg:w-[130px] xl:w-[150px] 2xl:w-[230px] 2xl:left-16 2xl:-top-16 sm:relative left-5 -top-6 md:-top-10"
          src="https://uploads-ssl.webflow.com/62d5585bf8cc926daf147dd9/63d3ce264617e012276acac2_reschool.png"
          alt="re:invent"
        />
        <img
          data-aos="zoom-in-right"
          className="w-[60px] md:w-[100px] lg:w-[130px] xl:w-[150px] 2xl:w-[230px] relative  fixing"
          src="https://uploads-ssl.webflow.com/62d5585bf8cc926daf147dd9/630d1aad2cd697069eb1ebf0_logoresoft.png"
          alt="re:soft"
        />
        <img
          data-aos="zoom-in-right"
          className="w-[60px] md:w-[100px] lg:w-[130px] xl:w-[150px] 2xl:w-[230px] relative fixing2"
          src="https://uploads-ssl.webflow.com/62d5585bf8cc926daf147dd9/62d5932f8cb7f9afbdd3e9b7_Untitled1_page1_image3.png"
          alt="re:start"
        />
        <img
          data-aos="zoom-in-right"
          className="w-[60px] md:w-[100px] lg:w-[130px] xl:w-[150px] 2xl:w-[230px] relative fixing3"
          src="https://uploads-ssl.webflow.com/62d5585bf8cc926daf147dd9/62d5998d3620965a69a07b94_Untitled1_page1_image5.png"
          alt="re:crypto"
        />
      </div>
    </div>
  );
}

export default Structure;
