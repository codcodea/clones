function Flash(props) {
    return (
        <div class="mt-4 flex min-h-16 bg-white text-center shadow">
            <p
                class="
                        text-base 
                        flex w-28 flex-none items-center 
                        justify-center bg-red-600 font-semibold text-white
                        leading-none
                        
                "
            >
                JUST NU
            </p>
            <p
                class="
                        flex items-center 
                        justify-center p-3 
                        pl-3 md:pl-5 text-lg font-semibold
                        leading-tight
                        text-left
                        
                "
            >
                {props.text}
            </p>
        </div>
    )
}

export default Flash
