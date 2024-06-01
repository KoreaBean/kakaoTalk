import './index.css'
import {ChangeEvent, useEffect, useState} from "react";
import {AddFriendList, SearchAddFriend} from "../../apis";
import {ResponseDto} from "../../apis/response";
import SearchFriendResponseDto from "../../apis/response/myfriend/SearchFriend.Response.dto";
import User from "../../types/interface/user.interface";
import {AddFriendRequestDto} from "../../apis/request/main";
import {Session} from "inspector";


export default function SearchFriend (){

    const [email,setEmail] = useState<string>('')
    const [phoneNumber, setPhoneNumber] = useState<string>('')
    const [addEmail, setAddEmail] = useState<boolean>(true)
    const [userList,setUserList] = useState<User[]>([])

    const SearchAddFriendResponse = (Response : ResponseDto | SearchFriendResponseDto | null) => {

        if (!Response) return;

        const {code} = Response

        if (code !== "SU"){
            alert(code);
        }

        const {userList} = Response as SearchFriendResponseDto
        console.log(userList)
        setUserList(userList || [])

    }


    useEffect(() => {
        if (email){
            SearchAddFriend(email).then(SearchAddFriendResponse)
        }



    },[email])



    //                  event handler : email Change 핸들러
    const onChangeEmailHandler = (event : ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target
        setEmail(value)


    }

    //                  event handler : email Change 핸들러
    const onChangePhoneNumberHandler = (event : ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target
        setPhoneNumber(value)

    }


    const onClickAddEmailHandler = () => {
        setAddEmail(!addEmail)
    }


    const onClickSendFriend = (receiveEmail : string) => {
        const sendEmail = sessionStorage.getItem("email");
        if (sendEmail == null) return
        const requestBody : AddFriendRequestDto = {sendEmail,receiveEmail}
        AddFriendList(requestBody).then(AddFriendListResponse)
    }
    
    
    const AddFriendListResponse = (response : ResponseDto | null) => {
        
        if (!response) return
        
        const {code} = response

        if (code !== "SU") {
            alert("에러!")
        }else {
            alert("친구 추가 성공")
        }
        
    }

    return(
        <div className={'addFriend-container'}>
            <div className='addFriend-header'>
                <div className='addFriend-header-font'>친구추가</div>
                <div className={'addFriend-header-search-box'}>
                    <div className={addEmail ? 'emailSearch-gray' : 'emailSearch-white'} onClick={onClickAddEmailHandler}>{'이메일로 추가'}</div>
                    <div className={addEmail ? 'phoneSearch-white' : 'phoneSearch-gray'} onClick={onClickAddEmailHandler}>{'전화번호로 추가'}</div>
                </div>
            </div>
            <div className='addFriend-body'>
                <div className='addFriend-body-input-box'>
                    {addEmail ? 
                        <input className='addFriend-input' value={email} onChange={onChangeEmailHandler} placeholder={"친구 이메일"}/> :
                        <input className='addFriend-input'value={phoneNumber}  onChange={onChangePhoneNumberHandler} placeholder={"친구 전화번호"}/>}

                </div>
            </div>


            {userList.length > 0 ? userList.map((user,index) =>

                <div className='addFriend-friendList'>
                    <div className='friendList-box'>
                        <div className='friendList-titleImage'>{user.profileImage}</div>
                        <div className='friendList-user-box'>
                            <div className='friendList-nickname'>{user.nickname}</div>
                            <div className='friendList-email'>{user.email}</div>
                        </div>
                    </div>
                    <div className='friendList-button'>
                        <button onClick={() =>onClickSendFriend(user.email)}>친구 추가</button>
                    </div>
                </div>) :
                <div>{'검색된 친구가 없음'} </div>
                }
            
            
            
        </div>
    )
}