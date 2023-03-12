import {FC} from 'react'

interface ArrowIconType {
    classes?: string
}

const ArrowIcon: FC<ArrowIconType> = ({classes}) => {


    return (
        <div className={classes}>
            <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.4633 0.682312H0.536668C0.0889585 0.682312 -0.161031 1.15502 0.11623 1.47773L7.57956 10.1319C7.79319 10.3796 8.20454 10.3796 8.42044 10.1319L15.8838 1.47773C16.161 1.15502 15.911 0.682312 15.4633 0.682312Z" fill="black"/>
            </svg>
        </div>

    )
}

export default ArrowIcon