import { Show, createEffect, createSignal } from 'solid-js'

const NavbarLi = (props) => {
    const [active, setActive] = createSignal('')

    createEffect(() => {
        props.open ? setActive('bg-slate-50') : setActive('')
    })

    const Open = () => {
        return (
            <path
                class="pathUp"
                d="M8 11.35c-.5 0-1-.2-1.4-.6l-4.8-4.7 1.4-1.4L8 9.35l4.8-4.7 1.4 1.4-4.9 4.8c-.3.3-.8.5-1.3.5z"
            />
        )
    }

    const Closed = () => {
        return (
            <path
                class="pathDown"
                d="M7.8 4.65c.5 0 1 .2 1.4.6l4.8 4.7-1.4 1.4-4.8-4.7-4.8 4.7-1.4-1.4 4.9-4.8c.3-.3.8-.5 1.3-.5z"
            />
        )
    }

    const Path = (props) => {
        return (
            <Show when={props.open} fallback={<Open />}>
                {<Closed />}
            </Show>
        )
    }

    return (
        <li class={`flex items-center justify-center border-l-[1px] px-3 hover:bg-slate-50 ${active()}`}>
            <p class="nav-item pr-1 text-[17px] font-medium">{props.text}</p>
            <Show when={props.chevron}>
                <svg
                    class="chevron h-[19px] w-[19px] rounded-full bg-red-600 p-1 text-slate-50"
                    fill="currentColor"
                    focusable="false"
                    height="1em"
                    stroke="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => props.toggleOpen(props.id)}
                >
                    <Path {...props} />
                </svg>
            </Show>
        </li>
    )
}

export default NavbarLi
