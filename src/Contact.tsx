type Props = {};

const contactInfo = [
  {
    iconSrc:
      "https://uploads-ssl.webflow.com/62d5585bf8cc926daf147dd9/62d5585cf8cc9270f8147e08_map-icon.png",
    text: "Central, Station Square, Tbilisi 0100",
    link: "https://www.google.ge/maps/place/re:invent+%E2%80%A2+%E1%83%A0%E1%83%94:%E1%83%98%E1%83%9C%E1%83%95%E1%83%94%E1%83%9C%E1%83%97%E1%83%98/@41.7202199,44.7996005,17z/data=!3m1!4b1!4m6!3m5!1s0x40440d92d94cba47:0x8edc90af5620e709!8m2!3d41.7202199!4d44.7996005!16s%2Fg%2F11t7k_5r1b?entry=ttu"
  },
  {
    iconSrc:
      "https://uploads-ssl.webflow.com/62d5585bf8cc926daf147dd9/62d5585cf8cc927b09147e0c_twitter.png",
    text: "@reinventvs",
    link: "https://twitter.com/reinventvs"
  },
  {
    iconSrc:
      "https://uploads-ssl.webflow.com/62d5585bf8cc926daf147dd9/630d27c7713a6844e7285d55_fb.png",
    text: "@reinventvs",
    link: "https://www.facebook.com/reinventvs"
  },
  {
    iconSrc:
      "https://uploads-ssl.webflow.com/62d5585bf8cc926daf147dd9/631f6d7a301ed2f8ff946038_instalogo.png",
    text: "@reinvent_venture_studio",
    link: "https://www.instagram.com/reinvent_venture_studio/"
  },
];

function Contact({}: Props) {
  return (
    <div className="pt-10" id="contact">
      <div>
        <h1 className="uppercase font-[Montserrat] text-3xl text-[#464D56] text-center">
          Contact
        </h1>
        <p className="text-[#464D56] font-[Montserrat] text-center">
          <i>We are where you need us to be</i>
        </p>
      </div>

      <div className="flex flex-col md:flex-row lg:justify-center justify-between md:items-center gap-10">
        <div className="pt-24 md:w-[50%] lg:w-[30%]">
          <h1 className="uppercase font-[Montserrat] text-xl text-[#464D56]  text-center sm:text-left sm:pl-4 2xl:p-3">
            Pitch us your idea
          </h1>
          <form className=" p-4 ">
            <div className="mb-4">
              <label
                className="block text-[#98a1a3] font-[Montserrat] font-thin text-lg"
                htmlFor="name"
              >
                Your Name:
              </label>
              <input
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none placeholder:font-[Montserrat] focus:ring focus:border-blue-300"
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-[#98a1a3] font-[Montserrat] text-lg"
                htmlFor="email"
              >
                Email Address:
              </label>
              <input
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none placeholder:font-[Montserrat] focus:ring focus:border-blue-300"
                type="email"
                id="email"
                name="email"
                required
                placeholder="email@address.com"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-[#98a1a3] font-[Montserrat] text-lg"
                htmlFor="business"
              >
                What's Your Business?
              </label>
              <textarea
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300 placeholder:font-[Montserrat] "
                id="business"
                name="business"
                rows={2}
                required
                placeholder="What would you like to say?"
              ></textarea>
            </div>

            <button
              className="bg-white text-[#98a1a3] hover:text-white font-[Montserrat] text-md px-4 py-2 rounded-xl border-[3px] duration-300 w-full sm:w-[200px] border-[#4ac2c9] hover:bg-blue-300 focus:outline-none focus:ring focus:bg-blue-600"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="pt-10 md:w-[50%] lg:w-[30%] 2xl:w-[25%]">
          <h1 className="uppercase font-[Montserrat] text-xl text-[#464D56] text-center md:text-left">
            Contact Info
          </h1>
          <div className="p-3 2xl:p-0 2xl:pt-3 flex flex-col gap-4">
            {contactInfo.map((info, index) => (
              <div key={index}>
                <img
                  className="w-[25px] inline-block mr-1"
                  src={info.iconSrc}
                  alt="Location"
                />
                <span className="text-[#98a1a3] font-[Montserrat]">
                  <a href={info.link} target="_blank">
                  <i>{info.text}</i>
                  </a>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
