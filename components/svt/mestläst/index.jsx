import { For } from 'solid-js'
const MestLäst = (props) => {
    return (
        <article class="bq-white h-fit shadow">
            <div title="red-divider" class="mt-4 h-1 w-full bg-red-600 " />
            <div class="flex h-10 items-center border-b-[1px] bg-white pl-3">
                <h1 class="text-lg font-semibold">Mest läst</h1>
            </div>

            <For each={props.text}>
                {(t) => (
                    <div class="grid grid-cols-12 gap-4 border-b-[1px] bg-white p-3">
                        <div class="col-span-2 flex h-10 w-10 items-center justify-center rounded-full border-2">
                            <p>{t.id}</p>
                        </div>
                        <p class="col-span-10 flex items-center object-contain pr-6 font-medium">{t.text}</p>
                    </div>
                )}
            </For>
        </article>
    )
}

export default MestLäst
