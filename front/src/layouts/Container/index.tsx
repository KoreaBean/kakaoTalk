import Header from "../header";
import {Outlet, useLocation, useParams} from "react-router-dom";
import './index.css'
import LeftSide from "../../views/leftSide";
import {AUTH_PATH, CHATTING_PATH, MAIN_PATH, SEARCHFRIEND_PATH} from "../../contant";
import {useEffect, useState} from "react";

export default function Container() {


    const {pathname} = useLocation()

    //                  state : container 상태
    const [container, setContainer] = useState<"container" | "container-2"|"container-3" >("container-2")

    const [header, setHeader] = useState<boolean>(false)
    //                  state : leftSide 상태
    const [leftSide,setLeftSide] = useState<boolean>(false);

    const isAuthPage = pathname.startsWith(AUTH_PATH());

    useEffect(() => {
        if (isAuthPage){
            setContainer("container-2")
            setLeftSide(false)
        }
        if (pathname.startsWith(CHATTING_PATH(''))){
            setHeader(true)
            setContainer("container-2")
            setLeftSide(false)
        }if (pathname.startsWith(MAIN_PATH())){
            setHeader(true)
            setContainer("container")
            setLeftSide(true)
        }if(pathname.startsWith(CHATTING_PATH(""))){
            setHeader(true)
            setContainer("container-2")
            setLeftSide(false)
        }if (pathname.startsWith(SEARCHFRIEND_PATH())){
            setHeader(false)
            setContainer("container-2")
            setLeftSide(false)
        }

    },[pathname])
    console.log("isAuthPage"+isAuthPage)
    console.log("path" + AUTH_PATH())
    console.log(leftSide)
    console.log(container)





    return(
        <div className={container}>
            {header && <div className='header-container'><Header/></div>}
            {leftSide && <div className='leftSide'><LeftSide/></div>}
            <div className='outlet'><Outlet/></div>
        </div>
    )
}

