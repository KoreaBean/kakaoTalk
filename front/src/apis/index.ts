import {SignInRequestDto} from "./request/auth";
import {SignInResponseDto} from "./response/auth";
import {CreateChattingRoomResponseDto, ResponseDto} from "./response";
import { MyProfileResponseDto} from "./response/myprofile";
import {AddFriendRequestDto, CreateChattingRoomRequestDto, SearchAddFriendList} from "./request/main";
import axios from "axios";
import MyFriendListResponseDto from "./response/myfriend/MyFriendListResponseDto";
import SearchFriendResponseDto from "./response/myfriend/SearchFriend.Response.dto";


const  DOMAIN = 'http://localhost:8080';

const API_DOMAIN = `${DOMAIN}/api/v1`;

const SIGN_IN_URL = () => `${API_DOMAIN}/sign-in`;
const MY_PROFILE_URL = () => `${API_DOMAIN}/main/my-profile`;
const SEARCH_ADD_FRIEND_URL = (email : string) => `${API_DOMAIN}/main/addfriend/${email}`;
const MY_FRIEND_URL = (email : string) =>`${API_DOMAIN}/main/myfriend-list/${email}`;
const ADD_FRIEND_LIST_URL = () => `${API_DOMAIN}/main/addFriend-list`;
const CREATE_CHATTING_ROOM_URL = () => `${API_DOMAIN}/main/create-chatting-room`

export const getMyFriendList = async (email : string) => {
    const result = await  axios.get(MY_FRIEND_URL(email))
        .then(response => {
            const responseBody : MyFriendListResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            if (!error.response) return null;
            const responseBody : ResponseDto = error.response.data;
            return responseBody;
        })
    return result;


}




export const signInRequest = async (requestBody : SignInRequestDto) => {
    const result = await axios.post(SIGN_IN_URL(),requestBody)
        .then(response => {
            const responseBody : SignInResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            if (!error.response.data) return null;
            const responseBody : ResponseDto = error.response.data;
            return responseBody;
        })
    return result;
}

export const MyProfileResponse = async (email : string) => {


    const result = await axios.post(MY_PROFILE_URL(),{email})
        .then(response => {
            console.log(response)
            const responseBody : MyProfileResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            if (!error.response.data) return null;
            const responseBody : ResponseDto = error.response.data;
            return responseBody;
        })
    return result;
}

export const SearchAddFriend = async (email : string) => {

    const result = await axios.get(SEARCH_ADD_FRIEND_URL(email))
        .then(response => {
            console.log(response.data)
            const responseBody : SearchFriendResponseDto = response.data
            return responseBody
        }).catch(error => {
            const responseBody : ResponseDto = error.response.data
            return responseBody
        })

    return result;

}

export const AddFriendList = async (requestBody : AddFriendRequestDto) => {

    const result = await  axios.post(ADD_FRIEND_LIST_URL(),requestBody)
        .then(response => {
            const responseBody : ResponseDto = response.data
            return responseBody
        }).catch(error => {
            const responseBody : ResponseDto = error.response.data;
            return responseBody
        })

    return result;
}

export const CreateChattingRoom = async  (requestBody : CreateChattingRoomRequestDto) => {
    const result = await axios.post(CREATE_CHATTING_ROOM_URL(),requestBody)
        .then(response => {
            const responseBody : CreateChattingRoomResponseDto = response.data;
            return responseBody
        }).catch(error => {
            const responseBody : ResponseDto = error.response.data;
            return responseBody;
        })
    return result;
}
