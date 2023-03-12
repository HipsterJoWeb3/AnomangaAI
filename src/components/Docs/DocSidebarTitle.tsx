import {FC} from 'react'
import DocSidebarSubtitle from "./DocSidebarSubtitle";
import {Link} from "react-router-dom";

interface DocSidebarTitleType {
    title?: string,
    show?: boolean,
    index?: number,
    setIndex?: ((index?: number) => void) | any
}

const DocSidebarTitle: FC<DocSidebarTitleType> = ({title, show, index, setIndex}) => {

    return (
        <li className="flex flex-col gap-y-5">
            <h3 className="font-medium pr-5">
                <Link to="#test" onClick={() => setIndex(index)}>{title}</Link>
            </h3>
            {
                show &&
                <div className="px-5">
                    <DocSidebarSubtitle/>
                </div>
            }
        </li>
    )
}


export default DocSidebarTitle