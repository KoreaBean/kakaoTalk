package com.example.kakaotalk.repository;

import com.example.kakaotalk.entity.ChatRoomEntity;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ChatRoomRepository extends JpaRepository<ChatRoomEntity, Long> {


    ChatRoomEntity findTopByOrderByRoomIdDesc();

    ChatRoomEntity findByRoomId(long id);

}
