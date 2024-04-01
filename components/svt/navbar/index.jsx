import { For } from 'solid-js'
import { createStore } from 'solid-js/store'

import NavbarLi from './list-item'
import { Logo } from '../svg'

const [menus, setMenus] = createStore([
    { id: 1, text: 'Nyheter', chevron: true, open: false },
    { id: 2, text: 'Lokalt', chevron: true, open: false },
    { id: 3, text: 'SVT Play', chevron: true, open: false },
    { id: 4, text: 'Barn', chevron: false, open: false },
    { id: 5, text: 'TV-tablå', chevron: false, open: false },
    { id: 6, text: 'Alla program', chevron: false, open: false },
])

const Navbar = () => {
    const toggleOpen = (id) => {
        setMenus(
            (menu) => menu.id !== id,
            'open',
            () => false,
        )
        setMenus(
            (menu) => menu.id === id,
            'open',
            (open) => !open,
        )
    }

    return (
        <div class="bg-white">
            <header class="container mx-auto flex h-[74px] max-w-5xl">
                <div title="logo" class="flex items-center justify-center px-6">
                    <Logo />
                </div>
                <nav class="select-none">
                    <ul class="group flex h-full">
                        <For each={menus}>{(menu) => <NavbarLi {...menu} toggleOpen={toggleOpen} />}</For>
                    </ul>
                </nav>
            </header>
            <div title="red-divider" class="h-1 w-full bg-red-600" />
        </div>
    )
}

export default Navbar
