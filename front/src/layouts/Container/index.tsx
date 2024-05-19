import Header from "../header";
import {Outlet, useLocation, useParams} from "react-router-dom";
import './index.css'
import LeftSide from "../../views/leftSide";
import {AUTH_PATH} from "../../contant";


export default function Container() {


    const {pathname} = useLocation();


    return(
        <div className='container'>
            <div className='header-container'><Header/></div>
            <div className='leftside'>{pathname !== AUTH_PATH() && <LeftSide/>}</div>
            <div className='outlet'><Outlet/></div>
        </div>
    )
}

