/*@ts-ignore*/
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SetStateAction, useState } from "react";

const quotes = [
  {
    text: (
      <>
        <strong>Think Big -</strong> Both small and big things require hard work
        if you want to deliver the results. We chose to work on things that are
        hard to implement, but are worth living for.
      </>
    ),
  },
  {
    text: (
      <>
        <strong>Be Frugal -</strong> We believe that starvation drives
        resourcefulness and innovation. Hence, we always try to achieve more
        with less. Remember to - “stay hungry, stay foolish - Steve”
      </>
    ),
  },
  {
    text: (
      <>
        <strong>Be Obsessed -</strong> We love people who are obsessed. Building
        things is hard and the only ones who survive the hardship are the people
        who are obsessed with their ideas.
      </>
    ),
  },
  {
    text: (
      <>
        <strong>Be Open-Minded -</strong> Things change crazy fast these days
        and the only way to survive is to have a flexible mind. Don’t be afraid
        to change your mind if you have enough data and evidence. Be stubborn on
        your vision and flexible on the details.
      </>
    ),
  },
  {
    text: (
      <>
        <strong>Work Hard -</strong> Working smart but not hard was enough in
        the 18th century. Today, we must do both. Nothing meaningful has been
        created without the hard work.
      </>
    ),
  },
  {
    text: (
      <>
        <strong>Have Fun -</strong> There are 100 billion galaxies in the
        universe and 10^10^10^7 universes out there. We realize that each of us
        is just a blip in a grand scheme of things and let’s make sure not to
        forget to have fun with everything we do. Enjoy the process!
      </>
    ),
  },
];

function SliderComponent() {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1300,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index: SetStateAction<number>) => setActiveSlide(index),
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <div className="pb-10">
      <div className="flex justify-center">
        <h1 className="font-[Montserrat] text-3xl text-[#000000] pt-20 pb-4 xl:text-4xl font-[500]">
          re:invent mindset
        </h1>
      </div>

      <Slider {...settings}>
        {quotes.map((quote, index) => (
          <div className="pb-20" key={index}>
            <p className="text-center font-[Georgia] w-[50%] ml-auto mr-auto md:text-xl">
              <i>{quote.text}</i>
            </p>
          </div>
        ))}
      </Slider>

      <div className="dots">
        {quotes.map((_, index) => (
          <button
            className={index === activeSlide ? "active" : ""}
            onClick={() => {}}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default SliderComponent;
