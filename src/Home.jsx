import { splitProps } from "solid-js";

const LANG = {
  se: {
    pOne: "Den här sidan innehåller kopior (mockups, prototyper) av webbplatser skapade i utbildningssyfte. Varumärken och logotyper tillhör respektive ägare.",
    pTwo: "Sidorna är byggda med Solid.js och Tailwind CSS för mobil och desktop.",
    pThree: "Kontakt",
  },
  en: {
    pOne: "This page holds colones (i.e., mockups, prototypes) of websites created for educational purposes. Please note that the trademarks and logos are the property of their respective owners.",
    pTwo: "Pages are build with Solid.js and Tailwind CSS for mobile and desktop.",
    pThree: "Contact",
  },
};

// --------------------------------------------

const Home = () => {
  const swedish = ["sv-SE", "sv", "se"];

  if (swedish.includes(navigator.language)) {
    LANG.active = LANG.se;
  }

  return (
    <main
      class="container mx-auto mt-12 max-w-3xl 
            space-y-12 px-12 py-6 font-serif lg:py-16"
    >
      <section class="flex flex-col items-center space-y-4 text-right">
        <h1 class="mb-1 w-full text-6xl font-bold text-stone-800 opacity-90">
          Mockup.
        </h1>
        <p class="text-base text-stone-800">{LANG.active.pOne}</p>
        <p class="w-full text-base text-stone-800">{LANG.active.pTwo}</p>
        <div class=" w-full text-right font-sans text-xs uppercase text-blue-900">
          <a href="mailto:tede1x70@gmail.com">{LANG.active.pThree}</a>
        </div>
      </section>

      <section>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
          <PageCard href="/svt" imgSrc="svt-cover.jpg" alt="SVT" title="SVT" />
          <PageCard href="/hm" imgSrc="hm-cover.jpg" alt="H&M" title="H&M" />
        </div>
      </section>
    </main>
  );
};

const PageCard = (props) => {
  const [local, others] = splitProps(props, ["href", "imgSrc", "alt", "title"]);

  return (
    <a href={local.href} class="group">
      <div class="relative overflow-hidden p-1 shadow-md">
        <img src={local.imgSrc} alt={local.alt} class="w-full object-cover" />
        <div
          class="
                                absolute inset-0
                                flex items-center
                                justify-center bg-stone-100 bg-opacity-90
                                opacity-0 transition-opacity
                                duration-700 group-hover:opacity-100
                            "
        >
          <p
            class="           bg-red-800
                                bg-opacity-80 p-12 text-2xl
                                font-bold text-white
                                transition-opacity duration-300"
          >
            {local.title}
          </p>
        </div>
      </div>
    </a>
  );
};

export default Home;
