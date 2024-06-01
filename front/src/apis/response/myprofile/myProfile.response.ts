import ResponseDto from "../response.dto";

export default interface MyProfileResponseDto  extends ResponseDto{
    profileImage : string | null;
    email : string;
    nickname : string;
    titleMessage : string;
}

