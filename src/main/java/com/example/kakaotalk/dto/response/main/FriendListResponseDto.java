package com.example.kakaotalk.dto.response.main;

import com.example.kakaotalk.common.ResponseCode;
import com.example.kakaotalk.common.ResponseMessage;
import com.example.kakaotalk.dto.object.MyFriendListItem;
import com.example.kakaotalk.dto.response.ResponseDto;
import com.example.kakaotalk.entity.SendFriendEntity;
import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

@Getter
public class FriendListResponseDto extends ResponseDto {

    private List<MyFriendListItem> myFriendList;


    public FriendListResponseDto(List<SendFriendEntity> sendFriendEntities) {
        super(ResponseCode.SUCCESS, ResponseMessage.SUCCESS);
        this.myFriendList = MyFriendListItem.getList(sendFriendEntities);
    }



    public static ResponseEntity<? super FriendListResponseDto> success(List<SendFriendEntity> sendFriendEntities){

        FriendListResponseDto result = new FriendListResponseDto(sendFriendEntities);

        return ResponseEntity.status(HttpStatus.OK).body(result);
    }


    public static ResponseEntity<ResponseDto> noExistFriend(){

        ResponseDto result = new ResponseDto(ResponseCode.NOT_EXISTED_USER,ResponseMessage.NOT_EXISTED_USER);

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result);
    }
}
