import ResponseDto from "../response.dto";


export default interface SearchAddFriendResponseDto extends ResponseDto{
    searchAddFriendList : SearchAddFriendListItem[]
}


export  interface SearchAddFriendListItem{
    email : string
    profileImage : string | null
    nickname : string
}