import { FC } from 'react'

import Sidebar from '../components/Sidebar'
import BlogCard from "../components/Blog/BlogCard";

const BlogPage: FC = () => {

    return (
        <div className="grid grid-cols-12">
            <div className="col-start-1 col-end-3">
                <Sidebar />
            </div>
            <div className="col-start-3 col-end-13">
                <h1 className="font-bold text-4xl mb-14">Новости</h1>
                <div className="grid grid-cols-2 gap-x-5 gap-y-14">
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                </div>
            </div>

        </div>

    )
}

export default BlogPage
