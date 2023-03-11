import { FC } from 'react'

interface ButtonRoundedType {
    children?: any,
    classes?: string
}

const ButtonRounded: FC<ButtonRoundedType> = ({children, classes}) => {


    return (
        <button
            className={`text-base border border-black rounded-full hover:bg-black hover:text-white ${classes}`}
        >
            {children}
        </button>
    )
}

export default ButtonRounded