const ArrowRight = (props) => {
    return (
        <svg
            class="h-4 w-4 cursor-pointer hover:fill-hm"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            focusable="false"
            aria-hidden="true"
            onClick={() => props.handleSlide('right')}
        >
            <path d="M12 3l10.001 9.496-10 9.501-.689-.726L20 12.996H2v-1h18l-8.688-8.271z" />
        </svg>
    )
}

const ArrowLeft = (props) => {
    return (
        <svg
            class="h-4 w-4 cursor-pointer hover:fill-hm"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            focusable="false"
            aria-hidden="true"
            onClick={() => props.handleSlide('left')}
        >
            <path d="M12.001 3L2 12.496l10.001 9.501.688-.726L4 12.996h18.001v-1H4l8.689-8.271z" />
        </svg>
    )
}

const Circle = (props) => {
    return (
        <svg
            class={`group mx-1 inline-block w-1.5 cursor-pointer ${
                props.isActive() == props.id ? 'fill-none' : 'hover:fill-none'
            }`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            data-id={props.id}
            onClick={() => {
                props.setIsScrolling(false)
                props.setIsNavigating(true)
                props.setIsActive(props.id)
            }}
        >
            <circle
                class={`${props.isActive() == props.id ? 'fill-hm stroke-none' : 'group-hover:stroke-hm'}`}
                cx="12"
                cy="12"
                r="10"
            />
        </svg>
    )
}

export { ArrowRight, ArrowLeft, Circle }
