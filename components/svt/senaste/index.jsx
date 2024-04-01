const SenastePlay = () => {
    return (
        <article class="shadow">
            <div title="red-divider" class="mt-4 h-1 bg-red-600 " />
            <div class="flex h-10 items-center bg-white pl-3">
                <h1 class="text-lg font-semibold">Senaste avsnittet på SVT Play</h1>
            </div>
            <div class="">
                <img class="w-full object-contain" src="senaste_svtplay.png" alt="" />
            </div>
            <div class="flex h-20 flex-col items-start justify-center bg-white pl-3">
                <p class="font-semibold">Rapport</p>
                <p class="">Idag 12:00</p>
            </div>
        </article>
    )
}

export default SenastePlay
