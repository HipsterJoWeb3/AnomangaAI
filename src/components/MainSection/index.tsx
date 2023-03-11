import { FC } from 'react'
import Sidebar from "../Sidebar";
import ButtonRounded from "../../UI/ButtonRounded";
import FirstSlide from "./FirstSlide";

const MainScreen: FC = () => {

    return (
        <div className="grid grid-cols-12">
            <Sidebar />
            <div className="col-start-3 col-end-13">
                <div className="grid grid-cols-10">
                    <div className="flex flex-col gap-y-7 col-start-1 col-end-5">
                        <h1 className="font-bold text-6xl">AnoMangaAI</h1>
                        <p className="font-light">Дайте волю своей фантазии и наслаждайтесь мангой на своем языке с Anonimo Manga.</p>
                        <div className="flex gap-x-5">
                            <ButtonRounded classes="px-5 py-3 ">Читать мангу</ButtonRounded>
                            <ButtonRounded classes="px-5 py-3 bg-black text-white">Попробовать перевод</ButtonRounded>
                        </div>
                        <p className="text-xs font-light">При поддержке anonimo и hipsterJo </p>
                    </div>
                    <div className="col-start-5 col-end-11">
                        <FirstSlide />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default MainScreen