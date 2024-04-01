import { Logo } from '../svg.jsx'

const Footer = () => {
    const head = 'text-neutral-100 font-medium'
    const list = 'text-neutral-100 space-y-1'

    return (
        <footer class="mt-6 p-4">
            <section
                class="grid min-h-96 grid-cols-2
                grid-rows-2 gap-x-4 bg-[#404040] px-8 py-12 font-light
                 lg:grid-cols-4 lg:grid-rows-1 "
            >
                <div class="col-span-1 space-y-2">
                    <h1 class={head}>Nyheter</h1>
                    <hr class="mb-1 border-neutral-500" />
                    <ul class={list}>
                        <li>Startsida</li>
                        <li>Lokala nyheter</li>
                        <li>Sport</li>
                        <li>Sport</li>
                        <li>Väder</li>
                        <li>Text-tv</li>
                    </ul>
                </div>
                <div class="col-span-1 space-y-2">
                    <h1 class={head}>Tjänster</h1>
                    <hr class="mb-1 border-neutral-500" />
                    <ul class={list}>
                        <li>SVT Play</li>
                        <li>Barn</li>
                        <li>TV-tablå</li>
                        <li>Alla program</li>
                        <li>Öppet arkiv</li>
                        <li>Recept</li>
                    </ul>
                </div>
                <div class="col-span-1 space-y-2">
                    <h1 class={head}>Aktuella program</h1>
                    <hr class="mb-1 border-neutral-500" />
                    <ul class={list}>
                        <li>Rapport</li>
                        <li>Aktuellt</li>
                        <li>Morgonstudion</li>
                        <li>Sportnytt</li>
                    </ul>
                </div>
                <div class="col-span-1 space-y-2 break-words">
                    <h1 class={head}>Hjälp och kontakt</h1>
                    <hr class="mb-1 border-neutral-500" />
                    <ul class={list}>
                        <li>Kontakta SVT</li>
                        <li>Kontakta SVT Nyhter</li>
                        <li>Tipsa SVT Nyheter</li>
                        <li>Om SVT</li>
                        <li>About SVT</li>
                        <li>SVT-bloggen</li>
                        <li>Anmäl till medieombudsmannen</li>
                        <li>Om personuppgifsbehandling</li>
                        <li>Cookie-inställningar</li>
                    </ul>
                </div>
            </section>
            <section class="min-h-52 w-full bg-[#333333]">
                <div class="flex w-full items-center justify-center p-4">
                    <Logo color={'fill-neutral-100'} />
                </div>

                <div class="text-wrap px-12 text-center text-sm text-neutral-100">
                    <span class="inline-block">
                        Tjänstgörande onlineredaktör:
                        <strong> Nomen Nescio</strong>
                        &nbsp; | &nbsp;
                    </span>

                    <span class="inline-block">
                        E-post: &nbsp; <strong>svtnyheter@svt.se</strong>
                        &nbsp; | &nbsp;
                    </span>

                    <span class="inline-block">
                        Telefon &nbsp; <strong>08-784 00 00</strong>
                        &nbsp; | &nbsp;
                    </span>
                    <span class="inline-block">
                        © &nbsp;<strong>Sveriges Television AB</strong>
                    </span>
                </div>
            </section>
        </footer>
    )
}

export default Footer
