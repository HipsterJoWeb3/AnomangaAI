import { FC } from 'react'
import {Link} from "react-router-dom";

const Logo: FC = () => {

    return (
        <Link to="/" >
            <div className="border border-black w-10 h-10 rounded-full" />
        </Link>
    )
}

export default Logo