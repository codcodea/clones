const Serach = () => {
    return (
        <div
            title="serach"
            class="absolute
                -top-1 right-9 inline-flex 
                h-[26px] border-b-[1px] 
                border-gray-700"
        >
            <div class="h-6 w-6 scale-95">
                <svg
                    class=""
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    focusable="false"
                >
                    <path d="M11 2a9 9 0 0 1 6.866 14.82l-.159.18 4.243 4.243-.707.707L17 17.708A9 9 0 1 1 11 2zm0 1a8 8 0 1 0 0 16 8 8 0 0 0 0-16z" />
                </svg>
            </div>
            <input
                type="text"
                class="h-6 w-24 rounded-l-md border-none bg-transparent pl-2 text-xs text-gray-700 placeholder-gray-700 outline-none"
                placeholder="Sök produkter"
            />
        </div>
    )
}

export default Serach
