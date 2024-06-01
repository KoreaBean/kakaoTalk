package com.example.kakaotalk.repository;

import com.example.kakaotalk.entity.ChatRoomEntity;
import com.example.kakaotalk.entity.primaryKey.ChatRoomPk;
import org.aspectj.weaver.ast.Literal;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ChatRoomRepository extends JpaRepository<ChatRoomEntity, ChatRoomPk> {


    List<ChatRoomEntity> findByEmailLike(String email);

}
