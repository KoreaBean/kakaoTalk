package com.example.kakaotalk.dto.response.main;

import com.example.kakaotalk.common.ResponseCode;
import com.example.kakaotalk.common.ResponseMessage;
import com.example.kakaotalk.dto.object.myFriendList;
import com.example.kakaotalk.dto.response.ResponseDto;
import com.example.kakaotalk.entity.UserEntity;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

@Getter
@Setter
public class MyFriendProfileListResponseDto extends ResponseDto{

    private List<myFriendList> myFriendProfileListItem;


    public MyFriendProfileListResponseDto(List<UserEntity> userEntities) {
        super(ResponseCode.SUCCESS,ResponseMessage.SUCCESS);
        this.myFriendProfileListItem = myFriendList.getList(userEntities);
    }

    public static ResponseEntity<? super MyFriendProfileListResponseDto> success (List<UserEntity> userEntities) {

        MyFriendProfileListResponseDto result = new MyFriendProfileListResponseDto(userEntities);

        return ResponseEntity.status(HttpStatus.OK).body(result);

    }


    public static ResponseEntity<? super ResponseDto> noExistedUser(){

        ResponseDto responseDto = new ResponseDto(ResponseCode.NOT_EXISTED_USER, ResponseMessage.NOT_EXISTED_USER);

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseDto);
    }
}
