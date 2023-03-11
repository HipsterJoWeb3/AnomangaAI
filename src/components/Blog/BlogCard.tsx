import {FC} from 'react'
import ButtonRounded from "../../UI/ButtonRounded";

const BlogCard: FC = () => {

    return (
        <div className="flex flex-col gap-y-5">
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-medium">Обновление на версию 1.0.2</h3>
                <span className="">02.05.23</span>
            </div>
            <img src="../../../src/assets/images/post3.png"/>
            <ButtonRounded classes="px-5 py-3 bg-black text-white w-fit">подробнее</ButtonRounded>
        </div>
    )
}

export default BlogCard