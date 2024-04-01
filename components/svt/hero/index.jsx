import { Show, createSignal, For } from 'solid-js'

const Hero = (props) => {
    const [open, setOpen] = createSignal(false)

    return (
        <>
            <section class="bg-white shadow">
                <article>
                    <div title="red-divider" class="mt-4 h-1 w-full bg-red-600 " />
                    <div class="flex h-10 items-center border-b-[1px] bg-white pl-3">
                        <h1 class="text-base font-medium uppercase">{props.text.title}</h1>
                    </div>
                    <div>
                        <img class="object-contain" src={props.text.img} alt="" />
                    </div>
                    <div class="border-b-[1px] p-6">
                        <h1 class="text-4xl font-bold text-gray-800">{props.text.text}</h1>
                        <div class="mt-1 h-8">
                            <p class={`inline-block text-lg font-semibold uppercase ${props.text.sub.color}`}>
                                {props.text.sub.text[0]}
                                <span class="relative bottom-[2px] left-[2px] text-xs after:content-['•']" />
                            </p>
                            <p class="inline-block pl-[4px] text-lg">
                                {props.text.sub.text[1]}
                                <span class="relative bottom-[2px] left-[2px] text-xs after:content-['•']" />
                            </p>
                            <Show when={props.text.sub.text[2]}>
                                <p class="inline-block pl-[4px] text-lg">{props.text.sub.text[2]}</p>
                            </Show>
                        </div>
                    </div>
                </article>

                <For each={props.text.stories}>
                    {(s) => {
                        if (s.id > 2) return null
                        return (
                            <article class="grid grid-cols-12 border-b-[1px] p-6">
                                <div class="col-span-4">
                                    <img class="object-contain" src={s.img} alt="" />
                                </div>
                                <div class="col-span-8 px-4">
                                    <h1 class="text-2xl font-semibold text-gray-800">{s.title}</h1>
                                    <p class="my-1">{s.text}</p>
                                </div>
                            </article>
                        )
                    }}
                </For>

                <Show when={!open()}>
                    <div onClick={() => setOpen((prev) => !prev)} class="flex h-12 w-full items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="19"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="mr-1 text-gray-700"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="16" />
                            <line x1="8" y1="12" x2="16" y2="12" />
                        </svg>
                        <h1 class="font-medium uppercase">Visa fler</h1>
                    </div>
                </Show>

                <Show when={open()}>
                    <article class="grid grid-cols-12 border-b-[1px] p-6">
                        <div class="col-span-4">
                            <img class="object-contain" src={props.text.stories[2].img} alt="" />
                        </div>
                        <div class="col-span-8 px-4">
                            <h1 class="text-2xl font-semibold text-gray-800">{props.text.stories[2].title}</h1>
                            <p class="my-1">{props.text.stories[2].text}</p>
                        </div>
                    </article>
                </Show>
            </section>
        </>
    )
}

export default Hero
