package com.example.kakaotalk.service.implement;

import com.example.kakaotalk.dto.request.main.CreateChattingRoomRequestDto;
import com.example.kakaotalk.entity.ChatRoomEntity;
import com.example.kakaotalk.repository.ChatRoomRepository;
import com.example.kakaotalk.service.ChatService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ChatServiceImpl implements ChatService {

    private final ChatRoomRepository chatRoomRepository;

    @Override
    public boolean isChatRoom(CreateChattingRoomRequestDto dto) {
        List<ChatRoomEntity> chatRoomEntities = new ArrayList<>();
        List<ChatRoomEntity> list = new ArrayList<>();

        try {
            list = chatRoomRepository.findByEmailLike(dto.getEmail1());
            if (list == null) {

            }

            for (ChatRoomEntity chat : list){
                if (chat.getEmail().equals(dto.getEmail2())){
                    // 새로운 방 생성
                }else {
                    //기존 방 id 가져오기
                }
            }


        }catch (Exception e){
            e.printStackTrace();

        }



        return false;
    }
}
