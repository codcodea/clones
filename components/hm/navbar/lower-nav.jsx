import { createEffect, createSignal, For } from 'solid-js'
import { map, menu } from '/db/hm/nav.jsx'
import { toggleUnderline } from './helpers/underline'
import Serach from './serach'

const LowerNav = () => {
    const [isOpen, setOpen] = createSignal(false)
    const [active, setActive] = createSignal('')

    // escape key
    createEffect(() => {
        const handleKeyDown = (e) => e.key === 'Escape' && setOpen(false)
        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    })

    // remove underline on close
    createEffect(() => !isOpen() && toggleUnderline(null))

    return (
        <nav onMouseLeave={() => setOpen(false)} class="hm-body absolute top-36 w-full">
            <nav
                data-title="MENU-ITEMS"
                class="relative hidden font-extralight text-gray-700 lg:flex lg:justify-center"
            >
                <Menu menu={menu} isOpen={isOpen} setOpen={setOpen} setActive={setActive} />
                <Serach />
            </nav>
            <nav
                data-title="LOWER-NAV"
                class={`text-gray-700" w-full pt-12 text-[13px] ${isOpen() ? 'block' : 'hidden'}`}
            >
                <MegaMenu map={map} active={active} />
                <div class="mt-6 h-1 w-full bg-black" />
            </nav>
        </nav>
    )
}

export default LowerNav

const Menu = (props) => {
    const handleActive = (e) => {
        const menuItem = e.currentTarget.innerText.toLowerCase()
        props.setActive(menuItem)
        toggleUnderline(e)
    }

    return (
        <ul
            onMouseEnter={() => {
                setTimeout(() => {
                    props.setOpen(true)
                }, 200)
            }}
            class="inline-flex select-none gap-x-6"
        >
            <For each={props.menu}>
                {(item) => (
                    <li class="grab-underline cursor-pointer" onMouseEnter={handleActive}>
                        {item}
                    </li>
                )}
            </For>
        </ul>
    )
}

const MegaMenu = (props) => {
    return (
        <div
            title="inner-wrapper"
            class="mx-auto grid max-w-4xl grid-cols-4 justify-stretch gap-12 hover:cursor-pointer "
        >
            <For each={props.map.get(props.active())}>
                {(item) => (
                    <div>
                        <For each={item}>
                            {(i) => (
                                <div class="pb-6">
                                    <h1 class="font-medium">{i.head}</h1>
                                    <ul class="text-gray-500">
                                        <For each={i.items}>{(item) => <li>{item}</li>}</For>
                                    </ul>
                                </div>
                            )}
                        </For>
                    </div>
                )}
            </For>
        </div>
    )
}
