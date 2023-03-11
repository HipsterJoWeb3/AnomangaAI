import { FC } from 'react'
import TextArea from "../../UI/TextArea";
import Input from "../../UI/Input";
import ButtonRounded from "../../UI/ButtonRounded";
import SendIcon from "../../icons/SendIcon";
import GithubIcon from "../../icons/GithubIcon";
import TelegramIcon from "../../icons/TelegramIcon";
import {Link} from "react-router-dom";


const Contact: FC = () => {

    return (
        <div className="grid grid-cols-12">
            <div className="col-start-3 col-end-11">
                <h2 className="mb-14 font-bold text-4xl">Связаться с нами</h2>
                <div className="grid grid-cols-2 gap-x-24">
                    <div className="flex flex-col gap-y-8 text-sm">
                        <p>
                            Если у вас есть вопросы, предложения или проблемы с сайтом, пожалуйста, свяжитесь с нами. Мы всегда готовы помочь вам.
                        </p>
                        <p>
                            Также мы будем рады, если вы захотите поддержать наш проект на GitHub. Ваше мнение очень важно для нас и поможет нам сделать наш сайт лучше.
                        </p>
                        <p>
                            Мы постараемся ответить на ваше сообщение как можно скорее. Спасибо, что выбрали наш сайт, мы ценим вашу поддержку!
                        </p>
                    </div>
                    <div className="flex flex-col gap-y-10">
                        <Input placeholder="email" />
                        <TextArea placeholder="сообщение" classes="resize-none h-28" />
                        <div className="flex justify-between items-center">
                            <ButtonRounded classes="flex gap-x-5 items-center bg-black text-white py-3 px-5">
                                <SendIcon />
                                <span>отправить</span>
                            </ButtonRounded>
                            <div className="flex items-center gap-x-5">
                                <Link to="https://github.com/Avecoder" target="_blank">
                                    <GithubIcon />
                                </Link>
                                <Link to="https://t.me/avecoders" target="_blank">
                                    <TelegramIcon />
                                </Link>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact