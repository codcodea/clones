import { Show } from "solid-js";

const LANG = {
  se: {
    pOne: "Den här webbsidan innehåller inget riktigt innehåll. Varumärket ägs av",
    back: "Tillbaka",
  },
  en: {
    pOne: "This website holds no real content. The trademarks is owned by",
    back: "Back",
  },
};

// --------------------------------------------

const Disclaimer = (props) => {
  const back = "\u003c";
  const swedish = ["sv-SE", "sv", "se"];

  if (swedish.includes(navigator.language)) {
    LANG.active = LANG.se;
  }

  return (
    <nav class="flex h-8 w-full items-center justify-center bg-black text-center shadow">
      <a href="/" class="inline px-2 font-sans text-[10px] text-neutral-200 ">
        {back} {LANG.active.back}
      </a>
      <span class="px-12 text-[10px] text-neutral-200">
        {LANG.active.pOne} {props.brand}.
      </span>
      <Show when={props.handleCms}>
        <button
          class="bg-neutral-100 px-2 text-xs"
          onClick={() => props.handleCms()}
        >
          Next CMS
        </button>
      </Show>
    </nav>
  );
};

export default Disclaimer;
