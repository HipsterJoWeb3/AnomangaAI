import {FC, useState} from 'react'


const Radio: FC = () => {
    const [item, setItem] = useState(1)

    return (
        <div>
            <p className="text-lg font-medium mb-7">ориентация страницы</p>
            <div className="flex gap-x-7 pl-5">
                <div
                    className="flex gap-x-3 items-center cursor-pointer font-medium"
                    onClick={() => setItem(1)}
                >
                    <div className={`w-3 h-3 border border-black rounded-full relative radio-element ${item === 1 ? 'radio-active' : ''}`}>

                    </div>
                    <span>вертикальный</span>
                </div>
                <div
                    className="flex gap-x-3 items-center cursor-pointer font-medium"
                    onClick={() => setItem(2)}
                >
                    <div className={`w-3 h-3 border border-black rounded-full relative radio-element ${item === 2 ? 'radio-active' : ''}`}></div>
                    <span>горизонтальный</span>
                </div>
            </div>
        </div>
    )
}

export default Radio