function Flash(props) {
    return (
        <div class="mt-4 flex min-h-14 bg-white text-center shadow">
            <p
                class="
                        text-l 
                        flex w-28 flex-none items-center 
                        justify-center bg-red-600 font-semibold text-white
                "
            >
                JUST NU
            </p>
            <p
                class="
                        flex items-center 
                        justify-center p-3 
                        pl-5 text-lg font-medium
                "
            >
                {props.text}
            </p>
        </div>
    )
}

export default Flash
