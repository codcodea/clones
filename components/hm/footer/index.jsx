import { For } from 'solid-js'
import { ArrowRight } from '../carousel/svg.jsx'
import Social from './social'
import { li, ftg, hjälp } from '/db/hm/footer.jsx'

const Footer = () => {
    const headline = 'text-base font-medium uppercase mb-2 text-gray-800 select-none'

    return (
        <footer class="h-fit w-full bg-[#e4e4e4] ">
            <section class="container mx-auto grid max-w-4xl auto-rows-auto gap-8 py-12">
                <article class="row-span-1 grid grid-cols-4 gap-4">
                    <NavGroup title="Shop" list={li} isUpper={true} stHead={headline} />
                    <NavGroup title="Företagsinformation" list={ftg} isUpper={false} stHead={headline} />
                    <NavGroup title="Hjälp" list={hjälp} isUpper={false} stHead={headline} />

                    <nav
                        class="
                        col-span-4 flex flex-col items-center justify-center 
                        lg:col-span-1 lg:block"
                    >
                        <h1 class={headline}>Gå med nu</h1>
                        <p class="mb-4 mr-3 text-xs text-gray-700">
                            Bli medlem och få 10% rabatt på ett köp + fri leverans till utlämningsställe!
                        </p>
                        <div class="flex gap-3">
                            <h1 class="text-md mb-2 select-none uppercase text-gray-700">Läs mer</h1>
                            <div class="flex items-center">
                                <ArrowRight />
                            </div>
                        </div>
                    </nav>
                </article>

                <div class="row-span-1 flex justify-center">
                    <Social />
                </div>

                <div class="row-span-1 flex justify-center text-xs">
                    <p>Innehållet på denna webbplats är upphovsrättsskyddat och tillhör H & M Hennes & Mauritz AB.</p>
                </div>

                <div class="flex justify-center text-xs">
                    <Logo />
                </div>

                <div class="flex justify-center">
                    <p>Sverige | kr.</p>
                </div>
            </section>
        </footer>
    )
}

export default Footer

// One column of the footer
const NavGroup = (props) => {
    const list = 'select-none font-[14px] hover:cursor-pointer hover:underline'
    const text = `text-[14px] text-gray-700 space-y-1 ${props.isUpper ? 'uppercase' : ''}`

    return (
        <nav class="col-span-1 hidden lg:block">
            <h1 class={props.stHead}>{props.title}</h1>
            <ul class={text}>
                <For each={props.list}>{(item) => <li class={list}>{item}</li>}</For>
            </ul>
        </nav>
    )
}

const Logo = () => {
    return (
        <div title="logo" class=" flex flex-1 justify-center fill-[#d22c25]">
            <svg
                class="w-10"
                viewBox="0 0 370 244"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                focusable="false"
                role="img"
                aria-labelledby="id-hm-logo-xlarge"
            >
                <title>H&amp;M</title>
                <path d="M259.895 7.413c13.424-6.618 20.087-5.737 20.232.946.19 8.7-1.098 20.23-2.016 28.604-4.983 45.423-13.32 82.543-13.954 129.19 21.94-56.802 40.345-96.278 64.03-144.909 7.53-15.47 12.325-12.593 18.503-15.343 24.082-10.715 24.984-4.133 21.837 8.95-11.686 48.552-41.54 201.376-46.114 224.907-1.328 6.807-8.715 3.923-10.644 1.26-8.57-11.85-18.225-12.036-17.14-19.919 5.37-39.233 24.71-137.666 29.75-160.863-25.719 52.696-52.37 118.566-66.053 155.914-2.907 7.931-8.188 7.35-11.48 1.546-4.63-8.15-13.61-12.312-15.093-21.943-4.702-30.628 5.37-89.003 6.773-125.936-13.994 40.342-37.49 118.67-47.782 154.057-4.256 14.643-18.382 12.253-14.627-2.018 15.642-59.389 49.326-164.425 63.915-202.198 3.427-8.874 12.406-8.569 19.863-12.245zM174.6.115c4.26 1.025 3.913 6.05 1.31 12.912-7.682 20.247-18.335 46.847-30.516 78.212 7.658-.874 11.811-1.17 11.811-1.17 10.994-1.358 13.041 4.139 9.946 9.99-2.466 4.664-5.436 1.554-15.724 16.89-5.796 8.642-15.259 10.924-20.515 12.076-12.662 33.523-26.23 70.916-39.415 110.77-1.919 5.804-7.524 4.532-9.209 2.174-6.192-8.647-10.758-8.933-15.558-15.927-.577-1.132-1.706-2.672-1.027-5.448 3.53-14.425 12.901-44.067 27.156-83.091-17.958 3.892-37.387 8.076-45.408 9.94-9.626 25.445-19.014 50.967-27.908 76.18-5.518 15.64-19.88 12.617-14.84-2.165 8.028-23.548 16.89-48.004 25.776-71.72-9.948-1.063-13.313-8.088-18.873-13.958-2.147-2.267-6.828-1.948-9.12-5.127-4.123-5.711-3.712-8.248 5.81-10.996a955.318 955.318 0 0137.464-9.998c16.09-41.524 30.63-77.144 38.38-96.151C90.114-1.138 105.514.226 99.664 14.674c-11.889 29.363-24.079 59.867-36.11 90.799a880.98 880.98 0 0144.748-8.87 2312.644 2312.644 0 0134.62-83.968c.845-1.937 3.31-4.678 5.878-5.118 8.092-1.385 21.251-8.498 25.8-7.402zm-27.552 190.077c1.265-.773 2.524-1.715 3.767-2.75a756.514 756.514 0 01-2.82-8.468 139.528 139.528 0 00-2.752 3.638c-5.386 7.396-2.197 10.028 1.805 7.58zm7.167-35.065c6.67-7.53-6.516-10.681-3.48.836.17.65.382 1.413.62 2.254a98.19 98.19 0 002.86-3.09zm6.941 22.695c6.602-5.721 12.908-.046 6.38 9.628-1.404 2.08-2.99 4.318-4.729 6.522a193.17 193.17 0 002.146 5.877c3.375 8.654-5.488 10.824-8.345 3.656-.25-.626-.51-1.297-.778-1.995-5.387 4.772-11.618 7.777-18.275 5.707-10.954-3.407-13.74-18.83-3.514-30.711 4.103-4.767 7.191-8.074 9.771-10.716a251.947 251.947 0 01-1.819-6.17c-1.328-4.81-2.527-10.416 2.287-16.13 9.027-10.712 29.971-1.203 19.377 15.289-2.552 3.972-5.535 7.724-8.647 11.527a979.555 979.555 0 003.26 10.18 78.304 78.304 0 012.886-2.664z" />
            </svg>
        </div>
    )
}
