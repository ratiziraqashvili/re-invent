import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { useState } from "react";
/*@ts-ignore*/
import { Link, animateScroll as scroll } from "react-scroll";

type NavItem = {
  id: string;
  text: string;
};

const navItems: NavItem[] = [
  { id: "home", text: "Home" },
  { id: "Structure", text: "Structure" },
  { id: "about", text: "About" },
  { id: "startups", text: "Startups" },
  { id: "contact", text: "Contact" },
  { id: "why", text: "Why re:invent?" },
];

type Props = {};

function Navbar({}: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  console.log(isMenuOpen);

  return (
    <nav className="flex md:block justify-between fixed top-0 w-full items-center p-1 sm:p-4 bg-white bg-opacity-50 backdrop-blur-sm z-50">
      <div className="flex md:justify-center">
        <ul className="hidden md:flex justify-evenly font-[Montserrat] uppercase cursor-pointer font-semibold text-sm w-[70%]">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="hover:text-[#4ac2c9] transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <Link to={item.id} smooth={true} duration={1300}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
        <img
          className="w-[35%] md:hidden"
          src="https://uploads-ssl.webflow.com/62d5585bf8cc926daf147dd9/631f5c20b814f6093860aec0_logooooo.png"
          alt="re:invent"
        />
      </div>
      <div className="md:hidden">
        <IconButton onClick={toggleMenu}>
          <MenuIcon style={{ width: "35px", height: "30px", color: "black", }} />
        </IconButton>
      </div>
      {isMenuOpen && (
        <ul className="fixed top-[3.4rem] sm:top-[4.8rem] md:hidden bg-[#4f4f4f] bg-opacity-90 w-full left-0 h-[80vh] grid grid-rows-6 pt-5 pl-5" >
          {navItems.map((item) => (
            <li onClick={() => setIsMenuOpen(false)} className="text-white flex  font-[Montserrat]" key={item.id}>
              <Link to={item.id} smooth={true} duration={1300}>{item.text}</Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
