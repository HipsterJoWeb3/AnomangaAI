import { FC } from 'react'
import ButtonRounded from "../../UI/ButtonRounded";

const Language: FC = () => {

    return (
        <div className="flex gap-x-5">
            <ButtonRounded classes="px-5 py-1.5 bg-black text-white">ru</ButtonRounded>
            <ButtonRounded classes="px-5 py-1.5">en</ButtonRounded>
        </div>
    )
}

export default Language