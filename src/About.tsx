import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

type Props = {};

function About({}: Props) {
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 600,
      once: true,
    });
  }, []);
  return (
    <div id="about" className="pb-10">
      <div className="pt-5 pl-2 sm:pt-7 sm:pl-10">
        <p
          className="font-[Montserrat] font-[500] text-[20px] sm:text-[24px]"
          data-aos="fade-zoom-in"
        >
          about us
        </p>
      </div>
      <div className="flex flex-col items-center lg:flex-row">
        <div className="flex justify-center">
          <img
            src="https://uploads-ssl.webflow.com/62d5585bf8cc926daf147dd9/6311e41c7bab4a1d2a1be0ea_333.png"
            alt="frog"
          />
        </div>
        <div className="flex flex-col gap-8 mr-auto ml-auto w-[260px] sm:w-[430px] md:w-[520px] lg:w-auto lg:text-[18px] ">
          <span className="">
            re:invent venture is creating a space where exceptionally talented
            people start, build, and grow tech businesses
          </span>
          <span>
            For this, <b>re:start </b>
            offers A-to-Z services to tech founders, <b>re:soft</b> helps
            startups solve difficult tech challenges, and <b>re:educate</b>{" "}
            teaches coding at scale to become a key talent sourcing agency for{" "}
            <b>re:invent</b>
          </span>
          <span>
            Note: currently we consider ourselves a deal sources for the VC
            funds, until we become one
          </span>
          <span>
            <b>Mission</b> To build mechanisms that build businesses
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
