import ResponseDto from "../response.dto";
import MyFriendListItem from "../../../types/interface/myFriendListItem";


export default interface MyFriendListResponseDto extends ResponseDto{
    myFriendProfileListItem : MyFriendListItem[]
}