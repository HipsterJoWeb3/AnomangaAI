import { FC } from 'react'
import {Link} from "react-router-dom";
import Card from "./Card";

interface MangaList {
    classes?: string
}


const MangaList: FC<MangaList> = ({classes}) => {

    return (
        <div className={`grid  col-start-3 col-end-11 gap-x-5 gap-y-10 ${classes}`}>
            {
                [... new Array(8)].map((item, i) =>
                    <Card i={i} />
                )
            }
        </div>
    )
}

export default MangaList