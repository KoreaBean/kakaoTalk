package com.example.kakaotalk.dto.response.main;

import com.example.kakaotalk.common.ResponseCode;
import com.example.kakaotalk.common.ResponseMessage;
import com.example.kakaotalk.dto.response.ResponseDto;
import com.example.kakaotalk.entity.UserEntity;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


@Setter
@Getter
public class MyProfileResponseDto  extends ResponseDto {

    private String email;
    private String nickname;
    private String profileImage;
    private String titleMessage;


    public MyProfileResponseDto(UserEntity userEntity) {
        super(ResponseCode.SUCCESS, ResponseMessage.SUCCESS);
        this.email = userEntity.getEmail();
        this.nickname = userEntity.getNickname();
        this.profileImage = userEntity.getProfileImage();
        this.titleMessage = userEntity.getTitleMessage();
    }


    public static ResponseEntity<MyProfileResponseDto> success(UserEntity userEntity){
        MyProfileResponseDto result = new MyProfileResponseDto(userEntity);

        return ResponseEntity.status(HttpStatus.OK).body(result);

    }


    public static ResponseEntity<ResponseDto> noExistUser(){
        ResponseDto result = new ResponseDto(ResponseCode.NOT_EXISTED_USER,ResponseMessage.NOT_EXISTED_USER);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result);
    }


}
