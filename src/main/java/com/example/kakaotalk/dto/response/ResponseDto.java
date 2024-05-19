package com.example.kakaotalk.dto.response;

import com.example.kakaotalk.common.ResponseCode;
import com.example.kakaotalk.common.ResponseMessage;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@AllArgsConstructor
@Getter
public class ResponseDto {
    private String code;
    private String message;

    public static ResponseEntity<ResponseDto> databaseError(){
        ResponseDto responseDto = new ResponseDto(ResponseCode.DATABASE_ERROR
        , ResponseMessage.DATABASE_ERROR);

        return  ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseDto);
    }

    public static ResponseEntity<ResponseDto> validationFailed(){
        ResponseDto responseDto = new ResponseDto(ResponseCode.VALIDATION_FAILED,ResponseMessage.VALIDATION_FAILED);

        return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(responseDto);
    }
}
