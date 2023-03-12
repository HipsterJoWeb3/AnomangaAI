import { FC } from 'react'
import Input from "../../UI/Input";
import ButtonSquare from "../../UI/ButtonSquare";
import SearhcIcon from "../../icons/SearchIcon";

const Search: FC = () => {
   
    
    return (
        <div className="flex">
            <div className="w-full">
                <Input placeholder="поиск манги" />
            </div>
            <ButtonSquare
                classes="flex align-center justify-center px-7 py-2 -mx-2"
            >
                <SearhcIcon />
            </ButtonSquare>
        </div>
    )
}

export default Search