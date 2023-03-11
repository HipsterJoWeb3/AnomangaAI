import { FC } from 'react'
import Search from "./Search";
import Logo from "./Logo";
import Language from "./Language";

const Header: FC = () => {

    return (
        <div className="mb-48 grid grid-cols-12 items-center">
            <Logo/>
            <div className="col-start-3 col-end-9 w-full">
                <Search />
            </div>
            <div className="col-start-11 col-end-13 flex justify-end">
                <Language />
            </div>
        </div>
    )
}

export default Header