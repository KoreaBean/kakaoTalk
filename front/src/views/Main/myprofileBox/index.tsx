import {forwardRef, useEffect, useState} from "react";
import './index.css';
import profileDefaultImage from 'assets/images/profileDefaultImage.png';
import axios from "axios";
import {MyProfileResponse} from "../../../apis";
import {ResponseDto} from "../../../apis/response";
import {MyProfileResponseDto} from "../../../apis/response/myprofile";
import {Cookies, useCookies} from "react-cookie";




export default function ProfileBox() {

    const [profileImage , setProfileImage] = useState<string | null>('')
    const [titleMessage, setTitleMessage] = useState<string | null>('')
    const [nickname, setNickname] = useState<string | null>('')

    const email = sessionStorage.getItem('email')

    useEffect(() => {
        if (email == null) return
        MyProfileResponse(email).then(myProfileResponseData)

    },[])



    const myProfileResponseData = (responseBody : ResponseDto | MyProfileResponseDto | null) => {
        if (!responseBody) return null;

        if (responseBody.code !== "SU"){
            alert(responseBody.code)
            return ;
        }
        console.log(responseBody)
        const {profileImage, titleMessage, nickname} = responseBody as MyProfileResponseDto;

        setProfileImage(profileImage)
        setTitleMessage(titleMessage)
        setNickname(nickname)



    }


    return (
        <div className='profileBox-container'>
            <div className='user-box'>
                <div className='image-box'>
                    <div className='profileImage' style={{backgroundImage : `url(${profileDefaultImage})`}}></div>
                </div>
                <div className='nickname-box'>
                    <div className='nickname'>{nickname}</div>
                    <div className='titleMessage'>{titleMessage}</div>
                </div>
            </div>
            <div className='multiProfile-box'>
                <div className='multiProfile'>{'멀티프로필 +'}</div>
            </div>
        </div>
    )
}

