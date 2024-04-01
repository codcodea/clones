import { Show, createSignal, createEffect, For, onCleanup } from 'solid-js'
import { isMediaLG, clear } from '../helpers/js-breakpoints.jsx'
import { ArrowLeft, ArrowRight } from './svg'
import Img from './image'
import Indicators from './indicators'
import '../helpers/js-breakpoints.jsx'

// ------------------------------

const Carosuel = (props) => {
    const [isActive, setIsActive] = createSignal(1)
    const [indicators, setIndicators] = createSignal([1, 2, 3, 4])

    const [isScolling, setIsScrolling] = createSignal(false) // to prevent multiple scroll events
    const [isNavigating, setIsNavigating] = createSignal(true) // to prevent multiple scroll events

    let scrollLeft

    // init: to update number of indicators based on screen size
    createEffect(() => {
        isMediaLG() ? setIndicators([1, 2, 3, 4]) : setIndicators([1, 2, 3, 4, 5, 6, 7, 8])
        return () => clear()
    })

    // execute programmatic scroll as an indicators or arrows are clicked
    createEffect(() => {
        // do not scroll if user is scrolling with the mouse
        if (!isScolling() && isNavigating()) {
            scrollLeft.style.scrollBehavior = 'smooth'
            scrollLeft.scrollLeft = (isActive() - 1) * scrollLeft.clientWidth
        }
    })

    // set active page when arrows are clicked
    const handleArrows = (direction) => {
        setIsScrolling(false)
        setIsNavigating(true)
        if (direction === 'right') {
            setIsActive((p) => (p === indicators().length ? 1 : p + 1))
            return
        }
        setIsActive((p) => (p === 1 ? indicators().length : p - 1))
    }

    // set page based on manual user scroll
    const handleMouseScroll = () => {
        if (!isScolling()) {
            setIsScrolling(true)
            setIsNavigating(false)
            setTimeout(() => setIsScrolling(false), 1000)
        }

        const width = scrollLeft.clientWidth
        const scroll = Number(scrollLeft.scrollLeft)

        const active = Math.ceil(scroll / width)
        let page = active == 0 || active == Infinity ? 1 : active

        if (isActive() != page) {
            setIsActive(page)
        }
    }

    // Add and remove event listener
    createEffect(() => {
        scrollLeft.addEventListener('wheel', handleMouseScroll, { passive: true })
    })

    onCleanup(() => {
        scrollLeft.removeEventListener('wheel', handleMouseScroll)
    })

    // Set card with based on screen wisth: exclude X times 24px gap between each card
    // carosel1 has 2 or 4 cards
    // carosel2 has always 6 cards
    const isCarosuel1 = props.id === 'c1'
    let cardWidth = isCarosuel1
        ? 'relative w-[calc((100%-24px)/2)] lg:w-[calc((100%-72px)/4)]'
        : 'relative w-[calc((100%-99px)/6)]'

    return (
        <section class="relative">
            <nav data-label="ARROW" class="absolute -right-12 top-[40%] hidden lg:block">
                <ArrowRight handleSlide={handleArrows} />
            </nav>

            <nav data-label="ARROW" class="absolute  -left-12 top-[40%] hidden lg:block">
                <ArrowLeft handleSlide={handleArrows} />
            </nav>

            <article
                data-label="CAROUSEL"
                id={props.id}
                class="carosuel w-full snap-x snap-mandatory space-x-6 overflow-x-auto whitespace-nowrap"
                ref={scrollLeft}
            >
                <For each={props.data}>{(item) => <Img {...item} {...props} cardWidth={cardWidth} />}</For>

                <Show when={props.hasIndicator}>
                    <EndCard cardWidth={cardWidth} />
                </Show>
            </article>

            <Show when={props.hasIndicator}>
                <nav data-label="INDICATORS" class="w-full text-center">
                    <Indicators isActive={isActive} setIsActive={setIsActive} indicators={indicators} setIsScrolling={setIsScrolling} setIsNavigating={setIsNavigating}/>
                </nav>
            </Show>
        </section>
    )
}

export default Carosuel

// Last card in the carousel
const EndCard = (props) => {
    return (
        <div class={`h-full ${props.cardWidth} inline-block snap-start align-top`}>
            <div class="flex aspect-[2/3] w-full flex-col items-center justify-center bg-white text-[13px]">
                <p class="flex text-center">
                    Vill du se alla nyheter <br /> för dam?
                </p>
                <button class="my-4 flex h-10 w-32 items-center justify-center border-[1px] border-black bg-white text-[14px] font-semibold text-black">
                    Visa alla
                </button>
            </div>
        </div>
    )
}
