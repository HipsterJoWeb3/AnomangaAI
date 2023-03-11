import { FC } from 'react'
import Sidebar from "../Sidebar";

const About: FC = () => {

    return (
        <div className="grid grid-cols-12">
            <div className="col-start-4 col-end-10">
                <h2 className="font-bold text-4xl mb-16 text-center">О нас</h2>
                <p className="text-center">Мы команда энтузиастов, которые предоставляют широкий выбор переводов на разных языках и инновационные функции чтения манги. Наш сайт создан, чтобы сделать чтение манги максимально доступным и удобным для всех, и мы постоянно работаем над его улучшением.</p>
            </div>
        </div>
    )
}

export default About