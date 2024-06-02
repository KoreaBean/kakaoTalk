package com.example.kakaotalk.repository;

import com.example.kakaotalk.dto.request.main.CreateChattingRoomRequestDto;
import com.example.kakaotalk.entity.ConnectRoomEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ConnectRoomRepository extends JpaRepository<ConnectRoomEntity,Long> {


    List<ConnectRoomEntity> findByEmailLike(String email);
}
