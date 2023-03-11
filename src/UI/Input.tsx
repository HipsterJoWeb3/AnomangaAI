import { FC } from 'react'

interface InputType {
    placeholder?: string
}

const Input: FC<InputType> = ({placeholder}) => {


    return (
        <input
            type="text"
            className="bg-slate-100 px-8 py-3 rounded text-sm w-full"
            placeholder={placeholder}
        />
    )
}

export default Input