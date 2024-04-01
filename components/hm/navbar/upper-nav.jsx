import { People, Heart, Shop, Dots, Logo } from './svg.jsx'
import { createSignal, Show } from 'solid-js'

const UpperNav = () => {
    const [isOpen, setOpen] = createSignal(false)
    const [isLogIn, setLogIn] = createSignal(false)
    const [isVarukorg, setVarukorg] = createSignal(false)

    const handleLogin = (e) => {
        if (e.type === 'mouseenter') {
            setLogIn(true)
        } else {
            setLogIn(false)
        }
    }

    const handleVarukorg = (e) => {
        if (e.type === 'mouseenter') {
            setVarukorg(true)
        } else {
            setVarukorg(false)
        }
    }

    const nav = 'hidden lg:block px-2 hover:cursor-pointer select-none whitespace-nowrap'

    return (
        <div class=" container mx-auto flex h-12 max-w-5xl items-center justify-between px-6 py-8 lg:h-28 lg:max-w-full">
            <nav data-title="LEFT-NAV-GROUP" class="hidden lg:block lg:w-1/3">
                <ol class="flex-inline flex gap-4 text-[13px] text-gray-700 hover:cursor-pointer">
                    <li>Kundservice</li>
                    <li>Nyhetsbrev</li>
                    <li>Hitta butik</li>
                    <li class="relative z-20 w-6 -translate-y-[1px] translate-x-3 hover:fill-[#d22c25]">
                        <Dots setOpen={setOpen} />
                        <DownloadApp isOpen={isOpen} />
                    </li>
                </ol>
            </nav>

            <div data-title="LOGO" class="flex justify-center fill-[RGB(229,0,16)]  lg:flex-1">
                <nav class="block lg:hidden">
                    <svg
                        class="mr-4 h-5 w-5 cursor-pointer fill-gray-700"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        focusable="false"
                    >
                        <path d="M2 6h20v1H2V6zm0 6h20v1H2v-1zm0 7v-1h20v1H2z" />
                    </svg>
                </nav>
                <Logo />
            </div>

            <nav
                data-title="ICONS"
                class="flex-inline 
                    flex w-1/3 justify-end gap-4 text-[13px] 
                    text-gray-700 lg:gap-0"
            >
                <div
                    onMouseEnter={handleLogin}
                    onMouseLeave={handleLogin}
                    class="relative flex items-center gap-0 hover:cursor-pointer"
                >
                    <People />
                    <p class={nav}>Logga in</p>
                    <Show when={isLogIn()}>
                        <LoggaIn />
                    </Show>
                </div>

                <div class="flex items-center gap-0 hover:cursor-pointer lg:hidden">
                    <div class="h-6 w-6 scale-95">
                        <svg
                            class=""
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            focusable="false"
                        >
                            <path d="M11 2a9 9 0 0 1 6.866 14.82l-.159.18 4.243 4.243-.707.707L17 17.708A9 9 0 1 1 11 2zm0 1a8 8 0 1 0 0 16 8 8 0 0 0 0-16z" />
                        </svg>
                    </div>
                </div>

                <div class="flex items-center gap-0 hover:cursor-pointer">
                    <Heart />
                    <p class={nav}>Favoriter</p>
                </div>

                <div
                    onMouseEnter={handleVarukorg}
                    onMouseLeave={handleVarukorg}
                    class="relative flex items-center gap-1 hover:cursor-pointer"
                >
                    <Shop />
                    <p class={nav}>Shoppongkorg (0)</p>
                    <div class="hidden lg:block">
                        <Show when={isVarukorg()}>
                            <Varukorg />
                        </Show>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default UpperNav

// Pop-ups
const DownloadApp = (props) => {
    return (
        <Show when={props.isOpen()}>
            <ul class="absolute -left-1 w-44 select-none bg-white">
                <li class="px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-200">Ladda ner Android app</li>
                <li class="px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-200">Ladda ner iOS app</li>
            </ul>
        </Show>
    )
}

const LoggaIn = () => {
    return (
        <div class="absolute right-0 top-6 z-30 w-56 bg-transparent py-4">
            <div class="bg-white p-6">
                <button class="w-full bg-black py-3 text-base text-white hover:bg-gray-700">Logga in</button>
                <ul class="mt-4 space-y-1">
                    <li class="text-[13px] text-gray-700 hover:underline">Mitt konto</li>
                    <li class="text-[13px] text-gray-700 hover:underline">Om medlemskapet</li>
                    <li class="text-[11px] text-gray-500 hover:underline">Inte medlem ännu? Bli medlem här!</li>
                </ul>
            </div>
        </div>
    )
}

const Varukorg = () => {
    return (
        <div class="absolute right-0 top-6 z-30 w-96 bg-transparent py-4">
            <div class="bg-white p-6">
                <p class="font-medium">Din shoppingkorg är tom</p>
                <hr class="mb-4 mt-6" />
                <div class="flex justify-between">
                    <p class="text-[13px] text-gray-600">Beställningsvärde</p>
                    <p class="text-[13px] text-gray-600">0,00 kr.</p>
                </div>
                <hr class="mb-2 mt-4" />
                <div class="flex justify-between">
                    <p class="text-base font-medium text-gray-700">Summa</p>
                    <p class="text-basefont-medium text-gray-700">0,00 kr.</p>
                </div>
            </div>
        </div>
    )
}
