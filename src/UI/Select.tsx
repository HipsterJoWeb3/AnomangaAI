import {FC, useEffect, useRef, useState} from 'react'
import ArrowIcon from "../icons/ArrowIcon";



const Select: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Обрабатываем событие щелчка мыши за пределами выпадающего списка
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        // Добавляем обработчик щелчка мыши на весь документ
        document.addEventListener('mousedown', handleClickOutside);

        // Удаляем обработчик щелчка мыши при размонтировании компонента
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <div className="relative">
            <button
                className="block w-full text-left bg-slate-100 rounded-full px-5 py-3 flex items-center justify-between"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="block truncate">Option 1</span>
                <ArrowIcon classes={`${isOpen ? 'rotate-180' : ''} duration-100`}/>
            </button>
            {
                isOpen && (
                    <div className="absolute mt-5 w-full rounded-lg bg-white shadow-lg overflow-hidden z-10">
                        <ul className="list-none flex flex-col">
                            <li className="px-5 py-3 hover:bg-slate-100 cursor-pointer">Option 1</li>
                            <li className="px-5 py-3 pr-9 hover:bg-slate-100 cursor-pointer">Option 2</li>
                            <li className="px-5 py-3 pr-9 hover:bg-slate-100 cursor-pointer">Option 3</li>
                        </ul>
                    </div>
                )
            }
        </div>
    )
}

export default Select