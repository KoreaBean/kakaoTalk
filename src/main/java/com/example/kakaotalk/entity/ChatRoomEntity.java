package com.example.kakaotalk.entity;

import com.example.kakaotalk.entity.primaryKey.ChatRoomPk;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity(name = "chatroom")
@Getter
@Setter
@Table(name = "chatroom")
@NoArgsConstructor
@AllArgsConstructor
@IdClass(ChatRoomPk.class)
public class ChatRoomEntity {

    @Id
    private int roomId;
    @Id
    private String email;
    private boolean isGroup;



}
