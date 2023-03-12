import {FC, useState} from 'react'
import Input from "../../UI/Input";
import ButtonRounded from "../../UI/ButtonRounded";
import UploadIcon from "../../icons/UploadIcon";
import Select from "../../UI/Select";
import Radio from "../../UI/Radio";


const options = [
    "выбор 1",
    "vibor 2",
    "vibor 3"
]

const TryTranslate: FC = () => {

    const [selectedValue, setSelectedValue] = useState(options[0]);

    return (
        <div className="grid grid-cols-12">
            <div className="col-start-3 col-end-12 grid grid-cols-9">
                <div className="col-start-1 col-end-5">
                    <h2 className="mb-14 font-bold text-4xl">Попробовать автоперевод</h2>
                    <div className="flex flex-col gap-y-14">
                        <Input placeholder="ссылка на изображение"/>
                        <Select options={options} selectedValue={selectedValue} setSelectedValue={setSelectedValue}/>
                        <Radio />
                        <ButtonRounded classes="flex items-center gap-x-5 w-fit px-5 py-3 bg-black text-white">
                            <UploadIcon />
                            <span>загрузить изображение</span>
                        </ButtonRounded>
                    </div>
                </div>
                <div className="col-start-6 col-end-10">
                    <img src="../../../src/assets/images/manga.png"/>
                </div>
            </div>
        </div>
    )
}


export default TryTranslate