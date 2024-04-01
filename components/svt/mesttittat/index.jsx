import { For } from 'solid-js'
const MestTittat = (props) => {
    return (
        <article class="bq-white shadow">
            <div title="red-divider" class="mt-4 h-1 w-full bg-red-600 " />
            <div class="flex h-10 items-center border-b-[1px] bg-white pl-3">
                <h1 class="text-lg font-semibold">Mest tittat</h1>
            </div>

            <For each={props.text}>
                {(t) => (
                    <div class="grid min-h-28 grid-cols-8 gap-4 border-b-[1px] bg-white p-3">
                        <img class="col-span-3 object-contain " src={t.img} alt="" />
                        <p class="col-span-5 object-contain font-medium">{t.text}</p>
                    </div>
                )}
            </For>
        </article>
    )
}

export default MestTittat
