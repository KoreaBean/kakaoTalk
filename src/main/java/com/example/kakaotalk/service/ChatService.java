package com.example.kakaotalk.service;

import com.example.kakaotalk.dto.request.main.CreateChattingRoomRequestDto;
import com.example.kakaotalk.dto.response.main.SearchConnectRoomDto;
import org.springframework.http.ResponseEntity;

public interface ChatService {

    ResponseEntity<? super SearchConnectRoomDto> searchRoom(CreateChattingRoomRequestDto dto);
}
