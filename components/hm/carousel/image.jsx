import { Show, createSignal, mergeProps } from 'solid-js'

function Heart(props) {
    return (
        <svg
            class={`absolute bottom-[12%] right-[7%] w-6 lg:bottom-[17%] ${
                props.isFilled() ? 'fill-none' : 'hover:fill-none'
            }`}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            focusable="false"
        >
            <path
                class={props.isFilled() ? 'fill-hm ' : 'hover:fill-hm'}
                d="M17.376 1C21.476 1 24 3.556 24 7.748c0 1.614-.961 3.598-2.696 5.9-.89 1.183-1.97 2.425-3.196 3.705a71.38 71.38 0 0 1-3.987 3.832 71.307 71.307 0 0 1-1.816 1.566L12 23l-.305-.25a71.307 71.307 0 0 1-1.816-1.565 71.38 71.38 0 0 1-3.987-3.832c-1.227-1.28-2.305-2.522-3.196-3.704C.961 11.346 0 9.362 0 7.748 0 3.556 2.524 1 6.624 1c2.08 0 4.23 1.548 5.376 3.548C13.145 2.548 15.294 1 17.376 1z"
                fill="#FFF"
            />
            <path
                class=""
                d="M17.376 1C21.476 1 24 3.578 24 7.807c0 1.628-.961 3.63-2.696 5.953-.89 1.192-1.97 2.446-3.196 3.737a71.66 71.66 0 0 1-3.987 3.865 71.495 71.495 0 0 1-1.816 1.58l-.305.251-.305-.252c-.093-.076-.264-.22-.503-.424-.396-.34-.838-.727-1.313-1.155a71.66 71.66 0 0 1-3.987-3.865c-1.227-1.291-2.305-2.545-3.196-3.737C.961 11.437 0 9.435 0 7.807 0 3.578 2.524 1 6.624 1c2.08 0 4.23 1.562 5.376 3.58C13.145 2.56 15.294 1 17.376 1zM12 21.79l.18-.154c.383-.329.812-.704 1.273-1.12a69.488 69.488 0 0 0 3.865-3.746c1.18-1.244 2.217-2.448 3.068-3.587 1.593-2.132 2.462-3.943 2.462-5.286 0-3.64-2.063-5.747-5.565-5.747-1.927 0-4.049 1.768-4.842 3.843L12 7.145l-.44-1.152C10.765 3.919 8.642 2.15 6.716 2.15c-3.502 0-5.565 2.107-5.565 5.747 0 1.343.87 3.154 2.462 5.286.85 1.14 1.887 2.343 3.068 3.587a69.488 69.488 0 0 0 3.865 3.747A69.313 69.313 0 0 0 12 21.789z"
            />
        </svg>
    )
}

function Img(props) {
    const [isFilled, setIsFilled] = createSignal(false)

    // Different data use the same carusel component
    // c1 has category and text
    // c2 has text and price
    // Align data to the same structure
    let merged =
        props.id == 'c2'
            ? mergeProps({ first: props.category, second: props.text }, props)
            : mergeProps({ first: props.text, second: props.price + ',00 kr' }, props)

    // Set syles based on the id (c1 or c2)
    const center = props.id == 'c1' ? '' : 'text-center'
    const text = props.id == 'c1' ? 'py-0.5' : 'py-0.5 font-medium text-neutral-600'

    return (
        <div onClick={() => setIsFilled((p) => !p)} class={`${props.cardWidth} inline-block snap-start`}>
            <img class="w-full object-cover" src={props.img} alt="" />
            <Show when={props.hasIndicator == true}>
                <Heart isFilled={isFilled} />
            </Show>
            <div class={`mt-1 text-[13px] ${center}`}>
                <p class={text}>{merged.first}</p>
                <p class="">{merged.second}</p>
            </div>
        </div>
    )
}

export default Img
