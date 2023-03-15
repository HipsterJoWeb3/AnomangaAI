import { FC } from 'react'

import DocSidebar from "../components/Docs/DocSidebar";
import Content from "../components/Content";
import {testData} from "../test-data/editor";
import ButtonRounded from "../UI/ButtonRounded";
import ArrowTopIcon from "../icons/ArrowTopIcon";

const DocsPage: FC = () => {

    return (
        <div className="grid grid-cols-12">
            <div className="col-start-1 col-end-4">
                <DocSidebar />
            </div>
            <div className="col-start-5 col-end-12">
                <Content text={testData}/>
                <div className="flex justify-end">
                    <ButtonRounded classes="flex items-center gap-x-5 w-fit px-5 py-3 bg-black text-white">
                        <span>Описание API</span>
                        <div className="rotate-90">
                            <ArrowTopIcon />
                        </div>

                    </ButtonRounded>
                </div>
            </div>
        </div>
    )
}

export default DocsPage