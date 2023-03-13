import { FC } from 'react'
import MangaList from "../MangaList";
import ButtonRounded from "../../UI/ButtonRounded";
import {Link} from "react-router-dom";

const MangaSection: FC = () => {

    return (
        <div className="grid grid-cols-12">
            <div className="col-start-3 col-end-13 flex justify-between items-center mb-16">
                <h2 className="font-bold text-4xl">Популярная манга</h2>
                <Link to="/manga_list">
                    <ButtonRounded classes="h-fit py-3 px-5 text-white bg-black">перейти к каталогу</ButtonRounded>
                </Link>
            </div>
            <MangaList classes={"grid-cols-4"} hasButton={false}  cardsToLoad={8} />
        </div>
    )
}

export default MangaSection