import {FC} from 'react'
import {Link} from "react-router-dom";

interface FooterLinksType {
    title?: string,
    links: {
      title: string,
      path: string
    }[]
}

const FooterLinks: FC<FooterLinksType> = ({title, links}) => {

    return (
        <div className="flex flex-col gap-y-5">
            <h3 className="font-bold">{title}</h3>
            <ul className="flex flex-col gap-y-4">
                {
                    links.map(({title, path}) =>
                        <li>
                            <Link to={path} className="text-sm">{title}</Link>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}


export default FooterLinks