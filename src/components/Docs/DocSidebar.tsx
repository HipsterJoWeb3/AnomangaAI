import {FC, useState} from 'react'
import DocSidebarTitle from "./DocSidebarTitle";

const sidebarData = [
    'Инструкции по использованию сервиса',
    'Описание API',
    'Правила использования сервиса',
    'Инструкции по созданию и настройке интеграции с API',
    'Ссылки на полезные ресурсы'
]

const DocSidebar: FC = () => {
    const [index, setIndex] = useState(0)

    return (
        <div>
            <ul className="flex flex-col gap-y-5">
                {
                    sidebarData.map((item, i) =>
                        <DocSidebarTitle title={item} show={index === i} setIndex={setIndex} index={i}/>
                    )
                }
            </ul>
        </div>
    )
}


export default DocSidebar