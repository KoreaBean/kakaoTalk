import './index.css';
import ProfileBox from "./myprofileBox";
import MyProfileHeader from "./myprofileBox/myProfileHeader";
import UpdateProfileHeader from "./updateProfile/header";
import UpdateProfile from "./updateProfile";
import FriendHeader from "./friendProfile/friendHeader";
import MyFriendProfile from "./friendProfile";
import {useEffect, useRef, useState} from "react";
import MyFriendListItem from "../../types/interface/myFriendListItem";
import updateUserListItem from "../../types/interface/updateUserList.interface";
import {CreateChattingRoom, getMyFriendList} from "../../apis";
import useLoginUserStore from "../../stores/login-user.stores";
import {ResponseDto} from "../../apis/response";
import MyFriendListResponseDto from "../../apis/response/myfriend/MyFriendListResponseDto";
import {useCookies} from "react-cookie";
import stompClient from "../chatting/chattingMessage/stompclient";
import {CreateChattingRoomRequestDto} from "../../apis/request/main";


export default function Main() {


    const [friendList, setFriendList] = useState<MyFriendListItem[] | null>([])

    const [updateFriendList,setUpdateFriendList] = useState<updateUserListItem[]>([])

    const email = sessionStorage.getItem('email')
    const myNickname = sessionStorage.getItem('nickname')

    const getMyFriendListResponse = (responseBody : ResponseDto | MyFriendListResponseDto | null) => {

        if (!responseBody){
            alert("오류!!")
            return
        }
        const {code} = responseBody

        if (code !== "SU"){
            alert("큰일났다 오류!!")
        }
        const {myFriendProfileListItem} = responseBody as MyFriendListResponseDto
        setFriendList(myFriendProfileListItem)

    }


    useEffect(() => {
        if (email == null) return
        getMyFriendList(email).then(getMyFriendListResponse)

    },[email])


    const CreateChattingRoomResponse = (responseBody : ResponseDto) => {
        if (!responseBody) return

        const {code} = responseBody
        alert(code)
    }

    const onDoubleCreateChatRoom = (list :MyFriendListItem) => {
        if (email == null) return
        if (myNickname == null) return;
        const requestBody : CreateChattingRoomRequestDto = {
            email1 : email,
            nickname1 : myNickname,
            email2 : list.email,
            nickname2 : list.nickname
        }
        CreateChattingRoom(requestBody).then(CreateChattingRoomResponse)
    }

    return(


        <div className='main-container'>
            <MyProfileHeader/>
            <ProfileBox/>
            <UpdateProfileHeader/>
            <div className='updateMock-container'>
                {updateFriendList.map((list,index)=> <UpdateProfile key={index} updateUserList={list}/>)}
            </div>
            <FriendHeader number={friendList?.length ?? 0} icon={"expand-down-light"}/>
            <div className='friendsProfileMock-container'>
                {friendList && friendList.map((list, index) =>
                    <div onDoubleClick={() =>onDoubleCreateChatRoom(list)}>
                    <MyFriendProfile key={index} myFriendListItem={list}/>
                    </div>
                )}
            </div>
        </div>
    )
}