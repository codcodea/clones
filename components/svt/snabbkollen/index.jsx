import { For } from 'solid-js'
const Snabbkollen = (props) => {
    return (
        <article class="relative mt-4 shadow">
            <div>
                <h1 class="flex h-10 items-center bg-red-600 pl-3 font-medium uppercase text-white">Snabbkollen</h1>
            </div>

            <For each={props.text}>
                {(t) => (
                    <div class="flex items-center border-b-[1px] bg-white">
                        <p class="p-3 align-middle font-medium">{t.text}</p>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="absolute right-3 text-gray-800"
                        >
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </div>
                )}
            </For>
        </article>
    )
}

export default Snabbkollen
