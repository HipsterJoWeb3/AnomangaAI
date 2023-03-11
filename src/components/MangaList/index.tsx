import { FC } from 'react'
import {Link} from "react-router-dom";
import Card from "./Card";


const MangaList: FC = () => {

    return (
        <div className="grid grid-cols-4 col-start-3 col-end-11 gap-x-5 gap-y-10">
            {
                [... new Array(8)].map((item, i) =>
                    <Card i={i} />
                )
            }
        </div>
    )
}

export default MangaList