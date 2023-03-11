import { FC } from 'react'

interface TextAreaType {
    placeholder?: string,
    classes?: string
}

const TextArea: FC<TextAreaType> = ({placeholder, classes}) => {


    return (
        <textarea
            className={`bg-slate-100 px-8 py-3 rounded text-sm w-full ${classes}`}
            placeholder={placeholder}
        />
    )
}

export default TextArea