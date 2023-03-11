import { FC } from 'react'
import {menuPath} from "../../routes";
import {Link} from "react-router-dom";


const Sidebar: FC = () => {

    return (
        <ul className="gap-y-5 flex flex-col">
            {
                menuPath.map(({title, Icon, path}) =>
                    <li className="flex gap-5 items-center ">
                        <div>
                            <Icon />
                        </div>
                        <Link to={path} className="font-medium hover:bg-black hover:text-white hover:px-3.5 hover:py-1 duration-300 rounded-full">
                            {title}
                        </Link>
                    </li>
                )
            }
        </ul>
    )
}

export default Sidebar