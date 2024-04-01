import { isMediaLG } from '../helpers/js-breakpoints'

const Hero = (props) => {
    return (
        <div class="w-full">
            <img src={isMediaLG() ? props.src.lg : props.src.sm} alt="" class=" w-full object-cover" />
        </div>
    )
}

export default Hero
