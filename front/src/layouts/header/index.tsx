import './index.css';
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {AUTH_PATH, CHATTING_PATH, MAIN_PATH} from "../../contant";

export default function Header() {

    const {pathname} = useLocation()

    const [headerContainer,setHeaderContainer] = useState<"header-container" | "header-container2"|"header-container3">("header-container")

    useEffect(() => {
        if (pathname.startsWith(MAIN_PATH())){
            setHeaderContainer("header-container2")
        }
        if (pathname == AUTH_PATH()){
            setHeaderContainer("header-container")
        }if (pathname.startsWith(CHATTING_PATH(''))){
            setHeaderContainer('header-container3')
        }

    },[pathname])


    return(
        <div className={headerContainer}>
            <div className='icon-box'>
                <div className='icon cog-icon'></div>
            </div>
            <div className='icon-box'>
                <div className='icon minus-vertical-icon'></div>
            </div>
            <div className='icon-box'>
                <div className='icon minus-icon'></div>
            </div>
            <div className='icon-box'>
                <div className={'icon rectangle-icon'}></div>
            </div>
            <div className='icon-box'>
                <div className='icon x-icon'></div>
            </div>
        </div>
    )
}