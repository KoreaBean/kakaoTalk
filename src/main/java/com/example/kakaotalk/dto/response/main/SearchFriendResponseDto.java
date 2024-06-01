package com.example.kakaotalk.dto.response.main;

import com.example.kakaotalk.common.ResponseCode;
import com.example.kakaotalk.common.ResponseMessage;
import com.example.kakaotalk.dto.object.UserListItem;
import com.example.kakaotalk.dto.response.ResponseDto;
import com.example.kakaotalk.entity.UserEntity;
import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;


@Getter
public class SearchFriendResponseDto extends ResponseDto {

    private List<UserListItem> userList;


    public SearchFriendResponseDto(List<UserEntity> userEntity) {
        super(ResponseCode.SUCCESS, ResponseMessage.SUCCESS);
        this.userList = UserListItem.getList(userEntity);
    }


    public static ResponseEntity<? super SearchFriendResponseDto> success (List<UserEntity> userEntities){

        SearchFriendResponseDto result = new SearchFriendResponseDto(userEntities);

        return ResponseEntity.status(HttpStatus.OK).body(result);

    }

    public static ResponseEntity<ResponseDto> noExistUser (){

        ResponseDto result = new ResponseDto(ResponseCode.NOT_EXISTED_USER, ResponseMessage.NOT_EXISTED_USER);

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result);

    }

}
