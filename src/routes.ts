import {FC} from "react";
import BlogPage from "./pages/BlogPage";
import DocsPage from "./pages/DocsPage";
import MainPage from "./pages/MainPage";
import MangaListPage from "./pages/MangaListPage";
import MangaReaderPage from "./pages/MangaReaderPage";
import SubscribePage from "./pages/SubscribePage";
import TranslatePage from "./pages/TranslatePage";
import UserPage from "./pages/UserPage";
import MangaIcon from "./icons/MangaIcon";
import TagIcon from "./icons/TagIcon";
import CodeIcon from "./icons/CodeIcon";
import GridIcon from "./icons/GridIcon";
import ContactIcon from "./icons/ContactIcon";
import MangaPage from "./pages/MangaPage";

interface RoutesType {
    name: string,
    path: string,
    Component: FC
}

export const routes: RoutesType[] = [
    {
        name: 'blog',
        path: '/blog',
        Component: BlogPage
    },
    {
        name: 'docs',
        path: '/docs',
        Component: DocsPage
    },
    {
        name: 'main',
        path: '/',
        Component: MainPage
    },
    {
        name: 'manga list',
        path: '/manga_list',
        Component: MangaListPage
    },
    {
        name: 'manga',
        path: '/manga',
        Component: MangaListPage
    },
    {
        name: 'manga reader',
        path: '/manga_reader',
        Component: MangaReaderPage
    },
    {
        name: 'subscribe',
        path: '/subscribe',
        Component: SubscribePage
    },
    {
        name: 'translate',
        path: '/translate',
        Component: TranslatePage
    },
    {
        name: 'user',
        path: '/user',
        Component: UserPage
    },
    {
        name: 'manga page',
        path: '/manga_page',
        Component: MangaPage
    },
]

interface MenuPathType {
    title: string,
    path: string,
    Icon: FC
}

export const menuPath: MenuPathType[] = [
    {
        title: 'манга',
        path: '/manga_list',
        Icon: MangaIcon
    },
    {
        title: 'категории',
        path: '/manga_list',
        Icon: TagIcon
    },
    {
        title: 'API',
        path: '/docs',
        Icon: CodeIcon
    },
    {
        title: 'сервисы',
        path: '/services',
        Icon: GridIcon
    },
    {
        title: 'контакты',
        path: '/manga_list',
        Icon: ContactIcon
    },
]

