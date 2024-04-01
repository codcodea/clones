import Navbar from "../components/svt/navbar";
import Flash from "../components/svt/flash";
import Snabbkollen from "../components/svt/snabbkollen";
import SenastePlay from "../components/svt/senaste";
import MestTittat from "../components/svt/mesttittat";
import MestLäst from "../components/svt/mestläst";
import Hero from "../components/svt/hero";
import Footer from "../components/svt/footer";
import Disclaimer from "./disclaimer";
import {
  flashText,
  snabbkollenText,
  mestLäst,
  mestTittat,
  hero1,
  hero3,
} from "../db";

import "./css/global.css";

function SVT() {
  document.title = "SVT";
  document.body.classList.add("svt", "svt-body");

  return (
    <div class="svt svt-body">
      <Disclaimer brand="Sveriges Television AB" />
      <Navbar />
      <main class="container mx-auto grid max-w-5xl grid-cols-12 gap-5 px-2">
        <section class="col-span-12 mx-auto max-w-2xl lg:col-span-8">
          <Flash text={flashText[0].text} />
          <Flash text={flashText[1].text} />
          <section class="col-span-12 grid lg:hidden">
            <Snabbkollen text={snabbkollenText} />
          </section>
          <Hero text={hero1} />
          <Hero text={hero3} />
          <section class="col-span-12 grid lg:hidden">
            <SenastePlay />
            <MestTittat text={mestTittat} />
            <MestLäst text={mestLäst} />
          </section>
        </section>
        <section class="hidden lg:col-span-4 lg:block">
          <Snabbkollen text={snabbkollenText} />
          <SenastePlay />
          <MestTittat text={mestTittat} />
          <MestLäst text={mestLäst} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default SVT;
