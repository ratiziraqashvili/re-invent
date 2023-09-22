import { useState } from "react";

type CardProps = {
  imageSrc: string;
  text: string;
  bigText: any;
};

function Card({ imageSrc, text, bigText }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='relative'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img className='transition duration-500 w-full object-contain' src={imageSrc} alt='' />

      <div
        className={`absolute h-full bottom-0 lg:flex gap-3 flex-col bg-[#464d56] bg-opacity-90 p-5 opacity-0  transition duration-500 hover:opacity-100 hover:-translate-y-0 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="font-[Montserrat] font-bold text-[#4ac2c9] text-[21px]">{text}</h1>
        <p className="text-white text-[12px] font-[Montserrat]">{bigText}</p>
      </div>

      <div
        className={`block lg:hidden absolute bottom-0 bg-opacity-90 bg-[#464d56] w-full transition-opacity ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      >
        <p className='text-white font-[Montserrat] p-2 text-lg'>{text}</p>
      </div>
    </div>
  );
}

export default Card;
