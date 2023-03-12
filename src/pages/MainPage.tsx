import { FC } from 'react'
import MainScreen from "../components/MainSection";
import About from "../components/About";
import MangaSection from "../components/MangaSection";
import Contact from "../components/Contact";
import TryTranslate from "../components/TryTranslate";

const MainPage: FC = () => {

    return (
        <div className="flex flex-col gap-y-48">
            <MainScreen />
            <TryTranslate />
            <MangaSection />
            <About />
            <Contact />
        </div>
    )
}

export default MainPage