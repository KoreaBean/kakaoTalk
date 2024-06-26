package com.example.kakaotalk.entity;

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
public class ChatRoomEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long roomId;
    private String roomName;
    private String lastSend;
    private boolean isGroup;




}
