import { FC } from 'react'
import ButtonRounded from "../../UI/ButtonRounded";
import ArrowTopIcon from "../../icons/ArrowTopIcon";
import {Link} from "react-router-dom";
import FooterLinks from "./FooterLinks";


const manga = [
    {
        title: 'каталог',
        path: '/manga_list'
    },
    {
        title: 'новинки',
        path: '/manga_list'
    },
    {
        title: 'популярное',
        path: '/manga_list'
    },
    {
        title: 'рейтинг',
        path: '/manga_list'
    },
]

const services = [
    {
        title: 'переводчик',
        path: '/translate'
    },
    {
        title: 'подписка',
        path: '/subscribe'
    },
    {
        title: 'новости и обновления',
        path: '/docs'
    },
    {
        title: 'чач',
        path: '/docs'
    },
]

const developer = [
    {
        title: 'доступ к API',
        path: '/docs'
    },
    {
        title: 'документация',
        path: '/docs'
    },
    {
        title: 'статьи',
        path: '/docs'
    },
]

const Footer: FC = () => {

    return (
        <div className="mt-48 grid grid-cols-12">
            <div className="col-start-3 col-end-9 grid grid-cols-3 gap-x-5">
                <FooterLinks title="Манга" links={manga} />
                <FooterLinks title="Сервисы" links={services} />
                <FooterLinks title="Разработчикам" links={developer} />
            </div>
            <div className="col-start-11 col-end-13 flex justify-end h-fit">
                <ButtonRounded classes="bg-black text-white py-3 px-5 flex gap-x-5 items-center">
                    <ArrowTopIcon />
                    <span>к началу</span>
                </ButtonRounded>
            </div>
        </div>
    )
}

export default Footer