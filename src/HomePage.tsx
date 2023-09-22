/* @ts-ignore */
import zebra from "./photos/zebra.png";
/* @ts-ignore */
import quotes from "./photos/quotes.png";
import { useEffect } from "react";
/* @ts-ignore */
import AOS from "aos";
import "aos/dist/aos.css";

type Props = {};

function HomePage({}: Props) {
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 700,
      once: true,
    });
  }, []);
  return (
    <div id="home" className="pt-24 flex md:flex-row flex-col  md:justify-between  xl:justify-evenly gap-10 md:gap-0 ">
      <div className="flex flex-col mr-auto ml-auto gap-3 md:gap-10 mt-24 2xl:mt-40 2xl:pl-16 ">
        <img
          className="2xl:w-[600px] sm:w-[400px]"
          src="https://uploads-ssl.webflow.com/62d5585bf8cc926daf147dd9/62d55ac8ae8e4b375f683f79_logo.png"
          alt="re:invent"
        />
        <div
          className="text-[#333] text-xl  2xl:text-4xl xl:text-3xl font-[Arial] w-auto max-w-[770px]"
          data-aos="zoom-in"
        >
          <span className=" font-semibold">Here's to the crazy ones,</span> the
          misfits, the rebels, the troublemakers…
        </div>
      </div>
      <div className="flex gap-20 justify-center ">
        <img className="2xl:w-[800px] object-contain" src={zebra} alt="zebra" />
        <img
          className="hidden xl:block xl:mr-14 w-[120px] object-contain"
          src={quotes}
          alt=""
        />
      </div>
    </div>
  );
}

export default HomePage;
