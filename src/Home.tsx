import HomePage from "./HomePage";
import Navbar from "./Navbar";
import Structure from "./Structure";
import About from "./About";
import Portfolio from "./Portfolio";
import Why from "./Why";
import SliderComponent from "./Slider";
import Team from "./Team";
import Image from "./Image";
import Contact from "./Contact";
import FooterReinvent from "./FooterReinvent";

type Props = {};

function Home({}: Props) {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Structure />
      <About />
      <Portfolio />
      <Why />
      <SliderComponent />
      <Team />
      <Image />
      <Contact />
      <FooterReinvent />
    </div>
  );
}

export default Home;
