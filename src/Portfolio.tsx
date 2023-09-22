/*@ts-ignore*/
import monkey from "./photos/monkey.png";
/*@ts-ignore*/
import second from "./photos/second.png";
/*@ts-ignore*/
import third from "./photos/three.png";
/*@ts-ignore*/
import fourth from "./photos/four.png";
/*@ts-ignore*/
import fiveAndSix from "./photos/five&six.png";
/*@ts-ignore*/
import seven from "./photos/seven.png";
/*@ts-ignore*/
import eight from "./photos/eight.png";
/*@ts-ignore*/
import Card from "./Card";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

type Props = {};

function Portfolio({}: Props) {
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 600,
      once: true,
    });
  }, []);
  const cards = [
    {
      imageSrc: monkey,
      text: "re:soft",
      bigText:
        "Software development shop that serves the needs of re:invent startups, offering a wide range of technologies including Angular, VueJs, ReactJs, Php, NodeJs, C++, C#, Java, React Native.",
    },
    {
      imageSrc: second,
      text: "re:educate",
      bigText:
        "Tech education space that teaches software and product development at scale. re:invent uses re:educate as its main talent sourcing channel technologies: NodeJS,Mongodb,React JSweb: reeducate.space",
    },
    {
      imageSrc: third,
      text: "re:crypt",
      bigText:
        "This is the largest crypto fund based in Georgia that makes investments in the blockchain related projects and educates public about basic investment concepts. This fund was established in collaboration with the University of Georgia.",
    },
    {
      imageSrc: fourth,
      text: "Meta Nemesis",
      bigText:
        "Building first person play-2-earn shooter game. The team recently been accepted by ChainLink Labs' accelerator.technologies: Unreal Engine 5 , Solidity, Binance smart chain, Nextjs, node js, react js,web3js, Firebaseweb: metanemesis.io",
    },
    {
      imageSrc: fiveAndSix,
      text: "Geparts",
      bigText:
        "New and used car parts ecommerce. G-Parts aggregates multiple merchant databases and provides customers with one-stop-shop experience including part delivery technologies: Php(laravel), VueJs Python(chatbot)",
    },
    {
      imageSrc: seven,
      text: "Tasteit",
      bigText:
        "Gaming studio working on a strategic game as well as selling game development servicestechnologies: Unreal Engine, Maya,  Substance Painter, Marvelous Designer, Blender, Marmoset Toolbag",
    },
    {
      imageSrc: fiveAndSix,
      text: "Evon Gaming Studio",
      bigText:
        "First food and beverages' social network for gourmet dating. Restaurants create profiles for their specials and people with similar taste gather around that dish/drink",
    },
    {
      imageSrc: eight,
      text: "Feelbd",
      bigText:
        "Movie ranking website that enables customers to sort movies based on the emotions they desire to get after watching a movietechnologies: Php(Laravel), React JS",
    },
  ];

  return (
    <div id="startups" className="bg-black pb-20">
      <div className="flex justify-center pr-5 pt-14 text-[32px] text-center">
        <h1
          data-aos="fade-zoom-in"
          className="text-white font-[Montserrat]"
        >
          re:invent's portfolio
        </h1>
      </div>
      <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 cursor-pointer">
        {cards.map((card, index) => (
          <div key={index} className="w-full">
            <Card
              imageSrc={card.imageSrc}
              text={card.text}
              bigText={card.bigText}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
