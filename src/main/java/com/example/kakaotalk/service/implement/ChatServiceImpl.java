package com.example.kakaotalk.service.implement;

import com.example.kakaotalk.dto.request.main.CreateChattingRoomRequestDto;
import com.example.kakaotalk.dto.response.ResponseDto;
import com.example.kakaotalk.dto.response.main.SearchConnectRoomDto;
import com.example.kakaotalk.dto.response.main.SearchFriendResponseDto;
import com.example.kakaotalk.entity.ChatRoomEntity;
import com.example.kakaotalk.entity.ConnectRoomEntity;
import com.example.kakaotalk.repository.ChatRoomRepository;
import com.example.kakaotalk.repository.ConnectRoomRepository;
import com.example.kakaotalk.service.ChatService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ChatServiceImpl implements ChatService {

    private final ChatRoomRepository chatRoomRepository;
    private final ConnectRoomRepository connectRoomRepository;

    public ResponseEntity<? super SearchConnectRoomDto> searchRoom(CreateChattingRoomRequestDto dto) {
        try {
            // 내 아이디로 만들어진 방 목록 검색
            List<ConnectRoomEntity> myList = connectRoomRepository.findByEmailLike(dto.getEmail1());

            // 검색된 방 목록에서 의 id 값과 dto의 상대의 방 id 값과 같은 객체 뽑기
            List<ConnectRoomEntity> targetList = connectRoomRepository.findByEmailLike(dto.getEmail2());

            for (ConnectRoomEntity myRoom : myList) {
                for (ConnectRoomEntity targetRoom : targetList) {
                    if (myRoom.getRoomId() == targetRoom.getRoomId()) {
                        ChatRoomEntity chatRoom = chatRoomRepository.findByRoomId(myRoom.getRoomId());
                        return SearchConnectRoomDto.success(chatRoom);
                    }
                }
            }

            // 방이 존재하지 않는 경우 새로운 방 생성
            ChatRoomEntity chatRoomEntity = new ChatRoomEntity();
            chatRoomEntity.setRoomName(dto.getNickname1() + "," + dto.getNickname2());
            chatRoomEntity.setGroup(false);
            chatRoomRepository.save(chatRoomEntity);

            chatRoomEntity = chatRoomRepository.findTopByOrderByRoomIdDesc();

            ConnectRoomEntity connectRoom1 = new ConnectRoomEntity();
            connectRoom1.setRoomId(chatRoomEntity.getRoomId());
            connectRoom1.setEmail(dto.getEmail1());
            connectRoomRepository.save(connectRoom1);

            ConnectRoomEntity connectRoom2 = new ConnectRoomEntity();
            connectRoom2.setRoomId(chatRoomEntity.getRoomId());
            connectRoom2.setEmail(dto.getEmail2());
            connectRoomRepository.save(connectRoom2);

            return SearchConnectRoomDto.success(chatRoomEntity);

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.databaseError();
        }
    }

}
