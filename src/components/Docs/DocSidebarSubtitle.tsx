import {FC} from 'react'
import {Link} from "react-router-dom";

const DocSidebarSubtitle: FC = () => {

    return (
        <div>
            <ul className="flex flex-col gap-y-2.5 text-sm">
                <li><Link to="#subtest">Описание функций сервиса</Link></li>
                <li><Link to="#subtest">Инструкции по загрузке и переводу манги</Link></li>
                <li><Link to="#subtest">Информация о доступных языках и опциях перевода</Link></li>
                <li><Link to="#subtest">Инструкции по сохранению и скачиванию переведенных манги</Link></li>
            </ul>
        </div>
    )
}


export default DocSidebarSubtitle