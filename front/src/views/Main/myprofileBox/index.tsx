import {forwardRef} from "react";
import './index.css';
import profileDefaultImage from 'assets/images/profileDefaultImage.png';

interface Props {
    profileimage : string | null;
    nickname : string;
    titlemessage : string;
    multiprofile : boolean;
}

export default function ProfileBox() {

    //const {profileimage, nickname, titlemessage } = props

    return (
        <div className='profileBox-container'>
            <div className='user-box'>
                <div className='image-box'>
                    <div className='profileImage' style={{backgroundImage : `url(${profileDefaultImage})`}}></div>
                </div>
                <div className='nickname-box'>
                    <div className='nickname'>{'상균'}</div>
                    <div className='titleMessage'>{'상균입니다'}</div>
                </div>
            </div>
            <div className='multiProfile-box'>
                <div className='multiProfile'>{'멀티프로필 +'}</div>
            </div>
        </div>
    )
}

