import { createSignal } from "solid-js";

import Navbar from "../components/hm/navbar";
import Hero from "../components/hm/hero";
import Carosuel from "../components/hm/carousel";
import Footer from "../components/hm/footer";
import Disclaimer from "./disclaimer";

import { carosuel1, carosuel2, carosuel3 } from "../db/hm/hm"; // carosuel1,
import { hero1, hero2 } from "../db/hm/hero"; // hero1,

// ------------------------------------------------------

function HM() {
  const [cms, setCms] = createSignal(1);
  const [hero, setHero] = createSignal(hero1);
  const [carosuel, setCarosuel] = createSignal(carosuel1);

  document.title = "H&M";
  document.body.classList.add("hm", "hm-body");


  const handleCms = () => {
    cms() === 1 ? setCms(2) : setCms(1);
    cms() === 1 ? setHero(hero1) : setHero(hero2);
    cms() === 1 ? setCarosuel(carosuel1) : setCarosuel(carosuel3);
  };

  return (
    <>
      <Disclaimer brand="H&M Hennes & Mauritz AB" handleCms={handleCms} />
      <Navbar />
      <main
        class="
                container mx-auto max-w-5xl 
                space-y-12 px-6 py-6 lg:py-16"
      >
        <Message />
        <Hero src={hero()[0]} />
        <Carosuel data={carosuel()} hasIndicator={true} id={"c1"} />
        <Hero src={hero()[1]} />
        <Carosuel data={carosuel2} hasIndicator={false} id={"c2"} />
        <Hero src={hero()[2]} />
      </main>
      <Footer />
    </>
  );
}

export default HM;

const Message = () => {
  return (
    <p class="-mb-4 text-center text-xs lg:px-0 px-10">
      Medlemmar får fri leverans till pick up points vid köp över 300 kr.
    </p>
  );
};
