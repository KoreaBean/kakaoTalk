package com.example.kakaotalk.dto.response.main;


import com.example.kakaotalk.common.ResponseCode;
import com.example.kakaotalk.common.ResponseMessage;
import com.example.kakaotalk.dto.response.ResponseDto;
import com.example.kakaotalk.entity.ChatRoomEntity;
import com.example.kakaotalk.entity.ConnectRoomEntity;
import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@Getter
public class SearchConnectRoomDto extends ResponseDto {

    private long roomId;
    private String roomName;
    private String lastSend;
    private boolean isGroup;

    public SearchConnectRoomDto(ChatRoomEntity chatRoomEntity) {
        super(ResponseCode.SUCCESS, ResponseMessage.SUCCESS);
        this.roomId = chatRoomEntity.getRoomId();
        this.roomName = chatRoomEntity.getRoomName();
        this.lastSend = chatRoomEntity.getLastSend();
        this.isGroup = chatRoomEntity.isGroup();
    }



    public static ResponseEntity<? super SearchConnectRoomDto> success (ChatRoomEntity chatRoomEntity){

        SearchConnectRoomDto result = new SearchConnectRoomDto(chatRoomEntity);

        return ResponseEntity.status(HttpStatus.OK).body(result);
    }


    public static ResponseEntity<ResponseDto> noExistConnectRoom(){
        ResponseDto result = new ResponseDto(ResponseCode.NOT_EXISTED_USER, ResponseMessage.NOT_EXISTED_USER);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result);
    }
}
