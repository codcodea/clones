import { For } from 'solid-js'
import { Circle } from './svg'

const Indicators = (props) => {
    return (
        <div class="flex w-full items-center justify-center">
            <For each={props.indicators()}>
                {(item) => <Circle id={item} {...props} />}
            </For>
        </div>
    )
}

export default Indicators
