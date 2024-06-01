import ResponseDto from "../response.dto";
import User from "../../../types/interface/user.interface";

export default interface SearchFriendResponseDto extends ResponseDto{

    userList : User[]

}